import ValueConvarsion from "./ValueConvarsion";

const KeyValueCheck = (values: Record<string, any>, ruleKeyParams: string[]) => {
    for (let index = 0; index < ruleKeyParams.length; index + 2) {
        const valueToMatchKey = ruleKeyParams[index];
        const valueToMatch = values[valueToMatchKey];
        const valueMustBe = ValueConvarsion(ruleKeyParams[index + 1]);
        if (valueToMatch !== valueMustBe) {
            return false;
        }
    }
    return true;
}

export default KeyValueCheck