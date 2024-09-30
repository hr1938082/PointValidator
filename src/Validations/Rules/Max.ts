import { BaseValidateRule } from "../ValidateRule"

const Max: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    if (ruleKeyParams && ruleKeyParams.length === 1 && !isNaN(Number(ruleKeyParams[0]))) {
        const value = values[key];
        const max = Number(ruleKeyParams[0])
        if (!isNaN(Number(value))) {
            if (Number(value) <= max) {
                return true;
            } else {
                return false;
            }
        } else if (value.length <= max) {
            return true;
        } else {
            return false
        }
    }
    return true
}

export default Max