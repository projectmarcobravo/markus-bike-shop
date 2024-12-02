import { BikeConfiguratorCreator } from "../../src/bikes/application/BikeConfiguratorCreator";
import {
  FrameFinish,
  FrameType,
  Wheels,
  RimColor,
  Chain,
} from "../../src/bikes/domain/types";

describe("BikeConfiguratorCreator with real prices", () => {
  test("calculatePrice calculates the correct price", () => {
    const config = {
      frameType: FrameType.FULL_SUSPENSION,
      frameFinish: FrameFinish.SHINY,
      wheels: Wheels.FAT_BIKE,
      rimColor: RimColor.BLUE,
      chain: Chain.EIGHT_SPEED,
    };

    const expectedPrice = 130 + 30 + 120 + 20 + 60 + 10 + 5;

    const price = BikeConfiguratorCreator.run(config);
    expect(price).toBe(expectedPrice);
  });

  test("throws error for mountain wheels with non-full-suspension frame", () => {
    const invalidConfig = {
      frameType: FrameType.DIAMOND,
      frameFinish: FrameFinish.MATTE,
      wheels: Wheels.MOUNTAIN,
      rimColor: RimColor.BLACK,
      chain: Chain.SINGLE_SPEED,
    };

    expect(() => BikeConfiguratorCreator.run(invalidConfig)).toThrow(
      "Mountain wheels can be only used with full-suspension frame"
    );
  });

  test("throws error for fat bike wheels with red rims", () => {
    const invalidConfig = {
      frameType: FrameType.FULL_SUSPENSION,
      frameFinish: FrameFinish.SHINY,
      wheels: Wheels.FAT_BIKE,
      rimColor: RimColor.RED,
      chain: Chain.EIGHT_SPEED,
    };

    expect(() => BikeConfiguratorCreator.run(invalidConfig)).toThrow(
      "Fat bike wheels cannot be red"
    );
  });

  test("validateConfiguration allows valid configurations", () => {
    const validConfig = {
      frameType: FrameType.STEP_THROUGH,
      frameFinish: FrameFinish.MATTE,
      wheels: Wheels.ROAD,
      rimColor: RimColor.BLACK,
      chain: Chain.SINGLE_SPEED,
    };

    expect(() => BikeConfiguratorCreator.run(validConfig)).not.toThrow();

    const expectedPrice = 90 + 20 + 80 + 15 + 43;

    const price = BikeConfiguratorCreator.run(validConfig);
    expect(price).toBe(expectedPrice);
  });
});
