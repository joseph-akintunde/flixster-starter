import "./MovieList.css"
import { RenderMovie } from "../rendermovie/RenderMovie"
import MovieCard from "./MovieCard"
import PropTypes from "prop-types"

function MovieList({onClick,results}){
   
        console.log(results)
        const movieList = RenderMovie(results) 
        return(
            <div className="MovieCard">
                {
                movieList.map((obj,index) => {
                    return(
                        <MovieCard key = {index} image = {obj.image} title = {obj.title} rating = {obj.rating} overview = {obj.overview} onClick = {() => onClick(obj)}/>
                    )   
                })
    }
            </div>
        )
    }

export default MovieList