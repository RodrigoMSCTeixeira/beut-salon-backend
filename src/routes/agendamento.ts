import { Router, Request, Response } from 'express'
import AgendamentoController from '../controllers/AgendamentoController'

const agendamento = Router()
const agendamentoController = new AgendamentoController()

agendamento.post('/agendamento', (req: Request, res: Response) => {
  agendamentoController.create(req, res)
})

agendamento.get('/agendamento', (req: Request, res: Response) => {
  agendamentoController.read(req, res)
})

agendamento.post('/agendamento/registro', (req: Request, res: Response) => {
  agendamentoController.readById(req, res)
})

agendamento.put('/agendamento', (req: Request, res: Response) => {
  agendamentoController.update(req, res)
})

agendamento.delete('/agendamento', (req: Request, res: Response) => {
  agendamentoController.delete(req, res)
})

export default agendamento
