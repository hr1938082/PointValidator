import { Keys } from '..'

const Messages = (key: string, ruleKey: Keys, ruleKeyParams?: string[]): string => {
    const messages: Record<Keys, string> = {
        required: `${key} is required`,
        email: `Invalid ${key}`,
        min: `${key} should be greater then or equal to ${ruleKeyParams && ruleKeyParams[0]}`,
        max: `${key} should be less then or equal to ${ruleKeyParams && ruleKeyParams[0]}`,
        same: `${key} not matched with ${ruleKeyParams && ruleKeyParams[0]}`,
        regex: `${key} not match with pattren`
    }

    return messages[ruleKey]
}

export default Messages