import { BaseValidateRule } from "../ValidateRule"
import Declined from "./Declined";
import KeyValueCheck from "./KeyValueCheck";
import ValidateDeclined from "./ValidateDeclined";

const DeclinedIf: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    if (ruleKeyParams && ruleKeyParams.length > 0) {
        for (const valueToMatchKey of ruleKeyParams) {
            const valueToMatchValue = values[valueToMatchKey];
            if (!ValidateDeclined(valueToMatchValue)) {
                return true;
            }
        }
        return ValidateDeclined(values[key])
    }
    return true
}

export default DeclinedIf