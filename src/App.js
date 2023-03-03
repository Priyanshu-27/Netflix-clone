
import './App.css';
import Row from './Row';
import requests from './request';
import Poster from './Poster';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
    <Nav/>
    <Poster />
     <Row 
         title="Netflix original" fetchurl={requests.fetchNetflixOriginals} 
        isLargeRow
     />
     <Row  title= "Trending now" fetchurl={requests.fetchTrending} />
     <Row  title="Top rated" fetchurl={requests.fetchTopRated} />
     <Row  title= "Action" fetchurl={requests.fetchActionMovies} />
     <Row  title="Comedy" fetchurl={requests.fetchComedyMovies} />
     <Row  title= "Horror" fetchurl={requests.fetchHorrorMovies} />
     <Row  title="Romance" fetchurl={requests.fetchRomanceMovies} />
     {/* <Row  title= "Documentries" fetchurl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
