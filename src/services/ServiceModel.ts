import Service from './Service'
import prismaClient from '../utils/prismaClient'

export default class ServiceModel<T> extends Service<T> {
  constructor() {
    super()
  }

  protected async create(): Promise<T> {
    await prismaClient.$connect()

    const dbQuery = await prismaClient.table.create({})

    await prismaClient.$disconnect()

    return dbQuery
  }
}
