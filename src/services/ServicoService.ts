import Service from './Service'
import prismaClient from '../utils/prismaClient'
import ServicoModel from '../models/ServicoModel'

export default class ServicoService<T> extends Service<ServicoModel> {
  private _servico: ServicoModel

  constructor(data?: ServicoModel) {
    super()
    this._servico = data as ServicoModel
  }

  protected async create(): Promise<ServicoModel> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.servico.create({
      data: {
        Nome: this._servico.Nome,
        Descricao: this._servico.Descricao,
        Duracao: this._servico.Duracao,
        Preco: this._servico.Preco,
      },
      select: {
        Id_servico: true,
        Nome: true,
        Descricao: true,
        Duracao: true,
        Preco: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async createMany(): Promise<void> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.servico.createMany({
      data: this._servico,
    })

    await prismaClient.$disconnect()
  }

  protected async read(): Promise<ServicoModel[]> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.servico.findMany({
      select: {
        Id_servico: true,
        Nome: true,
        Descricao: true,
        Duracao: true,
        Preco: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async readById(): Promise<ServicoModel | null> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.servico.findUnique({
      where: {
        Id_servico: this._servico.Id_servico,
      },
      select: {
        Id_servico: true,
        Nome: true,
        Descricao: true,
        Duracao: true,
        Preco: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async update(): Promise<ServicoModel> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.servico.update({
      where: {
        Id_servico: this._servico.Id_servico,
      },
      data: {
        ...this._servico,
      },
      select: {
        Id_servico: true,
        Nome: true,
        Descricao: true,
        Duracao: true,
        Preco: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async delete(): Promise<ServicoModel> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.servico.delete({
      where: {
        Id_servico: this._servico.Id_servico,
      },
      select: {
        Id_servico: true,
        Nome: true,
        Descricao: true,
        Duracao: true,
        Preco: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }
}
