import { BaseValidateRule } from "../ValidateRule"
import ValidateRegex from "./ValidateRegex";

const Between: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    if (
        ruleKeyParams
        && ruleKeyParams.length === 2
        && !isNaN(Number(ruleKeyParams[0]))
        && !isNaN(Number(ruleKeyParams[0]))
    ) {
        const value = values[key];
        const min = Number(ruleKeyParams[0]);
        const max = Number(ruleKeyParams[0]);
        if (!isNaN(Number(value))) {
            if (Number(value) >= min && Number(value) <= max) {
                return true;
            } else {
                return false;
            }
        } else if (value.length >= min && value.length <= max) {
            return true
        } else {
            return false
        }
    }
    return true;
}

export default Between