import { BaseValidateRule } from "../ValidateRule"

const Same: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    if (ruleKeyParams && ruleKeyParams.length === 1) {
        const value = values[key];
        const valueToMatch = values[ruleKeyParams[0]];
        if (value === valueToMatch) {
            return true;
        }
        return false;
    }
    return true
}

export default Same