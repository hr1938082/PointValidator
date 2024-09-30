
const ValidateAccepted = (value: string | number | boolean) => {
    return value === "yes"
        || value === "on"
        || value === 1
        || value === "1"
        || value === true
        || value === "true"
}

export default ValidateAccepted