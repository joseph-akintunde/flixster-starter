import MovieCard from "./MovieCard"
import { useEffect, useState } from "react"
const options = {
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGM4OGY3ZWI4ZDU2YThkNWYzYjY3MzI4ZjU2YTM2ZSIsIm5iZiI6MTc0OTUzMzI3OC4yMjcsInN1YiI6IjY4NDdjMjVlZWM3MzI5M2NkN2JiMzZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uhoqn3XL1sDXT-jJhsIbVMI2gzkhF5hzYOgdF9M8zA0'
}}
function Sort({setResults}){
    const[sortMovie, setSortMovie] = useState('title') 
    const[sortedMovie, setSortedMovie] = useState('movies')
    async function handleSearch(e){
        e.preventDefault()

        // const apiKey = import.meta.env.VITE_APP_API_KEY
        // const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${sort}`,options)
        // const data = await response.json()
        // console.log(data)

        // setResults(data)
    }
    return(
            <select style={{width:'10em'}} id="movies" className="sort" value = {setSortMovie} onChange={(e) => setSortMovie(e.target.value)}>
                <option value="">Sort By</option>
                <option value="title">Title(A-Z)</option>
                <option value="releaseDate">Release Date</option>
                <option value="rating">Rating</option>
            </select>
    )
}
export default Sort