import React from 'react'
import {useLocation}  from 'react-router-dom';

const ArtDetails = () => {
    const {state} = useLocation();
    //console.log(state);
  return (
    <div>
        <h2>{state.longTitle}</h2>
        <img src={state.webImage.url} alt={state.longTitle} />
    </div>
  )
}

export default ArtDetails