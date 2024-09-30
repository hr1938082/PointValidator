import { BaseValidateRule } from "../ValidateRule"
import ValidateRegex from "./ValidateRegex";

const Regex: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    if (ruleKeyParams && ruleKeyParams.length === 1) {
        const value = values[key];
        if (ValidateRegex(ruleKeyParams[0], value)) {
            return true
        }
        return false;
    }
    return true
}

export default Regex