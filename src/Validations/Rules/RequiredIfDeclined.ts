import { BaseValidateRule } from "../ValidateRule"
import ValidateDeclined from "./ValidateDeclined";
import ValidateRequired from "./ValidateRequired";

const RequiredIfDeclined: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    if (ruleKeyParams && ruleKeyParams.length > 0) {
        for (const valueToMatchKey of ruleKeyParams) {
            const valueToMatchValue = values[valueToMatchKey];
            if (!ValidateDeclined(valueToMatchValue)) {
                return true;
            }
        }
        return ValidateRequired(values[key])
    }
    return true
}

export default RequiredIfDeclined