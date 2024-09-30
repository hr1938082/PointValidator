import { BaseValidateRule } from "../ValidateRule"

const IsBoolean: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    if (
        value !== true
        && value !== false
        && value !== 0
        && value !== 1
        && value !== "0"
        && value !== "1"
    ) {
        return false;
    }
    return true;
}

export default IsBoolean