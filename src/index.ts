import Rules from "./Rules";
import Validations from "./Validations";

export type BasicRules = typeof Rules.basic[number];
export type ValuesRules = typeof Rules.value[number];
export type KeyRules = typeof Rules.key[number];
export type KeyValueRules = typeof Rules.key_value[number];
export type NotValidationRule = typeof Rules.not[number];

export type Keys = BasicRules | ValuesRules | KeyRules | KeyValueRules;

type CommaSeparatedKeyValue<T> = `${Extract<keyof T, string>},value`;

export type ValueRulesWithParams = `${ValuesRules}:value`;
export type KeyRulesWithParam<T> = `${KeyRules}:${Extract<keyof T, string>}`;
export type KeyValueRuleWithParams<T> = `${KeyValueRules}:${CommaSeparatedKeyValue<T>}`

export type KeysWithParam<T> = BasicRules
    | ValueRulesWithParams
    | KeyRulesWithParam<T>
    | KeyValueRuleWithParams<T>
    | NotValidationRule
    | (`${string}` & {});

export type Rules<T> = {
    [k in keyof T]?: KeysWithParam<T>[]
}

export type Message<T> = {
    [K in keyof T]?: {
        [Rule in Keys]?: string;
    };
};

export type Error<T> = {
    [K in keyof T]?: any
}

export interface Options<T extends Record<string, any>> {
    values: T;
    rules?: Rules<T>;
    message?: Message<Rules<T>>;
}

const Validator = <T extends Record<string, any>>(options: Options<T>) => {
    let isValidated = true;
    let errors: Error<T> = {};
    const validate = (...fields: Extract<keyof T, string>[]) => {
        if (
            options.values
            && Object.keys(options.values).length > 0
            && options.rules
            && Object.keys(options.rules).length > 0
        ) {
            for (const key in options.rules) {
                if (fields.length > 0 && !fields.some(field => field === key)) {
                    continue;
                }
                const ruleSet = options.rules[key];
                if (ruleSet) {
                    const newRuleset = ruleSet.filter(rule => !Rules.not.some(notRule => notRule === rule));
                    const errorObj: any = {};
                    for (const rule of newRuleset) {
                        const splitedRule = rule.split(':');
                        const ruleKey = splitedRule[0] as Keys;
                        const ruleKeyParams = [];
                        if (splitedRule.length > 1) {
                            ruleKeyParams.push(...splitedRule[1].split(','));
                        }
                        const validation = Validations()[ruleKey]
                        if (validation) {
                            const message = options.message;
                            const { isValidate: newIsValidated, message: newMessage } = validation({
                                key,
                                values: options.values,
                                ruleKey,
                                ruleKeyParams,
                                message: message && message[key] ? message[key][ruleKey] : undefined

                            })
                            if (!newIsValidated && newMessage) {
                                isValidated = newIsValidated;
                                if (ruleSet.some(rule => rule === 'all')) {
                                    errorObj[ruleKey] = newMessage
                                } else {
                                    errors[key] = newMessage;
                                    break;
                                }
                            }

                        }
                    }
                    if (Object.keys(errorObj).length > 0) {
                        errors[key] = errorObj
                    }
                }
            }
        }

        return {
            isValidated,
            errors
        }
    }

    return { validate }
};

export default Validator