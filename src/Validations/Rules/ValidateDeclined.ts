
const ValidateDeclined = (value: string | number | boolean) => {
    return value === "no"
        || value === "off"
        || value === 0
        || value === "0"
        || value === false
        || value === "false"
}

export default ValidateDeclined