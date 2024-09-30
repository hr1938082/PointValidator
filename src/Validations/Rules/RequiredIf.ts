import { BaseValidateRule } from "../ValidateRule"
import ValidateRequired from "./ValidateRequired";

const RequiredIf: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    if (ruleKeyParams && ruleKeyParams.length > 0) {
        for (const valueToMatchKey of ruleKeyParams) {
            const valueToMatchValue = values[valueToMatchKey];
            if (!ValidateRequired(valueToMatchValue)) {
                return true;
            }
        }
        return ValidateRequired(values[key])
    }
    return true
}

export default RequiredIf