import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import IconTextLabelItem from "../carousel-item/icon-text-label-item";
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Card({
  imgPath,
  img,
  release,
  title,
  onMouseEnter,
  onMouseLeave,
  id,
  overview,
  rate,
}) {
  // Passing Details Card
  const data = {
    imgPath,
    img,
    id,
    title,
    overview,
    rate,
  };
  return (
    <Link to="carddetails" className="linkCard" state={{ data }}>
      <div
        title={title}
        className=" CardParent d-flex justify-content-center align-items-center flex-column"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="imgContainer">
          {/* <img   src= alt="poster"  loading='lazy' fetchpriority="high"  /> */}
          <LazyLoadImage
            src={`${imgPath}${img}`}
            width={250}
            height={375}
            placeholderSrc={`${imgPath}${img}`}
            effect="blur"
            alt="Image Alt"
          />
        </div>
        <div className=" contentParent w-100 d-flex justify-content-around align-items-center ">
          <div className="contentChild d-flex flex-column align-items-center justify-content-center">
            <p className="text-center m-0">{title}</p>
            <p className=" m-0 text-warning">{release}</p>
          </div>
          <div>
            <IconTextLabelItem
              icon={<AiOutlineStar size={25} className="pb-1 " />}
              text={rate}
              color={"red"}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
