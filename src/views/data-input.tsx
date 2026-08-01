import React, { useRef } from "react";
import AppInput from "./app-input";
import { useRequestContext } from "@wingtrackerph/laroona-react-lib";
import moment from "moment";

interface Properties {
    requestKey: string;
    type: string;
    title?: string;
    dataKey: string;
    options?: any[];
    optionsKey?: string;
    placeholder?: string;
    disabled?: boolean;
    horizontalStyle?: boolean;
    wrapContent?: boolean;
    isInitialValueDisabled?: boolean;
    disablePastDates?: boolean;
    hidden?: boolean;
    minValue?: any;
    maxValue?: any;
    step?: any;
    style?: any;
    maxLength?: number;
    description?: string;
    inputWidth?: string;
    errorKey?: string;
    allCaps?: boolean;
    capitalize?: boolean;
    capitalizeFirst?: boolean;
    showPasswordToggle?: boolean;
    onSetValue?: (value: any) => void;
    onEnterKeyPress?: () => void;
}

const DataInput = (properties: Properties) => {
    const { notifyPostRequests, getPostRequest, getPostRequestErrorProperty } =
        useRequestContext();

    let type = properties.type;
    const data = getPostRequest(properties.requestKey).postData;
    const errors = getPostRequest(properties.requestKey).errors;
    let dataKey = properties.dataKey;
    let value = data[properties.dataKey];
    const inputRefs = getPostRequest(properties.requestKey).inputRefs;
    if (!inputRefs[properties.dataKey]) {
        inputRefs[properties.dataKey] = useRef(null);
    }

    if (
        type == "date-datetime" ||
        type == "time-datetime" ||
        type == "timemilli-datetime"
    ) {
        const dateKey = properties.dataKey + "_data-date";
        const timeKey = properties.dataKey + "_data-time";
        type =
            type == "date-datetime"
                ? "date"
                : type == "time-datetime"
                  ? "time"
                  : "timemilli";
        dataKey = type == "date" ? dateKey : timeKey;

        if (value) {
            const utcDate = moment.utc(value).toDate();
            const utcDateString = moment(utcDate)
                .local()
                .format("YYYY-MM-DD HH:mm:ss.SSS");
            const dataDate = utcDateString.substring(0, 10);
            const dataTime =
                type == "time"
                    ? utcDateString.substring(11, 19)
                    : utcDateString.substring(11, 23);

            data[dateKey] = dataDate;
            data[timeKey] = dataTime;
        } else {
            data[dateKey] = null;
            data[timeKey] = null;
        }

        if (data[properties.dataKey]) {
            if (data[dateKey] && type == "date") {
                value = data[dateKey];
            } else if (
                data[timeKey] &&
                (type == "time" || type == "timemilli")
            ) {
                value = data[timeKey];
            }
        }
    }

    let disabledValues = undefined;
    const options = properties.options;
    if (properties.isInitialValueDisabled) {
        if (value) {
            disabledValues = data[dataKey + "-disabled"];
            if (!disabledValues) {
                disabledValues = data[dataKey];
                data[dataKey + "-disabled"] = disabledValues;
            }
        } else {
            data[dataKey + "-disabled"] = [];
        }
    }

    return (
        <AppInput
            ref={inputRefs[properties.dataKey]}
            name={dataKey}
            type={type}
            title={properties.title}
            value={value}
            placeholder={properties.placeholder}
            options={options}
            optionsKey={properties.optionsKey}
            disabled={properties.disabled}
            maxLength={properties.maxLength}
            horizontalStyle={properties.horizontalStyle}
            wrapContent={properties.wrapContent}
            disabledValues={disabledValues}
            disablePastDates={properties.disablePastDates}
            hidden={properties.hidden}
            minValue={properties.minValue}
            maxValue={properties.maxValue}
            step={properties.step}
            style={properties.style}
            inputWidth={properties.inputWidth}
            description={properties.description}
            errorMessage={getPostRequestErrorProperty(
                properties.requestKey,
                properties.errorKey || properties.dataKey,
            )}
            allCaps={properties.allCaps}
            capitalize={properties.capitalize}
            capitalizeFirst={properties.capitalizeFirst}
            showPasswordToggle={properties.showPasswordToggle}
            onEnterKeyPress={properties.onEnterKeyPress}
            onChange={(value) => {
                if (properties.onSetValue) {
                    properties.onSetValue(value);
                }

                if (
                    properties.type == "date-datetime" ||
                    properties.type == "time-datetime" ||
                    properties.type == "timemilli-datetime"
                ) {
                    const dateKey = properties.dataKey + "_data-date";
                    const timeKey = properties.dataKey + "_data-time";
                    if (value) {
                        let dateValue =
                            properties.type == "date-datetime" ? value : null;
                        if (!dateValue) {
                            dateValue = data[dateKey]
                                ? data[dateKey]
                                : moment().format("YYYY-MM-DD");
                        }

                        let timeValue =
                            properties.type == "time-datetime" ||
                            properties.type == "timemilli-datetime"
                                ? value
                                : null;
                        if (!timeValue) {
                            timeValue = data[timeKey]
                                ? data[timeKey]
                                : "00:00:00.000";
                        }

                        value = moment(dateValue + " " + timeValue)
                            .utc()
                            .format("YYYY-MM-DD HH:mm:ss.SSS");
                    }
                }

                data[properties.dataKey] = value;

                if (value && errors && errors[properties.dataKey]) {
                    delete errors[properties.dataKey];
                }

                notifyPostRequests();
            }}
        />
    );
};

export default DataInput;
