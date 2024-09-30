
const ValidateRegex = (pattern: string, value: string) => {
    const regex = new RegExp(pattern);
    return regex.test(value);
}

export default ValidateRegex