export enum HttpStatusCode {
  ok = 200,
  noContent = 201,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 401,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}
