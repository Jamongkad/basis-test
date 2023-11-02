import {renderHook, act, waitFor} from '@testing-library/react'
import { Axios, AxiosResponse, AxiosError } from 'axios'
import apis from '../../api'
import { getMovielist } from '../../api/Api'
import useMovielist from "../useMovielist";

jest.mock('../../api', () => ({
  getMovielist: jest.fn(),
}))

describe('useMovielist hook', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  
  it('it returns a list of movies', async() => {
    jest.useFakeTimers();
    const mockApi = jest.spyOn(apis, 'getMovielist')
    const res: AxiosResponse = {
      data: {
        results: [
          {
            id: 105,
            overview: "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
            poster_path: "w500/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
            releaseDate: "1985-07-03",
            title: "Back to the Future",
            voteAverage: 8.313,
            voteCount: 18585
          }
        ]
      },
      status: 200,
      statusText: 'OK',
      config: {},
      headers: {},
    }
    
    mockApi.mockResolvedValueOnce(res)
    
    let hook;
    await act(async () => {
      hook = renderHook(() => useMovielist({ movieQuery: 'Detective Pikachu' }))
    })
    
    expect(hook.result.current.movies.length).toBeGreaterThan(0)
  });
})
