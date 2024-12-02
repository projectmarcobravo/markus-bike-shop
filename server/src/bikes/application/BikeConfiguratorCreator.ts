import { BikeConfigurator } from "../domain/BikeConfigurator";
import { BikeConfiguration } from "../domain/types";

export class BikeConfiguratorCreator {
  static run(config: BikeConfiguration): number {
    const bikeConfigurator = new BikeConfigurator(config);

    bikeConfigurator.validateConfiguration();
    return bikeConfigurator.calculatePrice();
  }
}
