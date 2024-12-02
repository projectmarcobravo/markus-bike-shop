export const enum FrameType {
  FULL_SUSPENSION = "FULL_SUSPENSION",
  DIAMOND = "DIAMOND",
  STEP_THROUGH = "STEP_THROUGH",
}

export const enum FrameFinish {
  MATTE = "MATTE",
  SHINY = "SHINY",
}

export const enum Wheels {
  ROAD = "ROAD",
  MOUNTAIN = "MOUNTAIN",
  FAT_BIKE = "FAT_BIKE",
}

export const enum RimColor {
  RED = "RED",
  BLACK = "BLACK",
  BLUE = "BLUE",
}

export const enum Chain {
  SINGLE_SPEED = "SINGLE_SPEED",
  EIGHT_SPEED = "EIGHT_SPEED",
}

export type BikeConfiguration = {
  frameType: FrameType;
  frameFinish: FrameFinish;
  wheels: Wheels;
  rimColor: RimColor;
  chain: Chain;
};

export type PriceData = {
  frameType: Record<string, number>;
  frameFinish: Record<string, number>;
  wheels: Record<string, number>;
  rimColor: Record<string, number>;
  chain: Record<string, number>;
};
