import Service from './Service'
import Prisma from '@prisma/client'
import prismaClient from '../utils/prismaClient'
import AgendamentoModel from '../models/AgendamentoModel'
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientRustPanicError,
  PrismaClientUnknownRequestError,
  PrismaClientValidationError,
} from '@prisma/client/runtime/library'

export default class AgendamentoService<T> extends Service<AgendamentoModel> {
  private _agendamento: AgendamentoModel

  constructor(data?: AgendamentoModel) {
    super()
    this._agendamento = data as AgendamentoModel
  }

  protected async create(): Promise<AgendamentoModel> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.agendamento.create({
      data: this._agendamento,
      select: {
        Id_agendamento: true,
        Id_cliente: true,
        Id_funcionario: true,
        Id_servico: true,
        Data_agendamento: true,
        Status: true,
      },
    })

    // let dbQuery: AgendamentoModel = {} as AgendamentoModel

    // try {
    //   dbQuery = await prismaClient.agendamento.create({
    //     data: {
    //       Id_cliente: this._agendamento.Id_cliente,
    //       Id_funcionario: this._agendamento.Id_funcionario,
    //       Id_servico: this._agendamento.Id_servico,
    //       Data_agendamento: this._agendamento.Data_agendamento,
    //       Status: this._agendamento.Status,
    //     },
    //     select: {
    //       Id_agendamento: true,
    //       Id_cliente: true,
    //       Id_funcionario: true,
    //       Id_servico: true,
    //       Data_agendamento: true,
    //       Status: true,
    //     },
    //   })
    // } catch (error: any) {
    //   if (error instanceof PrismaClientKnownRequestError) {
    //     // Erros conhecidos do Prisma Client
    //     console.error('Erro conhecido do Prisma Client:', error.message)
    //     if (error.code === 'P2002') {
    //       console.error('Violação de unicidade:', error.meta?.target)
    //     }
    //   } else if (error instanceof PrismaClientUnknownRequestError) {
    //     // Erros desconhecidos do Prisma Client
    //     console.error('Erro desconhecido do Prisma Client:', error.message)
    //   } else if (error instanceof PrismaClientRustPanicError) {
    //     // Erros do Rust no Prisma Client
    //     console.error('Erro do Rust no Prisma Client:', error.message)
    //   } else if (error instanceof PrismaClientInitializationError) {
    //     // Erros de inicialização do Prisma Client
    //     console.error('Erro de inicialização do Prisma Client:', error.message)
    //   } else if (error instanceof PrismaClientValidationError) {
    //     // Erros de validação do Prisma Client
    //     console.error('Erro de validação do Prisma Client:', error.message)
    //   } else {
    //     // Outros erros
    //     console.error('Erro desconhecido:', error)
    //   }
    // }

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async createMany(): Promise<void> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.agendamento.createMany({
      data: this._agendamento,
    })

    await prismaClient.$disconnect()
  }

  protected async read(): Promise<AgendamentoModel[]> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.agendamento.findMany({
      select: {
        Id_agendamento: true,
        Id_cliente: true,
        Id_funcionario: true,
        Id_servico: true,
        Data_agendamento: true,
        Status: true,
        Cliente: {
          select: {
            Id_cliente: true,
            Nome: true,
          },
        },
        Servico: {
          select: {
            Id_servico: true,
            Descricao: true,
          },
        },
        Funcionario: {
          select: {
            Id_funcionario: true,
            Nome: true,
            Cargo: true,
          },
        },
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async readById(): Promise<AgendamentoModel | null> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.agendamento.findUnique({
      where: {
        Id_agendamento: this._agendamento.Id_agendamento,
      },
      select: {
        Id_agendamento: true,
        Id_cliente: true,
        Id_funcionario: true,
        Id_servico: true,
        Data_agendamento: true,
        Status: true,
        Servico: {
          select: {
            Id_servico: true,
            Preco: true,
          },
        },
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async update(): Promise<AgendamentoModel> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.agendamento.update({
      where: {
        Id_agendamento: this._agendamento.Id_agendamento,
      },
      data: {
        ...this._agendamento,
      },
      select: {
        Id_agendamento: true,
        Id_cliente: true,
        Id_funcionario: true,
        Id_servico: true,
        Data_agendamento: true,
        Status: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }

  protected async delete(): Promise<AgendamentoModel> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.agendamento.delete({
      where: {
        Id_agendamento: this._agendamento.Id_agendamento,
      },
      select: {
        Id_agendamento: true,
        Id_cliente: true,
        Id_funcionario: true,
        Id_servico: true,
        Data_agendamento: true,
        Status: true,
      },
    })

    await prismaClient.$disconnect()

    return dbQuery
  }
}
