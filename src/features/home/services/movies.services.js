
import { tmdb_api, tmdb_paths } from "../../../core/datasources/remote/tmdb/tmdb_api";
import { tdmbMoviesTvAdapter } from "../../adapters/tmdb.adapters";
 
   
  export const getPopularMovies = async () => {
    const { data } = await tmdb_api.get(tmdb_paths.movies.popular);
    console.log("data", data);
  
    return tdmbMoviesTvAdapter(data)

  }