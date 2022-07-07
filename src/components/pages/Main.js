import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import _ from 'lodash';
import styles from './Main.css';
const Main = () => {
    const [arts, setArts] = useState(0);
    const [preArts, setPreArts] = useState(null);
    const navigate = useNavigate();

    const showArtDetails = (art) => {
        navigate('/artdetails', {state: art});
    }

    const handleChange = (e) => {
      e.preventDefault();
        var results=_.filter(preArts,function(item){
          return item.longTitle.toLowerCase().indexOf(e.target.value)>-1;
        });
        setArts(results);
    }

    
  

    useEffect(() => {
      const fetchArts = async () => {
        await axios.get('https://www.rijksmuseum.nl/api/nl/collection?key=rirqQnx4')
        .then(res => {
          const response = res.data;
          //console.log(response);
          setPreArts(response.artObjects);
          setArts(response.artObjects);
        })
      }
    
      fetchArts();
    }, [])
    

    
  return (
    <div className='main-page' style={{ backgroundImage: "url('./Home.jpeg')" }}>
      <div className='container'>
      <h1 className='page-header'>List of arts</h1>
      <input type="text" placeholder="Search" onChange={handleChange} />
        {/* <Find collection={myArr} predicate={myArr.id} fromIndex={0} /> */}
        {arts ? <div className='artbox-container'>
            {arts.map((art) => {
                return (
                  <div className='artboxes' onClick={() => showArtDetails(art)} key={art.id}>
                    <img src={art.headerImage.url} alt={art.title}/>
                    <p>{art.longTitle}</p>
                    
                  </div>


                )
                
                
                
            })}
        </div> : null}
      </div>




        



        
    </div>
  )
}

export default Main