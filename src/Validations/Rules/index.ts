import { Keys } from "../../index";
import { BaseValidateRule } from "../ValidateRule";
import Required from "./Required";
import Email from "./Email";
import Min from "./Min";
import Max from "./Max";
import Same from "./Same";
import Regex from "./Regex";

const Rules: Record<Keys, BaseValidateRule> = {
    required: Required,
    email: Email,
    min: Min,
    max: Max,
    same: Same,
    regex: Regex
}

export default Rules