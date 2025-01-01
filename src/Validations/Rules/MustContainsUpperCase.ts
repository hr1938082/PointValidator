import { BaseValidateRule } from "../ValidateRule"
import ValidateRegex from "./ValidateRegex";

const MustContainsUpperCase: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    if (!ValidateRegex(".*[A-Z].*", value)) {
        return false;
    }
    return true;
}

export default MustContainsUpperCase