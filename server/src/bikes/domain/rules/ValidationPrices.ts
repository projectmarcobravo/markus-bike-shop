import {
  BikeConfiguration,
  FrameFinish,
  FrameType,
  RimColor,
  Wheels,
} from "../types";

export const prices = {
  frameType: {
    FULL_SUSPENSION: 130,
    DIAMOND: 100,
    STEP_THROUGH: 90,
  },
  frameFinish: {
    MATTE: 20,
    SHINY: 30,
  },
  wheels: {
    ROAD: 80,
    MOUNTAIN: 100,
    FAT_BIKE: 120,
  },
  rimColor: {
    RED: 10,
    BLACK: 15,
    BLUE: 20,
  },
  chain: {
    SINGLE_SPEED: 43,
    EIGHT_SPEED: 60,
  },
};

export const conditionalPrices = (config: BikeConfiguration) => [
  {
    condition: () =>
      config.frameType === FrameType.FULL_SUSPENSION &&
      config.frameFinish === FrameFinish.SHINY,
    extraCost: 10,
  },
  {
    condition: () =>
      config.wheels === Wheels.FAT_BIKE && config.rimColor === RimColor.BLUE,
    extraCost: 5,
  },
];
