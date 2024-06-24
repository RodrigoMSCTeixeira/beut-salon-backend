import Service from './Service'
import prismaClient from '../utils/prismaClient'
import ClienteModel from '../models/ClienteModel'

export default class ClienteService<T> extends Service<ClienteModel> {
  private _cliente: ClienteModel

  constructor(data?: ClienteModel) {
    super()
    this._cliente = data as ClienteModel
  }

  protected async create(): Promise<ClienteModel> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.cliente.create({
      data: {
        Nome: this._cliente.Nome,
        Telefone: this._cliente.Telefone,
        Email: this._cliente.Email,
      },
      select: {
        Id_cliente: true,
        Nome: true,
        Telefone: true,
        Email: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async createMany(): Promise<void> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.cliente.createMany({
      data: this._cliente,
    })

    await prismaClient.$disconnect()
  }

  protected async read(): Promise<ClienteModel[]> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.cliente.findMany({
      select: {
        Id_cliente: true,
        Nome: true,
        Email: true,
        Telefone: true,
        Agendamentos: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async readById(): Promise<ClienteModel | null> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.cliente.findUnique({
      where: {
        Id_cliente: this._cliente.Id_cliente,
      },
      select: {
        Id_cliente: true,
        Nome: true,
        Email: true,
        Telefone: true,
        Agendamentos: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async update(): Promise<ClienteModel> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.cliente.update({
      where: {
        Id_cliente: this._cliente.Id_cliente,
      },
      data: {
        ...this._cliente,
      },
      select: {
        Id_cliente: true,
        Nome: true,
        Email: true,
        Telefone: true,
        Agendamentos: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async delete(): Promise<ClienteModel> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.cliente.delete({
      where: {
        Id_cliente: this._cliente.Id_cliente,
      },
      select: {
        Id_cliente: true,
        Nome: true,
        Email: true,
        Telefone: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }
}
