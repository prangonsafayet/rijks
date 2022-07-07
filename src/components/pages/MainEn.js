import React, {useState, useEffect} from 'react';
import axios from 'axios';
import _ from 'lodash';
import './Main.css';
import {Helmet} from "react-helmet";
import Artbox from '../Artbox';
const MainEn = () => {
    const [arts, setArts] = useState(0);
    const [preArts, setPreArts] = useState(null);
    

    const handleChange = (e) => {
      e.preventDefault();
        var results=_.filter(preArts,function(item){
          return item.longTitle.toLowerCase().indexOf(e.target.value)>-1;
        });
        setArts(results);
    }

  

    useEffect(() => {
      const fetchArts = async () => {
        await axios.get('https://www.rijksmuseum.nl/api/en/collection?key=rirqQnx4')
        .then(res => {
          const response = res.data;
          setPreArts(response.artObjects);
          setArts(response.artObjects);
        })
      }
    
      fetchArts();
    }, [])
    

    
  return (
    <div className='main-page' style={{ backgroundImage: "url('./Home.jpeg')" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="icon" type="image/png" href="museum.png" sizes="16x16" />
      </Helmet>
      <div className='container'>
      <h1 className='page-header'>List of arts</h1>
      <input type="text" placeholder="Search" onChange={handleChange} className="search-box" />
        {/* <Find collection={myArr} predicate={myArr.id} fromIndex={0} /> */}
        {arts ? <div className='artbox-container'>
            {arts.map((art) => {
                return (
                  <Artbox img={art.headerImage.url} alt={art.title} title={art.longTitle} art={art} key={art.id}/>
                )
              })}
        </div> : null}
      </div>




        



        
    </div>
  )
}

export default MainEn