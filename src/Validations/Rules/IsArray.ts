import { BaseValidateRule } from "../ValidateRule"

const IsArray: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    if (!Array.isArray(value)) {
        return false;
    }
    return true;
}

export default IsArray