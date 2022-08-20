import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./components/button/button";
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

   function readMore(text: string, num: number): string {
    if(text?.length < num) {
      return text;
    }else{
      return text?.slice(0, num) + '...';
    }
  }
 

  return(
    <div>
      <Navbar/>
      <div className="w-full h-[600px] relative">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img className="w-full h-[600px] object-cover object-top " src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="movie" />
        <div className="absolute top-1/3">
          <span className=" text-white text-2xl ml-6 block">{movie?.title}</span>
            <div className="flex gap-4 ml-6 my-4">
                <Button variant={"contained1"} icon={"play"}>Play</Button> 
                <Button variant={"contained2"} icon={"Detail"}>More Info</Button>  
            </div>
          <span className="text-grey200 ml-6">Released: {movie?.release_date}</span>
          <p className="ml-6 text-grey200 mt-4 max-w-5xl text-lg">{readMore(movie?.overview, 200)}</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default App;