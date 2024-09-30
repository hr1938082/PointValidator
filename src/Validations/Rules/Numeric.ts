import { BaseValidateRule } from "../ValidateRule"
import ValidateRegex from "./ValidateRegex";

const Numeric: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    if (!ValidateRegex("^[0-9]+$", value)) {
        return false;
    }
    return true;
}

export default Numeric