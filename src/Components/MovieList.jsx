import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../redux/slicer/contentSlicer";
import FetchMovieHook from "../hooks/FetchMovie";
import PosterImage from "./PosterImage";

const MovieList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  console.log(pageNumber);
  const { data, isLoading, contentlist, totalLength } =
    FetchMovieHook(pageNumber);
  const observer = useRef();
  const lastMovieElementRef = useCallback((node) => {
    if (isLoading  || contentlist.length >= totalLength ) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [contentlist.length, totalLength]);

  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      {data &&
        contentlist.map((item, index) => {
          let totalLength = contentlist.length;
          if (totalLength === index + 1) {
            return (
              <div
                ref={lastMovieElementRef}
                className="flex flex-col items-center gap-[24px]"
              >
                <span className="w-full ">{item.name}</span>
                <PosterImage item={item}/>
              </div>
            );
          } else {
            return (
              <>
                <div className="flex flex-col items-center  gap-[24px]">
                  <span className="w-full ">{item.name}</span>
                  <PosterImage item={item}/>
                </div>
              </>
            );
          }
        })}
    </div>
  );
};

export default MovieList;
