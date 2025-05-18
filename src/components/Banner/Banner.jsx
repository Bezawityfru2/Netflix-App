import { useEffect, useState } from "react"
import request from  "../../api/request.jsx";
import  axios from  '../../api/axios.jsx';
import "./banner.css";

const Banner = () => {
    // let truncate = (text, maxLength) => {
    //     return text?.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    // };
    const [movie, setMovie] = useState({});

    useEffect(() => {
        (async () => {
            try {
            const requests = await  axios.get(request.fetchNetflixOriginals);
            console.log(requests);
            setMovie(
                requests.data.results[
                    Math.floor(Math.random() * requests.data.results.length)
                ]
            );
            } catch (error) {
                console.log('error', error);
            }
        })();
    }, []);
   console.log(movie?.backdrop_path);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n -1) + '...' : str
    }

    return (
    <div className="banner" style={{
        backgroundSize: "cover",
        backgroundImage: `URL("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
    }}>
     <div className="banner-contents">
    <h1 className="banner-title"> {movie?.title || movie?.name || movie?.original_name}
     </h1>
      <div className="banner-buttons">
          <button className="banner_button play">Play</button>
         <button className="banner_button">My List</button>
         </div>
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
     </div>
     <div className="banner-fadebottom"/>
     </div>
    );
 };

 export default Banner;