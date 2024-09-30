import { BaseValidateRule } from "../ValidateRule"
import ValidateAccepted from "./ValidateAccepted";

const Accepted: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    return ValidateAccepted(value);
}

export default Accepted