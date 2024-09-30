import { BaseValidateRule } from "../ValidateRule"
import ValidateRegex from "./ValidateRegex";

const Email: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    if (!ValidateRegex("^[\\w\\-.]+@([\\w\\-]+\\.)+[\\w\\-]{2,4}$", value)) {
        return false;
    }
    return true
}

export default Email