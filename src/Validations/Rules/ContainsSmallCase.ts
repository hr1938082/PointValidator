import { BaseValidateRule } from "../ValidateRule"
import ValidateRegex from "./ValidateRegex";

const ContainsSmallCase: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    if (!ValidateRegex(".*[a-z].*", value)) {
        return false;
    }
    return true;
}

export default ContainsSmallCase