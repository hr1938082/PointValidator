
const ValidateDate = (value: string) => {
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
        return true;
    }
    return false
}

export default ValidateDate