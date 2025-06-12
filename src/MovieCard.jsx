import PropTypes from "prop-types"
import "./MovieCard.css"
function MovieCard({image, title, rating}){
    const imgURL = `https://image.tmdb.org/t/p/w500/${image}`
    return(
        <div className="CardContent">
            <img className = "img" src={imgURL} alt={title}/>
            <div className="titleRating">
                <p>{title}</p>
                <p>Rating: {rating}</p>
            </div>
            <p>🤍</p>
            <p>👁️</p>
        </div>
    )
}
MovieCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired 
}
export default MovieCard