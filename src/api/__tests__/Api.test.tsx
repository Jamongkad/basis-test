import axios from 'axios'
import { getWeatherForecast, client } from '../Api'

jest.mock('axios', () => ({
  create: () => ({
    get: jest.fn(),
  }),
}))

describe('Api', () => {
  it('GET endpoint', async () => {
    const mockClient = jest.spyOn(client, 'get')
    mockClient.mockResolvedValueOnce({
      data: {
        name: 'Pikachu',
      },
    })
    
    await getWeatherForecast('test')
  })
  
  it('Throw error when no place has been passed', async () => {
    const mockClient = jest.spyOn(client, 'get')

    expect(mockClient).not.toHaveBeenCalled()

    try {
      await getWeatherForecast('')
    } catch (e) {
      expect(e).toBeDefined()
    }
  })

  it('Throw error if api throws an error', async () => {
    const mockClient = jest.spyOn(client, 'get')
    console.error = jest.fn()
    mockClient.mockRejectedValue({
      code: 500,
    })

    try {
      await getWeatherForecast('Sacramento')
    } catch (e) {
      expect(console.error).toHaveBeenCalled()
      expect(e).toBeDefined()
    }
  })
})
