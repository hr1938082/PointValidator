import BasicRules from "./BasicRules";
import KeyRules from "./KeyRules";
import NotValidationRule from "./NotValidationRule";
import NumberRules from "./NumberRules";
import StringRule from "./StringRule";

const Rules = {
    basic: BasicRules,
    number: NumberRules,
    string: StringRule,
    key: KeyRules,
    not: NotValidationRule
}

export default Rules;