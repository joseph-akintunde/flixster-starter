import "./MovieList.css"
import { RenderMovie } from "../rendermovie/RenderMovie"
import CardContent from "./CardContent"
import PropTypes from "prop-types"
// import { useImperativeHandle } from "react"
function MovieList({movie,results}){
    if ('results' in results) {
        const movieList = RenderMovie(results.results)
        console.log(movieList)
        console.log(results) 
        return(
            <div className="MovieCard">
                {
                movieList.map((obj,index) => {
                    return(
                        <CardContent key = {index} image = {obj.image} title = {obj.title} rating = {obj.rating} />
                    )   
                })
    }
            </div>
        )
    }
    else {
        return (
            <div>Loading...</div>
        )
    }
}

export default MovieList