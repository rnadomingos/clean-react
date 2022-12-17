/* eslint-disable @typescript-eslint/method-signature-style */
import { AccountModel } from '@/domain/models'

export type AddAccountParams = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export type AddAccount = {
  add (params: AddAccountParams): Promise<AccountModel>
}
