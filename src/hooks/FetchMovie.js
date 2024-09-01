import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie } from '../redux/slicer/contentSlicer';

const FetchMovieHook = (pagenumber) => {
    const dispatch = useDispatch();
    const tvshows = useSelector(state => state?.contentlist );
    const {isLoading,data,contentlist,totalLength } = tvshows
    useEffect(()=>{
     dispatch(fetchMovie(pagenumber))

    },[pagenumber])

  return {isLoading,data,contentlist,totalLength}
  
}

export default FetchMovieHook