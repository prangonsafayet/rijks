import React from 'react'
import {useLocation}  from 'react-router-dom';
import {Helmet} from "react-helmet";
const ArtDetails = () => {
    const {state} = useLocation();
    //console.log(state);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{state.title}</title>
        <link rel="icon" type="image/png" href="museum.png" sizes="16x16" />
      </Helmet>
        <h2>{state.longTitle}</h2>
        <img src={state.webImage.url} alt={state.longTitle} />
    </div>
  )
}

export default ArtDetails