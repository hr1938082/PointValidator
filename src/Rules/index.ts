import BasicRules from "./BasicRules";
import KeyRules from "./KeyRules";
import KeyValueRules from "./KeyValueRules";
import NotValidationRule from "./NotValidationRule";
import ValueRules from "./ValueRules";

const Rules = {
    basic: BasicRules,
    value: ValueRules,
    key: KeyRules,
    key_value: KeyValueRules,
    not: NotValidationRule
}

export default Rules;