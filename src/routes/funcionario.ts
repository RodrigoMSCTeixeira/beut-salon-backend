import { Router, Request, Response } from 'express'
import FuncionarioController from '../controllers/FuncionarioController'

const funcionario = Router()
const funcionarioController = new FuncionarioController()

funcionario.post('/funcionario', (req: Request, res: Response) => {
  funcionarioController.create(req, res)
})

funcionario.get('/funcionario', (req: Request, res: Response) => {
  funcionarioController.read(req, res)
})

funcionario.post('/funcionario/registro', (req: Request, res: Response) => {
  funcionarioController.readById(req, res)
})

funcionario.put('/funcionario', (req: Request, res: Response) => {
  funcionarioController.update(req, res)
})

funcionario.delete('/funcionario', (req: Request, res: Response) => {
  funcionarioController.delete(req, res)
})

export default funcionario
