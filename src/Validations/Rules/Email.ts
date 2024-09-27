import { BaseValidateRule } from "../ValidateRule"

const Email: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regex.test(value)
}

export default Email