import React from "react";
import './SearchCard.css'
import { Link } from "react-router-dom";

export default function SearchCard({imgPath,img,release,title,id,overview,}) {

  return (
    <div className= {img==undefined?'d-none':'searchCard p-1 bg-dark '} style={{ width: "200px" }}>
        <div className="imgParent overflow-hidden " width={'100%'}>
      <img src={img==undefined?'':`${imgPath}${img}`} alt="poster" width={"100%"} />
        </div>
      <div className="d-flex justify-content-center align-items-center">
        <h6 className="text-white text-center m-0">{title}</h6>
      </div>
    </div>
  );
}
