
const ValidateRequired = (value: undefined | null | string) => {
    return value !== null && value !== '' && value !== undefined
}

export default ValidateRequired