import { BaseValidateRule } from "../ValidateRule";


const Required: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    return value !== null && value !== '' && value !== undefined
}

export default Required