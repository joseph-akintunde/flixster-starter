import { useEffect, useState } from 'react'
import './App.css'
import MovieList from './MovieList'
import SearchComponents from './SearchComponents';
import "./Header.css"
import Sort from "./Sort"
import { MovieModal } from './MovieModal';
// let pageNumber = 1
//const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`;
const options = {
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGM4OGY3ZWI4ZDU2YThkNWYzYjY3MzI4ZjU2YTM2ZSIsIm5iZiI6MTc0OTUzMzI3OC4yMjcsInN1YiI6IjY4NDdjMjVlZWM3MzI5M2NkN2JiMzZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uhoqn3XL1sDXT-jJhsIbVMI2gzkhF5hzYOgdF9M8zA0'
}
}
function App(){
  const [openModal, setOpenModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const[movie, setMovie] = useState("Mission Impossible")
  const[results, setResults] = useState({})
  const[pageNumber, setPageNumber] = useState(1)
  function toNextPage(){
    setPageNumber(pageNumber+1)
  }
  
  useEffect(() => {
    async function fetchMovies(movie){
      try{
         const apiKey = import.meta.env.VITE_APP_API_KEY
         const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`,options)
         if(!response.ok){
          throw new Error("Can't load movies")
         }
         const data = await response.json()
         console.log(data)
         setResults(data)
      }  catch(error){
          console.log(error)
      }
   };
   if(movie){
     fetchMovies(movie)
   }
  },[pageNumber,movie])
  // function movieChange(newMovie){
  //   setMovie(newMovie)
  // }
  // function resultChange(newResult){
  //   setResults(newResult)
  // }
  console.log(results)
  return (
    <div className="App">
      <header className="Header">
          <h1>🎥 Flixster 🎬</h1>
          <SearchComponents setResults={ setResults }/>
          {/* <Sort/> */}
      </header>
    <MovieList onClick = {(movie) => {setSelectedMovie(movie); setOpenModal(true)}} results={results} movie = {movie}/>
    {openModal && <MovieModal closeModal={setOpenModal} movie={selectedMovie}/>}
    <button onClick={toNextPage}>load more</button>
    <footer>
      <p>&copy; joseph akintunde 2024</p>
    </footer>
    </div>
  )
}

export default App
