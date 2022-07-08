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
      <div className='art-details-page' style={{ background: "#000" }}>
        <div className='art-header-image'  style={{ backgroundImage: `url(${state.headerImage.url})` }}>
        </div>
        <div className='container'>
          <div className='artDetails-container'>
            <div className='row'>
              <div className='col'>
                <div className='row details-row'>
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
              <div className='col'>
                <img src={state.webImage.url} alt={state.longTitle} className="art-image" />
              </div>
              
            </div>
            {/* <div className='row details-row details-row-first'>
              <div className='col left-side'>
                <p>Title: </p>
              </div>
              <div className='col right-side'>
                <p>
                  {state.title}
                </p>
                
              </div>
            </div> */}
            {/* <div className='row details-row'>
              <div className='col left-side'>
                <p>First Maker: </p>
              </div>
              <div className='col right-side'>
                <p>
                  {state.principalOrFirstMaker}
                </p>
                
              </div>
            </div> */}
          </div>
          
          
        </div>
      
      </div>
        
    </div>
  )
}

export default ArtDetails