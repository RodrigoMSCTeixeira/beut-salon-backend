interface IService<T> {
  get getCreate(): Promise<T> | void
  get getRead(): Promise<T[]> | void
  get getReadById(): Promise<T | null> | void
  get getUpdate(): Promise<T> | void
  get getDelete(): Promise<T> | void
}

export default class Service<T> implements IService<T> {
  protected create?(): Promise<T>

  protected read?(): Promise<T[]>

  protected readById?(): Promise<T | null>

  protected update?(): Promise<T>

  protected delete?(): Promise<T>

  get getCreate(): void | Promise<T> {
    if (this.create) {
      return this.create()
    }
  }

  get getRead(): void | Promise<T[]> {
    if (this.read) {
      return this.read()
    }
  }

  get getReadById(): void | Promise<T | null> {
    if (this.readById) {
      return this.readById()
    }
  }

  get getUpdate(): void | Promise<T> {
    if (this.update) {
      return this.update()
    }
  }

  get getDelete(): void | Promise<T> {
    if (this.delete) {
      return this.delete()
    }
  }
}
