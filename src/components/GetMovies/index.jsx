// import { useState,useEffect } from 'react';
// import ImageContainer from "../../atoms/Image-container";
// import { getCategory, getMovies } from '../../utils/utilities';
// import './style.css'

// const MoviesApp= ({ search, movies, loading }) => {
//     const [movies,setMovies] = useState([])
//     const [loading,setLoading] = useState(false)
//     const [category,setCategory] = useState("")
//     const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;
//   const [selectedMovie, setSelectedMovie] = useState(null);

//   const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()));

//   const handleMovieClick = (movie) => {
//     setSelectedMovie(movie);
//   };
  
//     useEffect(()=>{
//         (async()=>{
//             setLoading(true)
//             if(category){
//               const movies = await getCategory(category)
//               console.log(movies)
//               setMovies(movies.results)
//             }else{
//               const movies = await getMovies()
//               setMovies(movies.results)
         
//             }
//             setLoading(false)
    
       
//             console.log({movies})
//         })();
//     },[category])
//     if(loading ){
//         return <h1>Loading...</h1>
    
//     }
//     return (
//         <div className="movie-list-container">
//           {loading ? (
//             <p>Loading...</p>
//           ) : movies.length === 0 ? (
//             <p>No movies found.</p>
//           ) : (
//             <div className="image-container">
//               {filteredMovies.map(item => (
//                 <div key={item.id} onClick={() => handleMovieClick(item)}>
//                   <ImageContainer props={item} />
//                 </div>
//               ))}
//             </div>
//           )}
    
//           {selectedMovie && (
//             <div className="single-detail">
//               <div className="single-detail-content">
//                 <span className="closing" onClick={() => setSelectedMovie(null)}>&times;</span>
//                 <img src={`${IMAGE_BASE_URL}${selectedMovie.poster_path}`} alt={selectedMovie.title} />
//                 <h2>{selectedMovie.title}</h2>
//                 <p>{selectedMovie.overview}</p>
//                 <p>Released {selectedMovie.release_date}</p>
//                 <button>WATCH NOW</button>
//               </div>
//             </div>
//           )}
//         </div>
//       );
//     }
    
//     export default MoviesApp;