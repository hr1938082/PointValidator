import { BaseValidateRule } from "../ValidateRule"
import ValidateRegex from "./ValidateRegex";

const AlphaNumericSymbols: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    if (!ValidateRegex("^[A-Za-z0-9!@#\$%\^\&*\)\(+=._-]+$", value)) {
        return false;
    }
    return true;
}

export default AlphaNumericSymbols