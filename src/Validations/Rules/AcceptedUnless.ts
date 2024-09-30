import { BaseValidateRule } from "../ValidateRule"
import KeyValueCheck from "./KeyValueCheck";
import ValidateAccepted from "./ValidateAccepted";

const AcceptedUnless: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    if (ruleKeyParams && ruleKeyParams.length > 0) {
        const keyValueCheck = KeyValueCheck(values, ruleKeyParams);
        if (!keyValueCheck) {
            return true;
        }
        return ValidateAccepted(values[key]);
    }
    return true
}

export default AcceptedUnless