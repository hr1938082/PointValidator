import { BaseValidateRule } from "../ValidateRule"
import KeyValueCheck from "./KeyValueCheck";
import ValidateRequired from "./ValidateRequired";

const RequiredUnless: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    if (ruleKeyParams && ruleKeyParams.length > 0) {
        const keyValueCheck = KeyValueCheck(values, ruleKeyParams);
        if (!keyValueCheck) {
            return true;
        }
        return ValidateRequired(values[key]);
    }
    return true
}

export default RequiredUnless