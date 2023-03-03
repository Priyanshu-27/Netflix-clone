const Api_key = "89e7bfd4f4566775b3b120ea5ea5f581";


const requests = {
    
    fetchTrending:`/trending/all/week?api_key=${Api_key}&language=en-U5`,
    fetchNetflixOriginals:`/discover/tv?api_key=${Api_key}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${Api_key}&language=en-U5`,
    fetchActionMovies:`/discover/movie?api_key=${Api_key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${Api_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${Api_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${Api_key}&with_genres=10749`,
    fetchDocumentaries:`/discover/movies?api_key=${Api_key}&with_genres=99`,

}


export default requests ;