import { Keys } from "..";
import Rules from "../Rules";
import ValidateRule, { ValidateRuleOptions, ValidateRuleResponse } from "./ValidateRule";


type ValidateRuleWithOutRule = (options: Omit<ValidateRuleOptions, 'rule'>) => ValidateRuleResponse;

type ValidationsObj = {
    [k in Keys]?: ValidateRuleWithOutRule
}

const Validations = (): ValidationsObj => {

    const validations: ValidationsObj = {};

    for (const key in Rules) {
        const newKey = key as keyof typeof Rules;
        if (newKey === 'not') {
            continue;
        }
        const RuleSet = Rules[newKey];
        for (const rule of RuleSet) {
            validations[rule] = (options: Omit<ValidateRuleOptions, 'rule'>) => ValidateRule({ ...options, rule })
        }
    }

    return validations;
}

export default Validations;