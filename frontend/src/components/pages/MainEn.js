import React, {useState, useEffect} from 'react';
import axios from 'axios';
import _ from 'lodash';
import './Main.css';
import {Helmet} from "react-helmet";
import Artbox from '../Artbox';
const MainEn = () => {
  const [arts, setArts] = useState(0);
  const [preArts, setPreArts] = useState(null);
  const [scroll, setScroll] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
      var results=_.filter(preArts,function(item){
        return item.longTitle.toLowerCase().indexOf(e.target.value)>-1;
      });
      setArts(results);
  }

  const fetchArts = async () => {
    await axios.get('http://localhost:3001/search?lang=en')
    .then(res => {
      const response = res.data;
      //console.log(response);
      setPreArts(response.artObjects);
      setArts(response.artObjects);
    })
  }
  

  


  useEffect(() => {
    
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 80);
    });

  
    fetchArts();
  }, [])
  

  
return (
  <div className='main-page' style={{ backgroundImage: "url('./Home.jpeg')" }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home</title>
      <link rel="icon" type="image/png" href="museum.png" sizes="16x16" />
    </Helmet>
    
    <input type="text" placeholder="Search" onChange={handleChange} className={scroll ? "search-box scrolled" : "search-box"} />
      {arts ? <div className='artbox-container'>
          {arts.map((art) => {
              return (
                <Artbox img={art.headerImage.url} alt={art.title} title={art.longTitle} art={art} key={art.id}/>
              )    
          })}
      </div> : null}
    




      



      
  </div>
  )
}

export default MainEn