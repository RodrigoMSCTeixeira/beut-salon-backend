import { Router, Request, Response } from 'express'
import ServicoController from '../controllers/ServicoController'

const servico = Router()
const servicoController = new ServicoController()

servico.post('/servico', (req: Request, res: Response) => {
  servicoController.create(req, res)
})

servico.get('/servico', (req: Request, res: Response) => {
  servicoController.read(req, res)
})

servico.post('/servico/registro', (req: Request, res: Response) => {
  servicoController.readById(req, res)
})

servico.put('/servico', (req: Request, res: Response) => {
  servicoController.update(req, res)
})

servico.delete('/servico', (req: Request, res: Response) => {
  servicoController.delete(req, res)
})

export default servico
