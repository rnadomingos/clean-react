/* eslint-disable @typescript-eslint/method-signature-style */
import { AccountModel } from '@/domain/models/account-model'

export type AuthenticationParams = {
  email: string
  password: string
}

export type Authentication = {
  auth (params: AuthenticationParams): Promise<AccountModel>
}
