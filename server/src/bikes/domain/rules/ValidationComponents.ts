import { FrameType, Wheels, RimColor, BikeConfiguration } from "../types";

const configuratorRules = (config: BikeConfiguration) => [
  {
    condition: () =>
      config.wheels === Wheels.MOUNTAIN &&
      config.frameType !== FrameType.FULL_SUSPENSION,
    message: "Mountain wheels can be only used with full-suspension frame",
  },
  {
    condition: () =>
      config.wheels === Wheels.FAT_BIKE && config.rimColor === RimColor.RED,
    message: "Fat bike wheels cannot be red",
  },
];

export default configuratorRules;
