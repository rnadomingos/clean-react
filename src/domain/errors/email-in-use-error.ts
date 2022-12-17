export class EmailInUseError extends Error {
  constructor () {
    super('Este E-mail já está em uso')
    this.name = 'EmailInUseError'
  }
}
