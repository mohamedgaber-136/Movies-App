import Card from "../Card/Card";
import TvCard from "../TvCard/TvCard";
import Aos from "aos";
import photo from "../Home/assets/wallhaven-42roy9.jpg";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "aos/dist/aos.css";
import { MovieContext } from "../../Context/MoviesContext";
import Paginate from "../Paginate/Paginate";
import { memo } from "react";
import { Helmet } from "react-helmet";
const FullNowPlaying = memo(() => {
  let sectionName = useLocation().state;
  console.log(sectionName);
  let [x, setx] = useState([]);
  let { imgPath, nowPlaying, tvseries, setPageNum } = useContext(MovieContext);
  function getrandomEffect() {
    return Math.floor(Math.random() * 4);
  }
  useEffect(() => {
    switch (sectionName) {
      case "NowPlaying":
        setx(nowPlaying);
        break;
      case "TvSeries":
        setx(tvseries);
        break;
    }
    Aos.init();
  }, [nowPlaying]);
  useEffect(() => {
    return () => {
      setPageNum(1);
    };
  }, []);

  // state For Hover BackGround -------------
  const [isHover, setIsHover] = useState(false);
  // firstImg backGround -----------
  const [image, setimg] = useState(photo);
  const effects = ["fade-down", "fade-up", "fade-left", "fade-right"];
  // mouseEnter CARD
  const handleMouseEnter = (e) => {
    if (e.target.src !== undefined) {
      setimg(e.target.src);
      setIsHover(true);
    }
  };
  // mouse leave Card
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  function onPageChange(data) {
    setPageNum(data.selected + 1);
  }

  return (
    <>
    <Helmet>
      <title>
        {sectionName}
      </title>
    </Helmet>
      <section className="d-flex  flex-column align-items-center justify-content-center ">
        <div
          style={{ backgroundImage: `url(${isHover ? image : photo})` }}
          className="bgImg"
          alt=""
        ></div>
        <h2 className="py-2 bg-white ">
          <span className="Uptitle">NoW</span> Playing
        </h2>
        <main className="d-flex m-0 paginateContent flex-wrap dataParent justify-content-center gap-4  ">
          {x.map((ele, ind) => (
            <div
              key={ind}
              className="animation mt-4"
              data-aos={effects[getrandomEffect()]}
            >
              {sectionName == "NowPlaying" ? (
                <Card
                  imgPath={imgPath}
                  img={ele.poster_path}
                  release={ele.release_date}
                  title={ele.title}
                  rate={ele.vote_average}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  id={ele.id}
                  overview={ele.overview}
                />
              ) : (
                <TvCard
                  imgPath={imgPath}
                  img={ele.poster_path}
                  release={ele.first_air_date}
                  title={ele.name}
                  rate={ele.vote_average}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  id={ele.id}
                  overview={ele.overview}
                />
              )}
            </div>
          ))}
        </main>
      </section>
      <Paginate onPageChange={onPageChange} />
    </>
  );
});
export default FullNowPlaying;
