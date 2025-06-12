import PropTypes from "prop-types"
import "./MovieCard.css"
import { useEffect, useState } from "react"
function MovieCard({image, title, rating, onClick}){
    const likesKey = `likes: ${title}`
    const likedKey = `liked: ${title}`
    const[likes, setLikes] = useState(0)
    const[liked,setLiked] = useState(true)

    const watchKey = `watches: ${title}`
    const watchedKey = `watched: ${title}`
    const[watch, setWatch] = useState(0)
    const[watched,setWatched] = useState(true)
    useEffect(() => {
        const storedLikes = localStorage.getItem(likesKey)
        const storedLiked = localStorage.getItem(likedKey)
        if(storedLikes) setLikes(parseInt(storedLikes))
        if(storedLiked==='true') setLiked(true)
    },[likedKey, likesKey])
    useEffect(() => {
        const storedWatch = localStorage.getItem(watchKey)
        const storedWatched = localStorage.getItem(watchedKey)
        if(storedWatch) setWatch(parseInt(storedWatch))
        if(storedWatched==='true') setWatched(true)
    },[watchedKey, watchKey])
   function liker(){
    const newLiked = !liked
    const newLikes = newLiked? likes+1:likes-1
    setLikes(newLikes)
    setLiked(newLiked)

    localStorage.setItem(likesKey,newLikes.toString())
    localStorage.setItem(likedKey,newLiked.toString())
   }
    function watcher(){
        const newWatched = !watched
        const newWatch = newWatched ? watched + 1: watched - 1
        setWatch(newWatch)
        setWatched(newWatched)

        localStorage.setItem(watchKey,newWatch.toString())
        localStorage.setItem(watchedKey,newWatched.toString())
    
   }
    const imgURL = `https://image.tmdb.org/t/p/w500/${image}`
    return(
        <div className="CardContent" onClick = {onClick}>
            <img className = "img" src={imgURL} alt={title}/>
            <div className="titleRating">
                <p>{title}</p>
                <p>Rating: {rating}</p>
                <button onClick={(e) => {{liker} e.stopPropagation()}}>{liked? '🤍 ':'❤️ '}<span>{likes}</span></button>
                <button onClick={(e) => {{watcher} e.stopPropagation()}}>{watched? '👁️ ': "😍"}<span>{watch}</span></button>
            </div>
            
        </div>
    )
}
MovieCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}
export default MovieCard