import React, {useContext} from 'react'
import { MovieApiContext } from "../contexts/MovieApiContextProvider";
import SearchBar from "./subcomponents/SearchBar";

const Layout = () => {
  
  const { movies } = useContext(MovieApiContext);
  
  console.log("Movies: ", movies);
  
  return (
    <div className="md:container md:mx-auto">
      <SearchBar />
    </div>
  )
}

export default Layout;
