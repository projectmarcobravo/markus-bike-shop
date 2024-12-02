import cors from "cors";
import express from "express";
import { BikeConfiguratorController } from "./src/bikes/infraestructure/BikeConfiguratorController";
process.loadEnvFile();

const PORT = process.env.PORT || 3000;
const app = express();

const bikeConfiguratorController = new BikeConfiguratorController();

app.use(express.json());
app.use(cors());

app.use("/", bikeConfiguratorController.getRouter());

app.listen(PORT, () => {
  console.log(`🚀 🚀 🚀 Server listening on Port: ${PORT} `);
});

export default app;
