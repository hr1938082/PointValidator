import { BaseValidateRule } from "../ValidateRule"
import ValidateRequired from "./ValidateRequired";

const RequiredIfNotAny: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    if (ruleKeyParams && ruleKeyParams.length > 0) {
        const valueToNotRequired = ruleKeyParams.some(valueToMatchKey => {
            const valueToMatchValue = values[valueToMatchKey];
            return !ValidateRequired(valueToMatchValue)
        })
        if (!valueToNotRequired) {
            return true;
        }
        return ValidateRequired(values[key])
    }
    return true
}

export default RequiredIfNotAny