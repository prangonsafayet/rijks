import React, { useEffect, useState } from 'react'
import {useLocation}  from 'react-router-dom';
import {Helmet} from "react-helmet";
import axios from "axios";
import "./Main.css";
import "./Artdetails.css";
import { getLang } from '../../lib/languageSwitcher';
const ArtDetails = () => {
    const {state} = useLocation();
    const [art, setArt] = useState({}); 
    
    
    useEffect(() => {
      if(!state){
        window.location.href = '/'
      }
      axios.get('http://localhost:3001/get?obj_id='+state.objectNumber+'&&lang='+getLang())
      .then(res => {
        setArt(res.data);
      })
    }, [])
    
  return (
    <div>
      {art && art.artObject && <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>{art.title}</title>
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
                      {art.artObject.title}
                    </p>
                  </div>
                </div>
                <div className='row details-row'>
                  <div className='col left-side'>
                    <p>Principal Makers: </p>
                  </div>
                  <div className='col right-side'>
                    <ul>
                      {art.artObject.principalMakers.map((maker, index)=><li key={index}>{maker.name}</li>)}
                      </ul>
                  </div>
                </div>
              </div>
              <div className='col'>
                <img src={art.artObject.webImage.url} alt={art.artObject.longTitle} className="art-image" />
              </div>
              
            </div>
          </div>
          
          
        </div>
      
      </div>
      </>}
        
    </div>
  )
}

export default ArtDetails