import { BaseValidateRule } from "../ValidateRule"
import ValueConvarsion from "./ValueConvarsion";

const Contains: BaseValidateRule = ({ values, key, ruleKeyParams }) => {
    const value = values[key];
    if (ruleKeyParams && ruleKeyParams.length > 0) {
        const ruleKeyParamsConverted = ruleKeyParams.map((ruleKeyParam) => ValueConvarsion(ruleKeyParam));
        return ruleKeyParamsConverted.every(ruleKeyParamConverted => {
            value.includes(ruleKeyParamConverted);
        })
    }
    return true;
}

export default Contains