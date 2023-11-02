import {useEffect, useState} from "react";
import {AxiosError} from "axios";
import apis from "../api";

const useMovielist = ({ movieQuery }: { movieQuery: string }) => {
  
  const [movies, setMovielist] = useState([])
  const [error, setError] = useState<AxiosError>()
  
  useEffect(() => {
    const asyncOperation = async () => {
      try {
        const { data } = await apis.getMovielist(movieQuery);
        
        const updatedMovielist = data.results.map((movie: any) => {
          return {
            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            poster_path: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            releaseDate: movie.release_date,
            voteAverage: movie.vote_average,
            voteCount: movie.vote_count,
          }
        });
        
        setMovielist(updatedMovielist);
      } catch(e) {
        const err = e as AxiosError
        console.error(err);
        setError(err);
      }
    }
    
    asyncOperation()
  }, [movieQuery])
  
  return {
    movies,
    error
  }
}

export default useMovielist;
