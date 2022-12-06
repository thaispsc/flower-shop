interface BasicResponse {
  status: number
  data: Flower[]
}

interface BasicResponseWithError {
  status: number
  data: {
    error: string
  }
}

export type DataFound = BasicResponse

export type DataNotFound = BasicResponseWithError
