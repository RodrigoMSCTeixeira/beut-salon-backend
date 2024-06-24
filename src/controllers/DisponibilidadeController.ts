import { Request, Response } from 'express'
import { ParamsDictionary } from 'express-serve-static-core'
import { ParsedQs } from 'qs'
import Controller from './Controller'
import DisponibilidadeService from '../services/DisponibilidadeService'

export default class DisponibilidadeController extends Controller {
  async create(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
  ): Promise<Response<any, Record<string, any>> | undefined> {
    try {
      if (req.body.length > 1) {
        const data = await new DisponibilidadeService(req.body).getCreateMany
        return res.status(200).json({ data })
      } else {
        const data = await new DisponibilidadeService(req.body).getCreate
        return res.status(200).json({ data })
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar registro' })
    }
  }

  async read(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
  ): Promise<Response<any, Record<string, any>> | undefined> {
    try {
      const data = await new DisponibilidadeService().getRead
      return res.status(200).json({ data })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar registro' })
    }
  }

  async readById(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
  ): Promise<Response<any, Record<string, any>> | undefined> {
    try {
      const data = await new DisponibilidadeService(req.body).getReadById
      return res.status(200).json({ data })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar registro' })
    }
  }

  async update(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
  ): Promise<Response<any, Record<string, any>> | undefined> {
    try {
      const data = await new DisponibilidadeService(req.body).getUpdate
      return res.status(200).json({ data })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar registro' })
    }
  }

  async delete(
    req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>,
    res: Response<any, Record<string, any>>,
  ): Promise<Response<any, Record<string, any>> | undefined> {
    try {
      const data = await new DisponibilidadeService(req.body).getDelete
      return res.status(200).json({ data })
    } catch (error) {
      res.status(500).json({ message: 'Erro ao deletar registro' })
    }
  }
}
