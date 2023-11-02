import React, {useReducer, createContext} from "react";
import useMovielist from "../hooks/useMovielist";
import {AxiosError} from "axios";

interface IMoviesApiContext {
  movies: any[]
  error: AxiosError | undefined
}

export const enum MoviesActionKind {
  MOVIE_QUERY = 'movieQuery',
}

interface IMoviesQueryAction {
  type: MoviesActionKind;
  movieQuery: string;
}

interface IMoviesDispatchContext {
  dispatch: React.Dispatch<IMoviesQueryAction>
}

interface IMoviesState {
  movieQuery: string;
}

const moviesReducer = (state: IMoviesState, action: IMoviesQueryAction) => {
  switch(action.type) {
    case MoviesActionKind.MOVIE_QUERY: {
      return {
        ...state,
        movieQuery: action.movieQuery
      }
    }
    default: {
      throw Error('Unexpected action type in MoviesApiContextProvider reducer')
    }
  }
}

export const MovieApiContext = createContext<IMoviesApiContext>({ movies: [], error: undefined })
export const MovieDispatchContext = createContext<React.Dispatch<IMoviesQueryAction>>(() => {})

export const MovieApiContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(moviesReducer, { movieQuery: '' });
  const { movies, error } = useMovielist(state)
  
  return (
    <MovieApiContext.Provider value={{ movies, error }}>
      <MovieDispatchContext.Provider value={dispatch}>
        {children}
      </MovieDispatchContext.Provider>
    </MovieApiContext.Provider>
  )
}
