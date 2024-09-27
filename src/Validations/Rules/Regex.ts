import { BaseValidateRule } from "../ValidateRule"

const Regex: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    const value = values[key];
    if (ruleKeyParams && ruleKeyParams.length === 1) {
        const regex = new RegExp(ruleKeyParams[0]);

        if (regex.test(value)) {
            return true
        }
        return false;
    }
    return true
}

export default Regex