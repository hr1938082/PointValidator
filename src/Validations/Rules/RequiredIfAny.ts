import { BaseValidateRule } from "../ValidateRule"
import ValidateRequired from "./ValidateRequired";

const RequiredIfAny: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    if (ruleKeyParams && ruleKeyParams.length > 0) {
        const valueToRequired = ruleKeyParams.some(valueToMatchKey => {
            const valueToMatchValue = values[valueToMatchKey];
            return ValidateRequired(valueToMatchValue)
        })
        if (!valueToRequired) {
            return true;
        }
        return ValidateRequired(values[key])
    }
    return true
}

export default RequiredIfAny