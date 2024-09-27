import { Keys } from "..";
import Messages from "./Messages";
import Rules from "./Rules";

export interface BaseValidateRuleOptions {
    values: Record<string, any>,
    key: string;
    ruleKey: Keys,
    ruleKeyParams?: string[],
    message?: string,
}

export type BaseValidateRule = (options: BaseValidateRuleOptions) => boolean

export interface ValidateRuleSuccessResponse {
    isValidate: true;
}


export interface ValidateRuleResponse {
    isValidate: boolean;
    message: null | string;
};


export interface ValidateRuleOptions extends BaseValidateRuleOptions {
    rule: keyof typeof Rules,
}

export type ValidateRule = (options: ValidateRuleOptions) => ValidateRuleResponse

const ValidateRule: ValidateRule = ({ key, rule, message, ruleKey, ruleKeyParams, values }) => {
    const appliedRule = Rules[rule]({
        key,
        message,
        ruleKey,
        ruleKeyParams,
        values
    });

    if (!appliedRule) {
        return {
            isValidate: false,
            message: message ? message : Messages(key, ruleKey, ruleKeyParams)
        }
    }

    return {
        isValidate: true,
        message: null
    }
}

export default ValidateRule