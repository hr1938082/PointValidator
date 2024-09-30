import { Keys } from "../../index";
import { BaseValidateRule } from "../ValidateRule";
import Required from "./Required";
import Email from "./Email";
import Min from "./Min";
import Max from "./Max";
import Same from "./Same";
import Regex from "./Regex";
import Accepted from "./Accepted";
import AcceptedIf from "./AcceptedIf";
import RequiredIf from "./RequiredIf";
import Declined from "./Declined";
import IsDate from "./IsDate";
import DateEqualsTo from "./DateEqualsTo";
import DateGreaterThan from "./DateGreaterThan";
import DateGreaterThanEqualsTo from "./DateGreaterThanEqualsTo";
import DateLessThan from "./DateLessThan";
import DateLessThanEqualsTo from "./DateLessThanEqualsTo";
import AcceptedUnless from "./AcceptedUnless";
import DeclinedIf from "./DeclinedIf";
import DeclinedUnless from "./DeclinedUnless";
import RequiredUnless from "./RequiredUnless";
import RequiredIfAccepted from "./RequiredIfAccepted";
import RequiredIfDeclined from "./RequiredIfDeclined";
import RequiredIfAny from "./RequiredIfAny";
import RequiredIfNot from "./RequiredIfNot";
import RequiredIfNotAny from "./RequiredIfNotAny";
import Alpha from "./Alpha";
import AlphaNumeric from "./AlphaNumeric";
import AlphaSymbols from "./AlphaSymbols";
import AlphaNumericSymbols from "./AlphaNumericSymbols";
import IsArray from "./IsArray";
import Ascii from "./Ascii";
import Between from "./Between";
import IsBoolean from "./IsBoolean";
import Contains from "./Contains";

const Rules: Record<Keys, BaseValidateRule> = {
    accepted: Accepted,
    accepted_if: AcceptedIf,
    accepted_unless: AcceptedUnless,
    alpha: Alpha,
    alpha_numeric: AlphaNumeric,
    alpha_symbols: AlphaSymbols,
    alpha_numeric_symbols: AlphaNumericSymbols,
    array: IsArray,
    ascii: Ascii,
    between: Between,
    boolean: IsBoolean,
    contains: Contains,
    declined: Declined,
    declined_if: DeclinedIf,
    declined_unless: DeclinedUnless,
    required: Required,
    required_if: RequiredIf,
    required_if_accepted: RequiredIfAccepted,
    required_if_any: RequiredIfAny,
    required_if_declined: RequiredIfDeclined,
    required_if_not: RequiredIfNot,
    required_if_not_any: RequiredIfNotAny,
    required_unless: RequiredUnless,
    date: IsDate,
    date_equals_to: DateEqualsTo,
    date_greater_than: DateGreaterThan,
    date_greater_than_equals_to: DateGreaterThanEqualsTo,
    date_less_than: DateLessThan,
    date_less_than_equals_to: DateLessThanEqualsTo,
    email: Email,
    min: Min,
    max: Max,
    same: Same,
    regex: Regex,
}

export default Rules