import React, { useContext } from "react";
import "./searchResult.css";
import SearchCard from "../SearchCard/SearchCard";
import { MovieContext } from "../../Context/MoviesContext";
export default function SearchResult() {
  let {searchData,FoundData,imgPath ,setSearchData} = useContext(MovieContext);
  let founds =FoundData.data
  console.log(searchData,'search')
  function checkSearchData(){
      if(searchData==undefined||searchData==''){
          return true;
        }else{
            return false;
        }
    }
    console.log(checkSearchData(),'func')
    function clearSearch(){
      setSearchData('')
    }
  return (
    <div className={checkSearchData()?'d-none  h-0':'gap-2 searchResult d-flex h-100 flex-wrap justify-content-center align-items-center  '}>
      {checkSearchData()?'Nothing':founds.results.map((ele,ind) => (
        <SearchCard
        key={ind}
        imgPath={imgPath}
        img={ele.backdrop_path}
        title={ele.original_title}
        />
      ))}
      <i className="fa-solid fa-circle-xmark" onClick={clearSearch}></i>
    </div>
  );
}
