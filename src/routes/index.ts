import express, { Express } from "express";
import routeModel from "./routeModel";

export default function routes(app: Express) {
  app.use(express.json(), routeModel);
}
