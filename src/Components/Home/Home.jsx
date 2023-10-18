// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useContext } from "react";
import NowPLaying from "../NowPlaying/NowPlaying";
import TopRated from "../TopRatedMovies/TopRated";
import { MovieContext } from "../../Context/MoviesContext.js";
import CarouselSection from "./CarouselSection";
import "./Home.css";
import bg from "./assets/R.jpeg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SearchResult from "../SearchResult/SearchResult";
import { Helmet } from "react-helmet";
export default function Home() {
  let { imgPath, nowPlaying, Upcoming, topRated, tvseries, FoundData } =
    useContext(MovieContext);
  console.log(FoundData);
  return (
    <>
    <Helmet>
      <title>
        Home
      </title>
    </Helmet>
      {/* Carousel  */}
      <CarouselSection list={Upcoming} />
      {/* NowPlayingSection  */}
      <NowPLaying
        data={nowPlaying}
        sectionName={"NowPlaying"}
        imgPath={imgPath}
      />
      {/* Top Rated Movies  */}
      <section className="TopRated">
        <div
          className="bgBluring d-flex justify-content-center align-items-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <p className="text-white topRatedPara p-0 ">
            If you are looking to watch free movies online then there are loads
            of great options. Some of the best streaming services are offering
            the opportunity to watch movies free without a subscription fee or
            even an account. The likes of Freevee, Tubi, and Pluto TV are all
            free ad-supported streaming platforms that let you watch movies for
            free. Search for Free under the Price filter in order to see exactly
            what movies are available right now without needing to pay anything.
            If you are after free movies online this filter will help you to
            discover classic movies, some big Hollywood blockbusters, and even a
            few hidden gems all for free.
          </p>
        </div>
      </section>
      <TopRated data={topRated} imgPath={imgPath} />
      <div className="upCircle">
        <a href="#homeSec">Go Up</a>
      </div>
      <NowPLaying data={tvseries} sectionName={"TvSeries"} imgPath={imgPath} />
      <SearchResult />
    </>
  );
}
