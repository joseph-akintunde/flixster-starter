import { useState } from "react"
import "./MovieModal.css"
import PropTypes from "prop-types"
export function MovieModal({closeModal,movie}){
    return(
        <div className="ModalBackground">
            <div className="ModalContent">    
                <h1>{movie.title}</h1>
                <img style = {{height: "50%"}}src={`https://image.tmdb.org/t/p/w500/${movie.image}`} alt={movie.title} />
                <p>Release Date: {movie.release_date}</p>
                {/* <p>Genre: {movie.genre_ids.}</p> */}
                <p>Overview: </p>
                <button className = "closeBtn" onClick = {() => closeModal(false)} id="closeModal">CLOSE</button>
            </div>
        </div>
    )
}
MovieModal.propTypes = {
    movie: PropTypes.object.isRequired
}