
const Movies = async () => {
        const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=1549e92d47be72d14413d096b261b8c6", {
    // next: { revalidate: 10 },
    // cache: "force-cache"
  });
        const data = await res.json();
        const movies = data.results
 
  return (
      <div className="flex flex-wrap gap-4 justify-center">
        {movies.map((movie) => (
          <div key={movie.id} className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{movie.title}</h2>
               
              <div className="card-actions justify-end">
                <button className="btn btn-primary m-auto">Watch Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    
  );
};

export default Movies;

 

// const Movies = ({ movies }) => {
//   return (
//     <div>
//        
//       <div className="mb-4">
//         <label htmlFor="filter" className="mr-2">Filter by:</label>
//         <select
//           id="filter"
//           className="p-2 border rounded"
//         
//           onChange={(e) => window.location.href = `/movies?filter=${e.target.value}`}
//         >
//           <option value="">None</option>
//           <option value="a-z">Title: A to Z</option>
//           <option value="z-a">Title: Z to A</option>
//         </select>
//       </div>

//      
//       <div className="flex flex-wrap gap-4 justify-center">
//         {movies.map((movie) => (
//           <div key={movie.id} className="card card-compact bg-base-100 w-96 shadow-xl">
//             <figure>
//               
//               <img
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//               />
//             </figure>
//             <div className="card-body">
//             
//               <h2 className="card-title">{movie.title}</h2>
//               <div className="card-actions justify-end">
//             
//                 <button className="btn btn-primary m-auto">Watch Now</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

 // export async function getServerSideProps(context) {
 //   const { filter = '' } = context.query;


//   const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=1549e92d47be72d14413d096b261b8c6");
//   const data = await res.json();
//   const movies = data.results;

 
//   const filteredMovies = filter === 'a-z'

//     ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
//     : filter === 'z-a'
 
//     ? [...movies].sort((a, b) => b.title.localeCompare(a.title))
 
//     : movies;

//   return {
 
//     props: { movies: filteredMovies }
//   };
// }

// export default Movies;
