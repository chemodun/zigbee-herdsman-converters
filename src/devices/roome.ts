import * as fz from "../converters/fromZigbee";
import * as exposes from "../lib/exposes";
import type {DefinitionWithExtend} from "../lib/types";

const e = exposes.presets;

export const definitions: DefinitionWithExtend[] = [
    {
        zigbeeModel: ["MULTI-MECI--EA01"],
        model: "HSC1-WD-0",
        vendor: "ROOME",
        description: "Door or window contact switch",
        fromZigbee: [fz.ias_contact_alarm_1, fz.battery, fz.ignore_iaszone_attreport],
        toZigbee: [],
        exposes: [e.contact(), e.battery_low(), e.tamper()],
    },
];
