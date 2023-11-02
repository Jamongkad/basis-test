import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api.themoviedb.org/',
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDQwMTA0NmMxYmJkNDM3NzFlODQ0YmU4YzQxNGFjYiIsInN1YiI6IjVmOTgzODJmZTE4Yjk3MDAzNGQwMzM1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UXcm8LSGmfBILHmAZwdHac3aMU2_7Avb2t_D94CZxQQ',
  },
})

const apiPaths = {
  getMovie: (query: string) => `3/search/movie?query=${query}`,
}

export const getMovielist = async (movieQuery: string) => {
  if (!movieQuery) {
    throw new Error(`please provide a movie name!`)
  }

  try {
    return await client.get(apiPaths.getMovie(movieQuery))
  } catch (e) {
    console.error(`failed to retrieve weather forecast!`)
    throw e
  }
  
}
