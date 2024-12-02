import { BikeConfiguration } from "./types";
import { conditionalPrices, prices } from "./rules/ValidationPrices";
import configuratorRules from "./rules/ValidationComponents";

export class BikeConfigurator {
  private config: BikeConfiguration;

  constructor(config: BikeConfiguration) {
    this.config = config;
  }

  validateConfiguration(): void {
    const errors = configuratorRules(this.config)
      .filter((rule) => rule.condition())
      .map((rule) => rule.message);

    if (errors.length) {
      throw new Error(errors.join(". "));
    }
  }

  calculatePrice(): number {
    const { frameType, frameFinish, wheels, rimColor, chain } = this.config;

    const basePrice =
      prices.frameType[frameType] +
      prices.frameFinish[frameFinish] +
      prices.wheels[wheels] +
      prices.rimColor[rimColor] +
      prices.chain[chain];

    const modifiersPrice = conditionalPrices(this.config)
      .filter((modifier) => modifier.condition())
      .reduce((total, modifier) => total + modifier.extraCost, 0);

    return basePrice + modifiersPrice;
  }
}
