import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export let MovieContext = createContext("");
export default function MovieContextProvide(props) {
  // state for Upcoming Data Carousel -----------------
  let [pageNum,setPageNum]= useState(1)
  const [Upcoming, setData] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [FoundData, setFoundData] = useState([]);
  const [tvseries,setTvseries]=useState([])
  // state For NowPlaying Data Api -----------------
  const [nowPlaying, setnowPlaying] = useState([]);
  // state For Searching Movie----------------------
  const [searchData, setSearchData] = useState();
  // Path for Image ----------------------
  const imgPath = "https://image.tmdb.org/t/p/original/";
  // apiKey----------------
  const apiKey = "api_key=9c34f07be9be54aa8e3fbe2e5b416d45";
  // faded switch

  // get up coming moveis Api
  async function upComingApiData() {
    await axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?${apiKey}`)
      .then((resposne) => setData(resposne.data.results))
      .catch((err) => console.log(err));
  }
  async function topRatedApi() {
    await axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?${apiKey}&page=${pageNum}`)
      .then((resposne) => setTopRated(resposne.data.results))
      .catch((err) => console.log(err));
  }
  async function TvSeries() {
    await axios
      .get(`https://api.themoviedb.org/3/trending/tv/day?${apiKey}&page=${pageNum}`)
      .then((resposne) => setTvseries(resposne.data.results))
      .catch((err) => console.log(err));
  }
  async function searchsData() {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/movie?&query=${searchData}&${apiKey}`
      )
      .then((resposne) => setFoundData(resposne))
      .catch((err) => console.log(err));
  }
  // get up now PLaying Movies Api
  async function nowPlayingApiData() {
    await axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?${apiKey}&page=${pageNum}`)
      .then((resposne) => setnowPlaying(resposne.data.results))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    upComingApiData();
    nowPlayingApiData();
    topRatedApi();
    TvSeries() 
  }, [pageNum]);
  useEffect(() => {
    searchsData();
  }, [searchData]);
  function getSearchResult(e) {
    if (e.target.value !== undefined) {
      setSearchData(e.target.value);
      console.log(searchData)
    }
  }
  return (
    <MovieContext.Provider
      value={{
        Upcoming,
        nowPlaying,
        imgPath,
        topRated,
        tvseries,
        getSearchResult,
        searchData,
        FoundData,
        pageNum,
        setSearchData,
        nowPlayingApiData,
        setPageNum,
     
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}
