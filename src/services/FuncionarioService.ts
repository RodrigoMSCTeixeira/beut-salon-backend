import Service from './Service'
import prismaClient from '../utils/prismaClient'
import FuncionarioModel from '../models/FuncionarioModel'

export default class FuncionarioService<T> extends Service<FuncionarioModel> {
  private _funcionario: FuncionarioModel

  constructor(data?: FuncionarioModel) {
    super()
    this._funcionario = data as FuncionarioModel
  }

  protected async create(): Promise<FuncionarioModel> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.funcionario.create({
      data: {
        Nome: this._funcionario.Nome,
        Telefone: this._funcionario.Telefone,
        Email: this._funcionario.Email,
        Cargo: this._funcionario.Cargo,
      },
      select: {
        Id_funcionario: true,
        Nome: true,
        Telefone: true,
        Email: true,
        Cargo: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async createMany(): Promise<void> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.funcionario.createMany({
      data: this._funcionario,
    })

    await prismaClient.$disconnect()
  }

  protected async read(): Promise<FuncionarioModel[]> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.funcionario.findMany({
      select: {
        Id_funcionario: true,
        Nome: true,
        Email: true,
        Telefone: true,
        Cargo: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async readById(): Promise<FuncionarioModel | null> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.funcionario.findUnique({
      where: {
        Id_funcionario: this._funcionario.Id_funcionario,
      },
      select: {
        Id_funcionario: true,
        Nome: true,
        Email: true,
        Telefone: true,
        Cargo: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async update(): Promise<FuncionarioModel> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.funcionario.update({
      where: {
        Id_funcionario: this._funcionario.Id_funcionario,
      },
      data: {
        ...this._funcionario,
      },
      select: {
        Id_funcionario: true,
        Nome: true,
        Email: true,
        Telefone: true,
        Cargo: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async delete(): Promise<FuncionarioModel> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.funcionario.delete({
      where: {
        Id_funcionario: this._funcionario.Id_funcionario,
      },
      select: {
        Id_funcionario: true,
        Nome: true,
        Email: true,
        Telefone: true,
        Cargo: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }
}
