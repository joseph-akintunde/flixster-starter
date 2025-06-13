import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import MovieList from "./MovieList";
import SearchComponents from "./SearchComponents";
import "./Header.css";
import Sort from "./Sort";
import { MovieModal } from "./MovieModal";
import "./footer.css";
//import { Sidebar } from './sidebar';

// let pageNumber = 1
//const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGM4OGY3ZWI4ZDU2YThkNWYzYjY3MzI4ZjU2YTM2ZSIsIm5iZiI6MTc0OTUzMzI3OC4yMjcsInN1YiI6IjY4NDdjMjVlZWM3MzI5M2NkN2JiMzZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uhoqn3XL1sDXT-jJhsIbVMI2gzkhF5hzYOgdF9M8zA0",
  },
};
function App() {
  const [openModal, setOpenModal] = useState(false);
  //const [selectedMovie, setSelectedMovie] = useState(null)
  const [movie, setMovie] = useState("Mission Impossible");
  const [results, setResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  function toNextPage() {
    setPageNumber(pageNumber + 1);
  }
  async function fetchMovies(page = pageNumber) {
    console.log("any");
    try {
      const apiKey = import.meta.env.VITE_APP_API_KEY;
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${pageNumber}`,
        options
      );
      if (!response.ok) {
        throw new Error("Can't load movies");
      }
      const data = await response.json();
      console.log(data);
      setResults((prev) => page > 1 ? [...prev, ...data.results] : data.results);
      // setResults(data.results);
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    console.log("mess");
    fetchMovies();
  }, [pageNumber]);

  // useEffect(() => {
  //   console.log(movie);
  // }, [movie]);
  // console.log(movie);
  return (
    <div className="App">
      <header className="Header">
        {/* <a href="App.jsx">NOW PLAYING</a>
          <a href="#">FAVOURITES</a>
          <a href="#">WATCHED</a> */}
        <h1>🎥 Flixster 🎬</h1>
        <SearchComponents setResults={setResults} />
        <Sort setResults={setResults} movies={results} />
      </header>
      <MovieList
        onClick={(movie) => {
          setMovie(movie);
          setOpenModal(true);
        }}
        results={results}
      />
      {openModal && (
        <MovieModal
          closeModal={setOpenModal}
          keyId={movie.id}
          image={movie.image}
          overview={movie.overview}
          release_date={movie.release_date}
          title={movie.title}
        />
      )}
      <button className="loadBtn" onClick={toNextPage}>
        LOAD MORE
      </button>
      <footer className="Footer">
        <p>
          &copy; the joseph akintunde entertainment company llc 2030. All Rights
          Reserved
        </p>
        <a className="tospp" href="#">
          Terms of Service and Privacy Policy
        </a>
        <div className="socials">
          <a href="https://www.instagram.com/jausephh/?hl=en">
            <img
              width="50px"
              src="src/img/instagram-logo-black-transparent.png"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/joseph-akintunde-4a1492288/">
            <img
              width="40px"
              src="src/img/linkedin-icon-1-logo-png-transparent.png"
              alt=""
            />
          </a>
          <a href="https://github.com/joseph-akintunde/flixster-starter">
            <img className="git" width="40px" src="src/img/imagesgit.png" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
