import { BaseValidateRule } from "../ValidateRule"
import ValidateDate from "./ValidateDate";

const DateLessThan: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    if (ruleKeyParams && ruleKeyParams.length === 1) {
        let value = values[key];
        let valueMustBe: string | number = ruleKeyParams[0];
        if (ValidateDate(value)) {
            if (values[valueMustBe]) {
                if (!ValidateDate(values[valueMustBe])) {
                    return false;
                }
                value = new Date(value).getTime();
                valueMustBe = new Date(values[valueMustBe]).getTime();
                if (value < valueMustBe) {
                    return false;
                }
            } else if (ValidateDate(valueMustBe)) {
                value = new Date(value).getTime();
                valueMustBe = new Date(valueMustBe).getTime();
                if (value < valueMustBe) {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }

    }
    return true
}

export default DateLessThan