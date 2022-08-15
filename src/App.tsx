import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";
import requests from "./request";


 const App : React.FC<{}> = (props) => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    axios.get(requests.requestTrending).then((response) => {
    setMovies(response.data.results);
    })
  },[]);

  const movie = movies[Math.floor(Math.random() * movies.length)];
 
  return(
    <div>
      <Navbar/>
      <div className="w-full h-[600px] text-wite">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img className="w-full h-[600px] object-cover object-top " src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="movie" />
      </div>
      <Footer/>
    </div>
  )
}
export default App;