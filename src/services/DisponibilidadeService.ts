import Service from './Service'
import prismaClient from '../utils/prismaClient'
import DisponibilidadeModel from '../models/DisponibilidadeModel'

export default class DisponibilidadeService<
  T,
> extends Service<DisponibilidadeModel> {
  private _disponibilidade: DisponibilidadeModel

  constructor(data?: DisponibilidadeModel) {
    super()
    this._disponibilidade = data as DisponibilidadeModel
  }

  protected async create(): Promise<DisponibilidadeModel> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.disponibilidade.create({
      data: {
        Id_funcionario: this._disponibilidade.Id_funcionario,
        Data_disponivel: this._disponibilidade.Data_disponivel,
        Hora_inicio: this._disponibilidade.Hora_inicio,
        Hora_fim: this._disponibilidade.Hora_fim,
      },
      select: {
        Id_disponibilidade: true,
        Id_funcionario: true,
        Data_disponivel: true,
        Hora_inicio: true,
        Hora_fim: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async createMany(): Promise<void> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.disponibilidade.createMany({
      data: this._disponibilidade,
    })

    await prismaClient.$disconnect()
  }

  protected async read(): Promise<DisponibilidadeModel[]> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.disponibilidade.findMany({
      select: {
        Id_disponibilidade: true,
        Id_funcionario: true,
        Data_disponivel: true,
        Hora_inicio: true,
        Hora_fim: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async readById(): Promise<DisponibilidadeModel | null> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.disponibilidade.findUnique({
      where: {
        Id_disponibilidade: this._disponibilidade.Id_disponibilidade,
      },
      select: {
        Id_disponibilidade: true,
        Id_funcionario: true,
        Data_disponivel: true,
        Hora_inicio: true,
        Hora_fim: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async update(): Promise<DisponibilidadeModel> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.disponibilidade.update({
      where: {
        Id_disponibilidade: this._disponibilidade.Id_disponibilidade,
      },
      data: {
        ...this._disponibilidade,
      },
      select: {
        Id_disponibilidade: true,
        Id_funcionario: true,
        Data_disponivel: true,
        Hora_inicio: true,
        Hora_fim: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async delete(): Promise<DisponibilidadeModel> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.disponibilidade.delete({
      where: {
        Id_disponibilidade: this._disponibilidade.Id_disponibilidade,
      },
      select: {
        Id_disponibilidade: true,
        Id_funcionario: true,
        Data_disponivel: true,
        Hora_inicio: true,
        Hora_fim: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }
}
