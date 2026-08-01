import React from "react";
import ApiService from "../services/api-service";
import { useAuthContext } from "./auth-context";
import { useNotificationContext } from "./notification-context";
import { formatUtcIsoDate, formatUtcIsoDateTimeMilli } from "../helpers/format-helpers";

interface RequestContextType {
    fetchRequest: (request: AppRequest) => void;
    fetchRequests: (
        requestsToFetch: AppRequest[],
        forceFetch?: boolean,
    ) => void;
    submitPostRequest: (parameters: {
        key: string;
        path: string;
        showToast?: boolean;
        showErrorToast?: boolean;
        onSuccess?: Function;
        onError?: Function;
        extraParameters?: any;
    }) => void;
    submitDeleteRequest: (parameters: {
        key: string;
        path: string;
        data?: any;
        showToast?: boolean;
        showErrorToast?: boolean;
        onSuccess?: Function;
        onError?: Function;
    }) => void;
    createRequest: (parameters: {
        key: string;
        path: string;
        pageSize?: number;
        queryText?: string;
        onSuccess?: Function;
    }) => AppRequest;
    getRequest: (key: string) => AppRequest;
    getPostRequest: (key: string) => AppRequest;
    getPostRequestErrorProperty: (key: string, propertyKey: string) => any;
    notifyRequests: () => void;
    notifyPostRequests: () => void;
    isForCreation: (key: string) => boolean;
    filterRequestData: (
        key: string,
        queryText: string,
        propertiesToFilter: string[],
    ) => void;
    clearRequest: (key: string) => void;
    clearPostRequest: (key: string) => void;
    clearRequests: () => void;
}

const RequestContext = React.createContext<RequestContextType>(
    {} as RequestContextType,
);

export const useRequestContext = () => {
    return React.useContext(RequestContext);
};

export interface AppRequest {
    key: string;
    path: string;
    pathWithParams: string;
    isLoading: boolean;
    isDone: boolean;
    queryText: string;

    rawData: any;
    data: any[];
    singleData: any;
    postData: any;
    inputRefs: any;

    errors: any;
    errorMessage: string | undefined | null;

    onSuccess: Function | undefined | null;

    isPaginated: boolean;
    currentPage: number;
    lastPage: number;
    pageSize: number;
    total: number;
    from: number;
}

interface RequestProviderProps {
    children: React.ReactNode;
}

