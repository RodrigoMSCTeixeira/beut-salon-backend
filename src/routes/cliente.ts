import { Router, Request, Response } from 'express'
import ClienteController from '../controllers/ClienteController'

const cliente = Router()
const clienteController = new ClienteController()

cliente.post('/cliente', (req: Request, res: Response) => {
  clienteController.create(req, res)
})

cliente.get('/cliente', (req: Request, res: Response) => {
  clienteController.read(req, res)
})

cliente.post('/cliente/registro', (req: Request, res: Response) => {
  clienteController.readById(req, res)
})

cliente.put('/cliente', (req: Request, res: Response) => {
  clienteController.update(req, res)
})

cliente.delete('/cliente', (req: Request, res: Response) => {
  clienteController.delete(req, res)
})

export default cliente
