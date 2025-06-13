import "./MovieList.css"
import { RenderMovie } from "../rendermovie/RenderMovie"
import MovieCard from "./MovieCard"
import PropTypes from "prop-types"
// import { useImperativeHandle } from "react"
function MovieList({onClick,results}){
    // console.log(results)
    // if ('results' in results) {
    //     console.log(results)
        //console.log(movieList)
        // if(results.results){
        //     movieList = RenderMovie(results.results)
        // }
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
//     // else {
//     //     return (
//     //         <div>Loading...</div>
//     //     )
//     // }
// }

export default MovieList