export const RequestProvider: React.FC<RequestProviderProps> = ({
    children,
}) => {
    const { logout } = useAuthContext();
    const { setNotificationData } = useNotificationContext();

    const [requests, setRequests] = React.useState<AppRequest[]>([]);
    const [postRequests, setPostRequests] = React.useState<AppRequest[]>([]);

    const createRequest = (parameters: {
        key: string;
        path: string;
        pageSize?: number;
        queryText?: string;
        onSuccess?: Function;
    }): AppRequest => {
        const request = getRequest(parameters.key);
        request.path = parameters.path;
        request.pageSize = parameters.pageSize ?? 0;
        request.queryText = parameters.queryText ?? "";
        request.onSuccess = parameters.onSuccess;
        return request;
    };

    const notifyPostRequests = () => {
        setPostRequests(Object.assign([], postRequests));
    };

    const notifyRequests = () => {
        setRequests(Object.assign([], requests));
    };

    const handleErrorFromResponse = (
        request: AppRequest,
        response: any,
        forGetRequest = true,
        showToast: boolean = true,
    ) => {
        let error: any = "";
        response = response.response;
        if (!response || !response.data || response.data instanceof String) {
            error = "Unhandled server exception.";
        } else if (response.data.message) {
            if (response.data.message.includes("Unauthenticated")) {
                error = "Session has expired. Please login again.";
                clearRequests();
                logout();
            } else {
                error = "Unhandled server exception.";
            }
        } else {
            error = response.data.error || "Unhandled server exception.";
        }

        request.isLoading = false;
        request.isDone = true;

        if (error instanceof Object) {
            request.errors = error;
        } else {
            request.errorMessage = error;

            if (response && showToast) {
                setNotificationData({
                    show_notification: true,
                    error_title: response.data["error_title"],
                    error_message: error,
                });
            }
        }

        if (forGetRequest) {
            request.data = [];
            notifyRequests();
        } else {
            notifyPostRequests();
        }
    };

    const fetchRequest = (request: AppRequest) => {
        request.isDone = false;
        fetchRequests([request]);
    };

    const fetchRequests = (
        requestsToFetch: AppRequest[],
        forceFetch = true,
    ) => {
        for (const requestToFetch of requestsToFetch) {
            const request = getRequest(requestToFetch.key);
            request.path = requestToFetch.path;
            request.onSuccess = requestToFetch.onSuccess;

            if (!forceFetch && (request.isLoading || request.isDone)) {
                continue;
            }

            if (!request.path) {
                setTimeout(() => {
                    request.data = [];
                    notifyRequests();
                }, 500);
                continue;
            }

            // Generate Path
            const alreadyHasParameter = request.path.includes("?");
            const delimiter = alreadyHasParameter ? "&" : "?";
            if (request.queryText.length >= 2) {
                request.pathWithParams = `${request.path}${delimiter}query_text=${request.queryText}`;
            } else if (request.pageSize) {
                request.pathWithParams = `${request.path}${delimiter}page_size=${request.pageSize}&page=${request.currentPage}`;
            } else {
                request.pathWithParams = request.path;
            }

            request.isLoading = true;
            notifyRequests();
            ApiService.get<{ data: any }>(request.pathWithParams)
                .then((response) => {
                    if (!response.data) {
                        handleErrorFromResponse(request, response);
                        return;
                    }

                    let responseData = response.data.data;

                    if (
                        responseData instanceof Object &&
                        responseData["current_page"]
                    ) {
                        request.isPaginated = true;
                        request.currentPage = responseData["current_page"];
                        request.lastPage = responseData["last_page"];
                        request.total = responseData["total"];
                        request.from = responseData["from"];
                        responseData = responseData["data"];
                    } else if (
                        responseData instanceof Object &&
                        responseData["data"]
                    ) {
                        request.isPaginated = false;
                        request.total = responseData["total"];
                        responseData = responseData["data"];
                        request.currentPage = 0;
                        request.lastPage = 1;
                    } else {
                        request.isPaginated = false;
                        request.currentPage = 0;
                        request.lastPage = 1;
                    }

                    if (responseData instanceof Array) {
                        request.rawData = responseData;
                        request.data = request.rawData;
                    } else {
                        request.singleData = responseData;
                    }

                    request.isLoading = false;
                    request.isDone = true;
                    if (request.onSuccess) {
                        request.onSuccess(responseData);
                    }

                    notifyRequests();
                })
                .catch((response) => {
                    handleErrorFromResponse(request, response);
                });
        }
    };

    const getRequestFromRequests = (
        requestsParam: AppRequest[],
        key: string,
    ): AppRequest => {
        let request = requestsParam.find((request) => request.key == key);
        if (!request) {
            request = {
                key: key,
                path: "",
                pathWithParams: "",
                isLoading: false,
                isDone: false,
                queryText: "",
                rawData: [],
                data: [],
                singleData: null,
                postData: { id: 0 },
                inputRefs: {},
                errors: null,
                errorMessage: "",
                onSuccess: null,
                isPaginated: false,
                currentPage: 0,
                lastPage: 1,
                pageSize: 0,
                total: 0,
                from: 0,
            };
            requestsParam.push(request);
        }

        return request;
    };

    const getRequest = (key: string): AppRequest => {
        return getRequestFromRequests(requests, key);
    };

    const filterRequestData = (
        key: string,
        queryText: string,
        propertiesToFilter: string[],
    ) => {
        const request = getRequest(key);
        const rawData = request.rawData;
        const data = rawData["links"] ? rawData["data"] : rawData;

        queryText = queryText.toLowerCase();
        let filteredData = data.filter((item: any) => {
            let found = false;
            propertiesToFilter.forEach((key) => {
                if (!item[key]) {
                    return;
                }

                if (item[key].toLowerCase().includes(queryText)) {
                    found = true;
                    return true;
                }
            });
            return found;
        });

        if (Object.prototype.hasOwnProperty.call(rawData, "links")) {
            const newData = JSON.parse(JSON.stringify(rawData));
            newData["data"] = filteredData;
            filteredData = newData;
        }

        request.data = filteredData;
        notifyRequests();
    };

    const getPostRequest = (key: string): AppRequest => {
        return getRequestFromRequests(postRequests, key);
    };

    const submitPostRequest = (parameters: {
        key: string;
        path: string;
        showToast?: boolean;
        showErrorToast?: boolean;
        onSuccess?: Function;
        onError?: Function;
        extraParameters?: any;
    }) => {
        const request = getPostRequest(parameters.key);

        // Prevent duplicate submissions - if already loading, ignore this request
        if (request.isLoading) {
            console.warn(
                `Request ${parameters.key} is already in progress, ignoring duplicate submission`,
            );
            return;
        }

        request.path = parameters.path;
        request.isLoading = true;
        request.errorMessage = null;
        request.errors = null;
        notifyPostRequests();

        const data = request.postData;

        if (parameters.extraParameters) {
            Object.keys(parameters.extraParameters).forEach((key) => {
                data[key] = parameters.extraParameters[key];
            });
        }

        const keysToDelete: string[] = [];
        Object.keys(data).forEach((key) => {
            if (key.endsWith("_data-date")) {
                const dataKey = key.replace("_data-date", "");
                const dateKey = key;
                const timeKey = dataKey + "_data-time";
                if (data[dateKey]) {
                    if (data[timeKey]) {
                        data[dataKey] = data[dateKey] + " " + data[timeKey];
                        data[dataKey] = formatUtcIsoDateTimeMilli(
                            data[dataKey],
                        );
                    } else {
                        data[dataKey] = formatUtcIsoDate(data[dateKey]);
                    }
                }

                keysToDelete.push(dateKey);
                keysToDelete.push(timeKey);
            }
        });

        keysToDelete.forEach(function (key) {
            delete data[key];
        });

        ApiService.post(parameters.path, data)
            .then((response) => {
                request.data = [];
                request.isLoading = false;
                request.isDone = true;
                notifyPostRequests();

                if (request.onSuccess) {
                    request.onSuccess(response.data.data);
                }

                if (parameters.onSuccess) {
                    parameters.onSuccess(response.data.data, data);
                }

                if (parameters.showToast !== false) {
                    setNotificationData({
                        show_notification: true,
                        success_title: response.data["success_title"],
                        success_message: response.data["success_message"]
                            ? response.data["success_message"]
                            : "Successfully saved.",
                    });
                }
            })
            .catch((response) => {
                handleErrorFromResponse(
                    request,
                    response,
                    false,
                    parameters.showErrorToast ?? true,
                );
                if (parameters.onError) {
                    const error =
                        response &&
                        response.response &&
                        response.response.data &&
                        response.response.data.error;
                    parameters.onError(error);
                }
            });
    };

    const submitDeleteRequest = (parameters: {
        key: string;
        path: string;
        data?: any;
        showToast?: boolean;
        showErrorToast?: boolean;
        onSuccess?: Function;
        onError?: Function;
    }) => {
        // Create a request object directly without using getPostRequest
        const request: AppRequest = {
            key: parameters.key,
            path: parameters.path,
            pathWithParams: parameters.path,
            isLoading: true,
            isDone: false,
            queryText: "",
            rawData: [],
            data: [],
            singleData: null,
            postData: {},
            inputRefs: {},
            errors: null,
            errorMessage: null,
            onSuccess: null,
            isPaginated: false,
            currentPage: 0,
            lastPage: 1,
            pageSize: 0,
            total: 0,
            from: 0,
        };

        ApiService.delete(parameters.path, { data: parameters.data })
            .then((response) => {
                request.isLoading = false;
                request.isDone = true;

                if (parameters.onSuccess) {
                    parameters.onSuccess(response.data.data);
                }

                if (parameters.showToast !== false) {
                    setNotificationData({
                        show_notification: true,
                        success_title: response.data["success_title"],
                        success_message: response.data["success_message"]
                            ? response.data["success_message"]
                            : "Successfully deleted.",
                    });
                }
            })
            .catch((response) => {
                handleErrorFromResponse(
                    request,
                    response,
                    false,
                    parameters.showErrorToast ?? true,
                );
                if (parameters.onError) {
                    const error =
                        response &&
                        response.response &&
                        response.response.data &&
                        response.response.data.error;
                    parameters.onError(error);
                }
            });
    };

    const getPostRequestErrorProperty = (key: string, propertyKey: string) => {
        const errors = getPostRequest(key).errors;
        if (!errors) {
            return false;
        }

        if (propertyKey.endsWith("_data-date")) {
            propertyKey = key.replace("_data-date", "");
        } else if (propertyKey.endsWith("_data-time")) {
            propertyKey = key.replace("_data-time", "");
        }

        return errors[propertyKey];
    };

    const clearRequests = () => {
        setRequests([]);
        setPostRequests([]);
    };

    const clearRequest = (key: string) => {
        const index = requests.findIndex((i) => i.key === key);
        if (index > -1) {
            requests.splice(index, 1);
        }
    };

    const clearPostRequest = (key: string) => {
        const index = postRequests.findIndex((i) => i.key === key);
        if (index > -1) {
            postRequests.splice(index, 1);
            notifyPostRequests();
        }
    };

    const isForCreation = (key: string) => {
        const dataProperty = getPostRequest(key).postData;
        return dataProperty.id == 0;
    };

    return (
        <RequestContext.Provider
            value={{
                fetchRequest,
                fetchRequests,
                submitPostRequest,
                submitDeleteRequest,
                createRequest,
                getRequest,
                getPostRequest,
                getPostRequestErrorProperty,
                notifyRequests,
                notifyPostRequests,
                isForCreation,
                filterRequestData,
                clearRequest,
                clearPostRequest,
                clearRequests,
            }}
        >
            {children}
        </RequestContext.Provider>
    );
};
