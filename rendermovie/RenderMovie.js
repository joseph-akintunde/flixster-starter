export function RenderMovie(dataObject){
    const arr = []
    for(let i = 0; i < dataObject.length; i++){
        let movies = dataObject[i]
        let items = {
            "image": movies.poster_path,
            "title": movies.original_title,
            "rating": movies.vote_average
        }
          arr.push(items)
    }
    return(
        arr
    )
  
}
const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NGM4OGY3ZWI4ZDU2YThkNWYzYjY3MzI4ZjU2YTM2ZSIsIm5iZiI6MTc0OTUzMzI3OC4yMjcsInN1YiI6IjY4NDdjMjVlZWM3MzI5M2NkN2JiMzZhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uhoqn3XL1sDXT-jJhsIbVMI2gzkhF5hzYOgdF9M8zA0'
  }
};

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));
