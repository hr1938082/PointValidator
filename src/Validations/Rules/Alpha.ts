import { BaseValidateRule } from "../ValidateRule"
import ValidateRegex from "./ValidateRegex";

const Alpha: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    if (!ValidateRegex("^[A-Za-z]+$", value)) {
        return false;
    }
    return true;
}

export default Alpha