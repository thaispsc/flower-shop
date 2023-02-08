interface GetDataResponse {
  status: number
}

export interface DataFound<T> extends GetDataResponse {
  data: T
}

export interface DataNotFound extends GetDataResponse {
  data: {
    error: string
  }
}
