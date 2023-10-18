import React, { memo } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import { AiOutlineCalendar, AiOutlineStar } from "react-icons/ai";
import IconTextLabelItem from "./icon-text-label-item";
import { MovieContext } from "../../Context/MoviesContext.js";
import "./carousel-item.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
const CarouselItem = memo(({ movie }) => {
  let { imgPath } = useContext(MovieContext);
  const data = {
    imgPath: imgPath,
    img: movie.poster_path,
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
  };
  return (
    <div className="movie-poster-card " id="homeSec">
      <figure className="h-100 m-0">
        <img
          loading="lazy"
          className="h-100 object-fit-cover moviePosterImg "
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt=""
        />
      </figure>

      <div className=" movie-poster p-2 text-light  ">
        <Container className="h-100 justify-content-center align-items-center movie-container gap-3 ">
          <Link
            to="carddetails"
            state={data}
            className="movie-img   rounded-3 m-0"
          >
            <img
              loading="lazy"
              className=" object-fit-cover rounded-3 posterImg "
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
          </Link>

          <Col
            md={6}
            className=" justify-content-start align-items-start p-md-3 border border-1 rounded rounded-2 shadow-lg"
          >
            <h2 className="fs-2 fw-bolder text-white">
              {movie.original_title}
            </h2>
            <section className="px-2 pb-2">
              <div className="d-flex flex-wrap align-items-sm-center justify-content-sm-start justify-content-center align-items-center   gap-3 fst-italic py-2  text-md-start">
                {movie.genre_ids.map((item, index) => (
                  <li
                    key={`genre-${index}`}
                    className="p-1 px-2 bg-dark  rounded-2"
                  >
                    {item}
                  </li>
                ))}
              </div>

              <p className="h-100 text-white  movie-overview ">
                {movie.overview}
              </p>

              <div className="d-flex justify-content-between bg-dark rounded rounded-3 align-items-center  ">
                <IconTextLabelItem
                  icon={<AiOutlineStar size={25} className="pb-1 " />}
                  text={movie.vote_average}
                  color={"yellow"}
                />
                <IconTextLabelItem
                  icon={<AiOutlineCalendar size={27} />}
                  text={new Date(movie.release_date).toDateString()}
                  width={"200px"}
                />
              </div>
            </section>
          </Col>
        </Container>
      </div>
    </div>
  );
});

export default CarouselItem;
