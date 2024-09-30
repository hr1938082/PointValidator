import { BaseValidateRule } from "../ValidateRule"
import ValidateAccepted from "./ValidateAccepted";

const AcceptedIf: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    if (ruleKeyParams && ruleKeyParams.length > 0) {
        for (const valueToMatchKey of ruleKeyParams) {
            const valueToMatchValue = values[valueToMatchKey];
            if (!ValidateAccepted(valueToMatchValue)) {
                return true;
            }
        }
        return ValidateAccepted(values[key])
    }
    return true
}

export default AcceptedIf