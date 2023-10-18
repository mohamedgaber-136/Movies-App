import axios from "axios";
import "./CardDetail.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
export default function CardDetails() {
  const location = useLocation();
  const apiKey = "api_key=9c34f07be9be54aa8e3fbe2e5b416d45";
  const [credtis, setCredtis] = useState([]);
  const cardData = location.state.data;
  console.log(cardData)
  async function getCredit() {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${cardData.id}/credits?${apiKey}`
      )
      .then((response) => setCredtis(response.data.cast))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getCredit();
  }, []);
  return (
    <>
    <Helmet>
      <title>
      {cardData.title}
      </title>
    </Helmet>
    <div
      className="cardDetailBody DetailsBg overflow-hidden vh-100 d-flex align-items-center justify-content-center   "
      style={{ backgroundImage: `url(${cardData.imgPath}${cardData.img})` }}
    >
      <div className="cardDetailBody  detailbodyMove flex-column flex-md-row justify-content-center d-flex px-3 gap-md-5 gap-2 align-items-center  ">
        <div
          className="leftCard "
          style={{ backgroundImage: `url(${cardData.imgPath}${cardData.img})` }}
        ></div>
        <div className="rightData d-flex flex-column align-items-start gap-2 justify-content-start">
          <div className="top_right d-flex flex-column align-items-start gap-2 justify-content-start">
            <h3 className="py-2 bg-white rounded">
              <span className="cardDataTitle text-danger">
                {cardData.title}
              </span>
            </h3>
            <h4 className="text-white text-justify">{cardData.overview}</h4>
          </div>
          <div className="cast  cardDataTitle">
            <h4 className="bg-white rounded text-danger px-2 py-1 text-center">
              cast
            </h4>
            <div className="Castimgs d-flex flex-wrap justify-content-center">
              {credtis.map((ele, ind) => (
                // console.log(ele.profile_path)
                <img
                  src={cardData.imgPath + ele.profile_path}
                  key={ind}
                  className={ele.profile_path != null ? "creditImg" : "d-none"}
                  alt="poster"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
