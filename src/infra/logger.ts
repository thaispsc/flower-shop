import pino from 'pino'

const pinoLogger = pino()

type LoggerOptions = {
  message: string
  [key: string]: unknown
}

const logger = {
  debug(options: LoggerOptions) {
    pinoLogger.debug(options)
  },

  info(options: LoggerOptions) {
    pinoLogger.info(options)
  },

  warn(options: LoggerOptions) {
    pinoLogger.warn(options)
  },

  error(options: LoggerOptions) {
    pinoLogger.error(options)
  },
}

export default logger
