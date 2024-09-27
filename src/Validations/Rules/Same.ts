import { BaseValidateRule } from "../ValidateRule"

const Same: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    const value = values[key];
    if (ruleKeyParams && ruleKeyParams.length === 1) {
        const valueToMatch = values[ruleKeyParams[0]];
        if (value === valueToMatch) {
            return true;
        }
        return false;
    }
    return true
}

export default Same