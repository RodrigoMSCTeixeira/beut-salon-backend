import express, { Express } from "express";
import routes from "./routes";

const app = express();

routes(app);

export default app;
