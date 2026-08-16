import {
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    Switch,
    TimePicker,
} from "antd";
import dayjs from "dayjs";
import React from "react";

interface Properties {
    ref?: string;
    type: string;
    name?: string;
    title?: string;
    value?: any;
    minValue?: any;
    maxValue?: any;
    step?: any;
    options?: any[];
    optionsKey?: string;
    disabledValues?: any[];
    errorMessage?: string;
    placeholder?: string;
    disabled?: boolean;
    horizontalStyle?: boolean;
    wrapContent?: boolean;
    disablePastDates?: boolean;
    hidden?: boolean;
    style?: any;
    maxLength?: number;
    description?: string;
    inputWidth?: string;
    allCaps?: boolean;
    capitalize?: boolean;
    capitalizeFirst?: boolean;
    showPasswordToggle?: boolean;
    onChange: (value: string | boolean) => void;
    onEnterKeyPress?: () => void;
}
const AppInput = React.forwardRef<any, Properties>((properties, ref) => {
    if (properties.hidden) {
        return null;
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && properties.onEnterKeyPress) {
            properties.onEnterKeyPress();
        }
    };

    const getInput = () => {
        const options =
            properties.options &&
            properties.options.map((option) => {
                let disabled = false;
                const id = option["id"];
                if (
                    properties.disabledValues &&
                    properties.disabledValues.length != 0
                ) {
                    const disabledValue = properties.disabledValues.find(
                        (element) => element == id,
                    );
                    disabled = disabledValue != undefined;
                }
                return {
                    value: id,
                    label: option[properties.optionsKey || "name"],
                    disabled: disabled,
                };
            });

        let input;

        if (properties.type == "password") {
            input = (
                <Input.Password
                    ref={ref}
                    name={properties.name}
                    value={properties.value}
                    placeholder={properties.placeholder}
                    disabled={properties.disabled}
                    maxLength={properties.maxLength}
                    onKeyDown={handleKeyDown}
                    onChange={(event) => {
                        properties.onChange(event.target.value);
                    }}
                    visibilityToggle={properties.showPasswordToggle}
                />
            );
        } else if (properties.type == "text-area") {
            input = (
                <Input.TextArea
                    ref={ref}
                    name={properties.name}
                    value={properties.value}
                    placeholder={properties.placeholder}
                    disabled={properties.disabled}
                    maxLength={properties.maxLength}
                    onKeyDown={handleKeyDown}
                    onChange={(event) => {
                        let value = event.target.value;
                        if (properties.capitalize) {
                            value = value.replace(/\b\w/g, (char) =>
                                char.toUpperCase(),
                            );
                        } else if (properties.capitalizeFirst) {
                            value =
                                value.charAt(0).toUpperCase() + value.slice(1);
                        }
                        properties.onChange(value);
                    }}
                    className={
                        properties.allCaps
                            ? "uppercase-input"
                            : properties.capitalize
                              ? "capitalize-input"
                              : ""
                    }
                />
            );
        } else if (properties.type == "date") {
            input = (
                <DatePicker
                    ref={ref}
                    name={properties.name}
                    value={properties.value ? dayjs(properties.value) : null}
                    disabled={properties.disabled}
                    onKeyDown={handleKeyDown}
                    minDate={properties.disablePastDates ? dayjs() : undefined}
                    onChange={(date, dateString) => {
                        let value = typeof dateString === "string" 
                            ? dateString 
                            : Array.isArray(dateString) 
                            ? dateString[0] 
                            : "";
                        properties.onChange(value || "");
                    }}
                />
            );
        } else if (properties.type == "time") {
            console.log("properties.value", properties.value);
            input = (
                <TimePicker
                    ref={ref}
                    name={properties.name}
                    defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                    value={
                        properties.value ? dayjs(properties.value, "HH:mm:ss") : null
                    }
                    disabled={properties.disabled}
                    onKeyDown={handleKeyDown}
                    onChange={(time, timeString) => {
                        let value = typeof timeString === "string" 
                            ? timeString 
                            : Array.isArray(timeString) 
                            ? timeString[0] 
                            : "";
                        properties.onChange(value || "");
                    }}
                />
            );
        } else if (properties.type == "timemilli") {
            input = (
                <TimePicker
                    ref={ref}
                    name={properties.name}
                    format="HH:mm:ss.SSS"
                    defaultOpenValue={dayjs("00:00:00.000", "HH:mm:ss.SSS")}
                    value={
                        properties.value ? dayjs(properties.value, "HH:mm:ss.SSS") : null
                    }
                    disabled={properties.disabled}
                    onKeyDown={handleKeyDown}
                    onChange={(time, timeString) => {
                        let value = typeof timeString === "string" 
                            ? timeString 
                            : Array.isArray(timeString) 
                            ? timeString[0] 
                            : "";
                        properties.onChange(value || "");
                    }}
                />
            );
        } else if (
            properties.type == "select" ||
            properties.type == "multiselect"
        ) {
            let values = properties.value;

            // Remove values that are not in the options
            if (
                options &&
                properties.value &&
                properties.type == "multiselect"
            ) {
                values = [];
                properties.value.forEach((value: any) => {
                    for (const option of options) {
                        if (option["value"] == value) {
                            values.push(value);
                            break;
                        }
                    }
                });
            }

            input = (
                <Select
                    ref={ref}
                    showSearch
                    filterOption={(input, option) =>
                        (option?.label.toLowerCase() ?? "").includes(
                            input.toLowerCase(),
                        )
                    }
                    mode={
                        properties.type == "multiselect"
                            ? "multiple"
                            : undefined
                    }
                    value={values}
                    options={options}
                    disabled={properties.disabled}
                    onKeyDown={handleKeyDown}
                    onChange={(value) => {
                        properties.onChange(value);
                    }}
                />
            );
        } else if (properties.type == "number") {
            input = (
                <InputNumber
                    ref={ref}
                    name={properties.name}
                    style={
                        properties.inputWidth
                            ? { width: properties.inputWidth }
                            : { width: 200 }
                    }
                    min={properties.minValue}
                    max={properties.maxValue}
                    value={properties.value}
                    step={properties.step}
                    disabled={properties.disabled}
                    onKeyDown={handleKeyDown}
                    onChange={(value) => {
                        properties.onChange(value);
                    }}
                    stringMode
                />
            );
        } else if (properties.type == "checkbox") {
            input = (
                <Checkbox
                    ref={ref}
                    name={properties.name}
                    checked={properties.value}
                    disabled={properties.disabled}
                    onKeyDown={handleKeyDown}
                    onChange={(event) => {
                        properties.onChange(event.target.checked);
                    }}
                />
            );
        } else if (properties.type == "switch") {
            input = (
                <>
                    <Switch
                        ref={ref}
                        checked={
                            properties.value == "1" ||
                            properties.value == 1 ||
                            properties.value == true
                        }
                        disabled={properties.disabled}
                        onChange={(checked) => {
                            properties.onChange(checked);
                        }}
                    />
                </>
            );
        } else {
            input = (
                <Input
                    ref={ref}
                    name={properties.name}
                    value={properties.value}
                    placeholder={properties.placeholder}
                    disabled={properties.disabled}
                    maxLength={properties.maxLength}
                    onKeyDown={handleKeyDown}
                    onChange={(event) => {
                        let value = event.target.value;
                        if (properties.capitalize) {
                            value = value.replace(/\b\w/g, (char) =>
                                char.toUpperCase(),
                            );
                        } else if (properties.capitalizeFirst) {
                            value =
                                value.charAt(0).toUpperCase() + value.slice(1);
                        }
                        properties.onChange(value);
                    }}
                    className={
                        properties.allCaps
                            ? "uppercase-input"
                            : properties.capitalize
                              ? "capitalize-input"
                              : ""
                    }
                />
            );
        }

        return (
            <Form.Item
                style={properties.style}
                label={properties.title}
                validateStatus={properties.errorMessage ? "error" : ""}
                hasFeedback
                help={
                    properties.errorMessage &&
                    properties.errorMessage.toString().replace(" id ", " ")
                }
                layout={properties.horizontalStyle ? "horizontal" : "vertical"}
                extra={properties.description}
            >
                {input}
            </Form.Item>
        );
    };

    return getInput();
});

export default AppInput;
