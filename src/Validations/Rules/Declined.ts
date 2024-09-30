import { BaseValidateRule } from "../ValidateRule"
import ValidateDeclined from "./ValidateDeclined";

const Declined: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    return ValidateDeclined(value);
}

export default Declined