interface HttpRequestErrorProps {
  status?: number
  message: string
  stack?: string
  endpoint: string
}
export default class HttpRequestError extends Error {
  status?: number
  endpoint: string

  constructor(error: HttpRequestErrorProps) {
    super(error.message)
    this.stack = error.stack
    this.name = 'HttpRequestError'
    this.status = error.status
    this.endpoint = error.endpoint
  }
}
