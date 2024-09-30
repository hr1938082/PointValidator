import { BaseValidateRule } from "../ValidateRule"
import ValidateDate from "./ValidateDate";

const IsDate: BaseValidateRule = ({ values, key }) => {
    const value = values[key];
    if (!ValidateDate(value)) {
        return false;
    }
    return true;
}

export default IsDate