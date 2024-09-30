import { Keys } from '..'

const Messages = (key: string, ruleKey: Keys, ruleKeyParams?: string[]): string => {
    const messages: Record<Keys, string> = {
        accepted: `${key} is not accepted`,
        accepted_if: `${key} is not accepted`,
        accepted_unless: `${key} is not accepted`,
        alpha: `${key} is not alphabetic`,
        alpha_numeric: `${key} is not alpha numeric`,
        alpha_symbols: `${key} is not alpha symbols`,
        alpha_numeric_symbols: `${key} is not alpha numeric symbols`,
        array: `${key} must be an array`,
        ascii: `${key} must be as ascii`,
        between: `${key} must be between ${ruleKeyParams && `${ruleKeyParams[0]} ${ruleKeyParams[1]}`}`,
        boolean: `${key} is not boolean`,
        contains: `${key} must be contains ${ruleKeyParams && ruleKeyParams.join(',')}`,

        date: `${key} is not date`,
        date_equals_to: `${key} is not eqauls to ${ruleKeyParams && ruleKeyParams[0]}`,
        date_greater_than: `${key} is not greater than ${ruleKeyParams && ruleKeyParams[0]}`,
        date_greater_than_equals_to: `${key} is not greater than or equal to ${ruleKeyParams && ruleKeyParams[0]}`,
        date_less_than: `${key} is not less than ${ruleKeyParams && ruleKeyParams[0]}`,
        date_less_than_equals_to: `${key} is not less than or equal to ${ruleKeyParams && ruleKeyParams[0]}`,
        declined: `${key} is not declined`,
        declined_if: `${key} is not declined`,
        declined_unless: `${key} is not declined`,
        email: `Invalid ${key}`,
        max: `${key} should be less then or equal to ${ruleKeyParams && ruleKeyParams[0]}`,
        min: `${key} should be greater then or equal to ${ruleKeyParams && ruleKeyParams[0]}`,
        regex: `${key} not match with pattren`,
        required: `${key} is required`,
        required_if: `${key} is required`,
        required_if_accepted: `${key} is required`,
        required_if_any: `${key} is required`,
        required_if_declined: `${key} is required`,
        required_if_not: `${key} is required`,
        required_if_not_any: `${key} is required`,
        required_unless: `${key} is required`,
        same: `${key} not matched with ${ruleKeyParams && ruleKeyParams[0]}`,
    }

    return messages[ruleKey]
}

export default Messages