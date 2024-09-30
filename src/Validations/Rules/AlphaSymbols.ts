import { BaseValidateRule } from "../ValidateRule"
import ValidateRegex from "./ValidateRegex";

const AlphaSymbols: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    if (!ValidateRegex("^[A-Za-z!@#\$%\^\&*\)\(+=._-]+$", value)) {
        return false;
    }
    return true;
}

export default AlphaSymbols