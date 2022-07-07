import React from 'react'
import {useLocation}  from 'react-router-dom';
import {Helmet} from "react-helmet";
import "./Main.css";
import "./Artdetails.css";
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
      <div className='main-page' style={{ backgroundImage: "url('./Home.jpeg')" }}>
        <div className='container'>
          <div className='artDetails-container'>
            <div className='row'>
              <img src={state.webImage.url} alt={state.longTitle} className="art-image" />
            </div>
            <div className='row details-row details-row-first'>
              <div className='col left-side'>
                <p>Title: </p>
              </div>
              <div className='col right-side'>
                <p>
                  {state.title}
                </p>
                
              </div>
            </div>
            <div className='row details-row'>
              <div className='col left-side'>
                <p>First Maker: </p>
              </div>
              <div className='col right-side'>
                <p>
                  {state.principalOrFirstMaker}
                </p>
                
              </div>
            </div>
          </div>
          
          
        </div>
      
      </div>
        
    </div>
  )
}

export default ArtDetails