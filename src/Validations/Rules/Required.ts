import { BaseValidateRule } from "../ValidateRule";
import ValidateRequired from "./ValidateRequired";


const Required: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    return ValidateRequired(value);
}

export default Required