import "./SearchComponents.css"
import { use, useEffect, useState } from 'react'
import MovieCard from './MovieCard'
const options = {
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGM4OGY3ZWI4ZDU2YThkNWYzYjY3MzI4ZjU2YTM2ZSIsIm5iZiI6MTc0OTUzMzI3OC4yMjcsInN1YiI6IjY4NDdjMjVlZWM3MzI5M2NkN2JiMzZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uhoqn3XL1sDXT-jJhsIbVMI2gzkhF5hzYOgdF9M8zA0'
}}
function SearchComponents({setResults}){
    const [searchMovie, setSearchMovie] = useState('')
    function handleSearchChange(text){
         setSearchMovie(text)
    }
    async function handleSearch(e){
        e.preventDefault()
        const apiKey = import.meta.env.VITE_APP_API_KEY
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}`,options)
        const data = await response.json()
        console.log(data)

        setResults(data.results)
    }
    return(
    <form className="Submit">
       <input name = "inputForm" className = 'inputSpace' type="search" placeholder="Search for movies" onChange = {(e) => handleSearchChange(e.target.value)}/>
       <button onClick = {handleSearch} className="searchBtn" type="submit">Search</button>
       <button onClick = {() => {searchMovie(''); ([])}} className="clearBtn">Clear</button>
    </form>
    )
}
export default SearchComponents