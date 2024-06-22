import { Router, Request, Response } from "express";

const routeModel = Router();

routeModel.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "A primeira rota funcionou!" });
  console.log("Testando o router do express!");
});

export default routeModel;
