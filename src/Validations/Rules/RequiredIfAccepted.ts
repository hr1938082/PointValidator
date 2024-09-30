import { BaseValidateRule } from "../ValidateRule"
import ValidateAccepted from "./ValidateAccepted";
import ValidateRequired from "./ValidateRequired";

const RequiredIfAccepted: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    if (ruleKeyParams && ruleKeyParams.length > 0) {
        for (const valueToMatchKey of ruleKeyParams) {
            const valueToMatchValue = values[valueToMatchKey];
            if (!ValidateAccepted(valueToMatchValue)) {
                return true;
            }
        }
        return ValidateRequired(values[key])
    }
    return true
}

export default RequiredIfAccepted