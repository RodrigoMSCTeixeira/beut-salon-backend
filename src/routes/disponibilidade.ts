import { Router, Request, Response } from 'express'
import DisponibilidadeController from '../controllers/DisponibilidadeController'

const disponibilidade = Router()
const disponibilidadeController = new DisponibilidadeController()

disponibilidade.post('/disponibilidade', (req: Request, res: Response) => {
  disponibilidadeController.create(req, res)
})

disponibilidade.get('/disponibilidade', (req: Request, res: Response) => {
  disponibilidadeController.read(req, res)
})

disponibilidade.post(
  '/disponibilidade/registro',
  (req: Request, res: Response) => {
    disponibilidadeController.readById(req, res)
  },
)

disponibilidade.put('/disponibilidade', (req: Request, res: Response) => {
  disponibilidadeController.update(req, res)
})

disponibilidade.delete('/disponibilidade', (req: Request, res: Response) => {
  disponibilidadeController.delete(req, res)
})

export default disponibilidade
