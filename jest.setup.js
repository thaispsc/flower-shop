import '@testing-library/jest-dom'
import { setConfig } from 'next/config'
import config from './next.config'
import { mockServer } from './tests/__stubs__/http/mockServer'

setConfig({
  publicRuntimeConfig: config.publicRuntimeConfig,
})

beforeAll(() => mockServer.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => mockServer.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => mockServer.close())
