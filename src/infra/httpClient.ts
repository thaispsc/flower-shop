import axios, { AxiosError } from 'axios'
import HttpRequestError from './httpRequestError'
import logger from './logger'

type Options = {
  headers: Record<string, string>
}

type HttpClientResponse<T> = {
  status: number
  data: T
  headers: Record<string, string>
}

async function post<R>(
  url: string,
  body: object,
  options: Options,
): Promise<HttpClientResponse<R>> {
  try {
    const { data, status, headers } = await axios.post<R>(url, body, options)

    const r: HttpClientResponse<R> = {
      status,
      data,
      headers,
    }

    logger.info({
      message: 'Succesful HTTP request',
      url,
      requestOptions: options,
    })

    return r
  } catch (e) {
    const axiosError = e as AxiosError

    const httpError = new HttpRequestError({
      status: axiosError.response?.status,
      message: axiosError.message,
      stack: axiosError.stack,
      endpoint: url,
    })

    logger.info({
      url,
      requestOptions: options,
      responseBody: axiosError.response?.data,
      ...httpError,
    })

    throw httpError
  }
}

async function get<R>(
  url: string,
  options: Options,
): Promise<HttpClientResponse<R>> {
  try {
    const { data, status, headers } = await axios.get<R>(url, options)

    const r: HttpClientResponse<R> = {
      status,
      data,
      headers,
    }

    logger.info({
      message: 'Succesful HTTP request',
      url,
      requestOptions: options,
    })

    return r
  } catch (e) {
    const axiosError = e as AxiosError

    const httpError = new HttpRequestError({
      status: axiosError.response?.status,
      message: axiosError.message,
      stack: axiosError.stack,
      endpoint: url,
    })

    logger.info({
      url,
      requestOptions: options,
      responseBody: axiosError.response?.data,
      ...httpError,
    })

    throw httpError
  }
}

export default {
  post,
  get,
}
