import MovieCard from "./MovieCard"
import { useEffect, useState } from "react"
const options = {
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGM4OGY3ZWI4ZDU2YThkNWYzYjY3MzI4ZjU2YTM2ZSIsIm5iZiI6MTc0OTUzMzI3OC4yMjcsInN1YiI6IjY4NDdjMjVlZWM3MzI5M2NkN2JiMzZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uhoqn3XL1sDXT-jJhsIbVMI2gzkhF5hzYOgdF9M8zA0'
}}
function Sort({setResults,movies}){
    console.log(movies)
    const [sortType, setSortType] = useState('')
    function SortMovies(movies, sortType){
        let Sorted = null;
        const newMovies = movies ?[...movies]:[]
        if(sortType === "title"){
        Sorted = newMovies.sort((a,b) => a.title.localeCompare(b.title))
    } else if(sortType === "rating"){
        Sorted = newMovies.sort((a,b) => {
            return b.rating - a.rating
    });
    } else if(sortType === "releaseDate"){
        Sorted = newMovies.sort((a,b) => {
            const date1 = new Date(a.release_date)
            const date2 = new Date(b.release_date)
            return date2 - date1
        })
    }else{
        Sorted = newMovies
    }
    return Sorted
    }
    
    useEffect(()=>{
        const newSortedItems = SortMovies(movies.results,sortType)
        let mov = {results: newSortedItems}
        setResults(mov)
    },[sortType])
    return(
            <select style={{width:'10em'}} id="movies" className="sort" value = {sortType} onChange={(e) => setSortType(e.target.value)}>
                <option value="">Sort By</option>
                <option value="title">Title(A-Z)</option>
                <option value="releaseDate">Release Date</option>
                <option value="rating">Rating</option>
            </select>
    )
}
export default Sort