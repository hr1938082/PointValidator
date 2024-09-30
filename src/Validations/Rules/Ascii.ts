import { BaseValidateRule } from "../ValidateRule"
import ValidateRegex from "./ValidateRegex";

const Ascii: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    if (!ValidateRegex("^[\x00-\x7F]+$/", value)) {
        return false;
    }
    return true;
}

export default Ascii