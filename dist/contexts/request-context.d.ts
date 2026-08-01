import { default as React } from 'react';
interface RequestContextType {
    fetchRequest: (request: AppRequest) => void;
    fetchRequests: (requestsToFetch: AppRequest[], forceFetch?: boolean) => void;
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
    filterRequestData: (key: string, queryText: string, propertiesToFilter: string[]) => void;
    clearRequest: (key: string) => void;
    clearPostRequest: (key: string) => void;
    clearRequests: () => void;
    getRequestKeys: () => string[];
}
export declare const useRequestContext: () => RequestContextType;
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
export declare const RequestProvider: React.FC<RequestProviderProps>;
export {};
//# sourceMappingURL=request-context.d.ts.map