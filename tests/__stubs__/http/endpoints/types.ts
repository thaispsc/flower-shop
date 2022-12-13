interface BasicResponse<T> {
  status: number
  data: T
}

interface BasicResponseWithError {
  status: number
  data: {
    error: string
  }
}

export type DataFound<T> = BasicResponse<T>

export type DataNotFound = BasicResponseWithError
