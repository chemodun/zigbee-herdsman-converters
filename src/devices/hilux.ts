import * as m from "../lib/modernExtend";
import type {DefinitionWithExtend} from "../lib/types";

export const definitions: DefinitionWithExtend[] = [
    {
        zigbeeModel: ["Hilux DZ8"],
        model: "DZ8",
        vendor: "Hilux",
        description: "Spot 7W",
        extend: [m.light({colorTemp: {range: [153, 370]}, powerOnBehavior: false})],
    },
    {
        fingerprint: [{modelID: "Dimmer-Switch-ZB3.0", manufacturerName: "Hilux"}],
        model: "D160-ZG",
        vendor: "Hilux",
        description: "Zigbee LED dimmer smart switch",
        extend: [m.light({configureReporting: true})],
    },
];
