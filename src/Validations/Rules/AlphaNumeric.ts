import { BaseValidateRule } from "../ValidateRule"
import ValidateRegex from "./ValidateRegex";

const AlphaNumeric: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    if (!ValidateRegex("^[A-Za-z0-9]+$", value)) {
        return false;
    }
    return true;
}

export default AlphaNumeric