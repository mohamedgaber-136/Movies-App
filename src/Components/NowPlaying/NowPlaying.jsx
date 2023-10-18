import TvCard from "../TvCard/TvCard";
import Card from "../Card/Card";
import Aos from "aos";
import { useCallback } from "react";
import photo from "../Home/assets/wallhaven-42roy9.jpg";
import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
const NowPlaying = memo(({ data, imgPath, sectionName }) => {
  const getrandomEffect = useCallback(() => {
    return Math.floor(Math.random() * 4);
  }, []);
  useEffect(() => {
    Aos.init();
  }, []);
  // state For Hover BackGround -------------
  const [isHover, setIsHover] = useState(false);
  // firstImg backGround -----------
  const [image, setimg] = useState(photo);
  const effects = ["fade-down", "fade-up", "fade-left", "fade-right"];
  // mouseEnter CARD
  const handleMouseEnter = useCallback((e) => {
    if (e.target.src !== undefined) {
      setimg(e.target.src);
      setIsHover(true);
    }
  }, []);
  // mouse leave Card
  const handleMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);
  return (
    <>
      <section className="d-flex py-5 flex-column align-items-center justify-content-center ">
        <div
          style={{ backgroundImage: `url(${isHover ? image : photo})` }}
          className="bgImg"
          alt=""
        ></div>
        <h2 className="py-2 bg-white ">
          <span className="Uptitle">{sectionName}</span> 
        </h2>
        <main className="d-flex m-0  flex-wrap dataParent justify-content-center gap-4  ">
          {data.map((ele, ind) => (
            <div
              key={ind}
              className="animation mt-4"
              data-aos={effects[getrandomEffect()]}
            >
              {sectionName == "NowPlaying" ? 
              (
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
                  overview={ele.overview}/>
              )}
            </div>
          ))}
        </main>
        <Link
          className="mt-3 ViewMore"
          to="fullnowplaying"
          state={sectionName}
        >
          View More
        </Link>
      </section>
    </>
  );
});
export default NowPlaying;
