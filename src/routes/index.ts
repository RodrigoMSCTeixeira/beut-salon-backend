import express, { Express } from 'express'
import cliente from './cliente'
import funcionario from './funcionario'
import servico from './servico'
import agendamento from './agendamento'
import disponibilidade from './disponibilidade'

export default function routes(app: Express) {
  app.use(
    express.json(),
    cliente,
    funcionario,
    servico,
    agendamento,
    disponibilidade,
  )
}
