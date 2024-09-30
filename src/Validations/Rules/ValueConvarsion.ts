
const ValueConvarsion = (value: string) => {
    if (!isNaN(Number(value))) {
        return Number(value);
    } else if (value === "true" || value === "false") {
        return value === "true" ? true : false;
    } else if (value === "undefined") {
        return undefined;
    } else if (value === "null") {
        return null;
    } else {
        return value
    }
}

export default ValueConvarsion