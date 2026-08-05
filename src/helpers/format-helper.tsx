import moment from "moment";

export const defaultDateTimeFormat = "ddd, MMM Do YYYY, h:mm:ss a";
export const defaultDateFormat = "ddd, MMM Do YYYY";
export const defaultTimeFormat = "h:mm:ss a";

export const isoDateTimeFormat = "YYYY-MM-DD HH:mm:ss";
export const isoDateFormat = "YYYY-MM-DD";
export const isoTimeFormat = "HH:mm:ss";
export const isoDateTimeMilliFormat = "YYYY-MM-DD HH:mm:ss.SSS";

export const formatDateTime = (date: string) => {
    if (!date) {
        return "";
    }
    const utcDate = moment.utc(date).toDate();
    return moment(utcDate).local().format(defaultDateTimeFormat);
};

export const formatDate = (date: string) => {
    if (!date) {
        return "";
    }
    const utcDate = moment.utc(date).toDate();
    return moment(utcDate).local().format(defaultDateFormat);
};

export const formatIsoDateTime = (date: string) => {
    if (!date) {
        return "";
    }
    const utcDate = moment.utc(date).toDate();
    return moment(utcDate).local().format(isoDateTimeFormat);
};

export const formatIsoDate = (date: string) => {
    if (!date) {
        return "";
    }
    const utcDate = moment.utc(date).toDate();
    return moment(utcDate).local().format(isoDateFormat);
};

export const formatIsoDateTimeMilli = (date: string) => {
    if (!date) {
        return "";
    }
    const utcDate = moment.utc(date).toDate();
    return moment(utcDate).local().format(isoDateTimeMilliFormat);
};

export const formatIsoTime = (date: string) => {
    if (!date) {
        return "";
    }
    const utcDate = moment.utc(date).toDate();
    return moment(utcDate).local().format(isoTimeFormat);
};

export const formatTime = (date: string) => {
    if (!date) {
        return "";
    }
    const utcDate = moment.utc(date).toDate();
    return moment(utcDate).local().format(defaultTimeFormat);
};

export const formatUtcIsoDateTime = (date: string) => {
    if (!date) {
        return "";
    }
    return moment(date).utc().format(isoDateTimeFormat);
};

export const formatUtcIsoDateTimeMilli = (date: string) => {
    if (!date) {
        return "";
    }
    return moment(date).utc().format(isoDateTimeMilliFormat);
};

export const formatUtcIsoDate = (date: string) => {
    if (!date) {
        return "";
    }
    return moment(date).utc().format(isoDateFormat);
};

export const formatLocalIsoDateTime = (date: string) => {
    if (!date) {
        return "";
    }
    return moment(date).local().format(isoDateTimeFormat);
};

export const formatLocalIsoDate = (date: string) => {
    if (!date) {
        return "";
    }
    return moment(date).local().format(isoDateFormat);
};

export const formatNumber = (number: number) => {
    if (!number) {
        return "-";
    }

    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatDecimal = (decimal: string, decimalPlace = 6) => {
    if (!decimal) {
        return "-";
    }

    const decimalValues = Number(decimal)
        .toFixed(decimalPlace)
        .toString()
        .split(".");
    const wholeNumber = formatNumber(Number(decimalValues[0]));
    const decimalNumber = decimalValues.length == 2 ? decimalValues[1] : 0;

    return wholeNumber + "." + decimalNumber;
};

export const convertDMStoDecimal = (key: string, data: any) => {
    if (
        data[key + "_degrees"] === "" ||
        data[key + "_minutes"] === "" ||
        data[key + "_seconds"] === ""
    ) {
        data[key] = "";
        return;
    }

    const degrees = data[key + "_degrees"];
    const minutes = data[key + "_minutes"];
    const seconds = data[key + "_seconds"];

    data[key] = parseFloat(
        (
            parseInt(degrees) +
            parseInt(minutes) / 60 +
            parseFloat(seconds) / 3600
        ).toFixed(8),
    );
};

export const convertDecimaltoDMS = (key: string, data: any) => {
    if (!data[key]) {
        return;
    }

    const decimal = data[key];
    const degrees = Math.floor(decimal);
    const minutes = Math.floor((decimal - degrees) * 60);
    const seconds = ((decimal - degrees - minutes / 60) * 3600).toFixed(5);

    data[key + "_degrees"] = degrees;
    data[key + "_minutes"] = minutes;
    data[key + "_seconds"] = seconds;
};
