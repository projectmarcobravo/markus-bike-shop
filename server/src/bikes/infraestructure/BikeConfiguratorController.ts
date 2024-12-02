import express, { Request, Response } from "express";
import { BikeConfiguration } from "../domain/types";
import { BikeConfiguratorCreator } from "../application/BikeConfiguratorCreator";

export class BikeConfiguratorController {
  private router = express.Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/", this.configurateBike);
  }

  private configurateBike(req: Request, res: Response) {
    const config: BikeConfiguration = req.body;
    try {
      const price = BikeConfiguratorCreator.run(config);
      res.status(200).json({ message: "Bike configured successfully!", price });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  public getRouter() {
    return this.router;
  }
}
