import { BaseValidateRule } from "../ValidateRule"
import KeyValueCheck from "./KeyValueCheck";
import ValidateDeclined from "./ValidateDeclined";

const DeclinedUnless: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    if (ruleKeyParams && ruleKeyParams.length > 0) {
        const keyValueCheck = KeyValueCheck(values, ruleKeyParams);
        if (!keyValueCheck) {
            return true;
        }
        return ValidateDeclined(values[key]);
    }
    return true
}

export default DeclinedUnless