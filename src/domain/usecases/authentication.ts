/* eslint-disable @typescript-eslint/method-signature-style */
import { AccountModel } from '@/domain/models'

export type AuthenticationParams = {
  email: string
  password: string
}

export type Authentication = {
  auth (params: AuthenticationParams): Promise<AccountModel>
}
