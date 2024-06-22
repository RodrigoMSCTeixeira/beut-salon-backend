import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { ParsedQs } from 'qs'

interface ControllerModel {
  create?(
    req: Request,
    res: Response,
  ): Promise<Response<any, Record<string, any>> | undefined> | void
  read?(
    req: Request,
    res: Response,
  ): Promise<Response<any, Record<string, any>> | undefined> | void
  readById?(
    req: Request,
    res: Response,
  ): Promise<Response<any, Record<string, any>> | undefined> | void
  update?(
    req: Request,
    res: Response,
  ): Promise<Response<any, Record<string, any>> | undefined> | void
  delete?(
    req: Request,
    res: Response,
  ): Promise<Response<any, Record<string, any>> | undefined> | void
}

export default class Controller implements ControllerModel {
  create(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
  ): void | Promise<Response<any, Record<string, any>> | undefined> {}

  read(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
  ): void | Promise<Response<any, Record<string, any>> | undefined> {}

  readById(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
  ): void | Promise<Response<any, Record<string, any>> | undefined> {}

  update(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
  ): void | Promise<Response<any, Record<string, any>> | undefined> {}

  delete(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
  ): void | Promise<Response<any, Record<string, any>> | undefined> {}
}
