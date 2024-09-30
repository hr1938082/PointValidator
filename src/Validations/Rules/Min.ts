import { BaseValidateRule } from "../ValidateRule"

const Min: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    if (ruleKeyParams && ruleKeyParams.length === 1 && !isNaN(Number(ruleKeyParams[0]))) {
        const value = values[key];
        const min = Number(ruleKeyParams[0])
        if (!isNaN(Number(value))) {
            if (Number(value) >= min) {
                return true;
            } else {
                return false;
            }
        } else if (value.length >= min) {
            return true;
        } else {
            return false
        }
    }
    return true
}

export default Min