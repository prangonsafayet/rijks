import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {Find} from 'react-lodash';
import _ from 'lodash';

const Main = () => {
    const [arts, setArts] = useState(0);
    const navigate = useNavigate();

    const showArtDetails = (art) => {
        navigate('/artdetails', {state: art});
    }

    var users = [
        { 'user': 'barney',  'age': 36, 'active': true },
        { 'user': 'fred',    'age': 40, 'active': false },
        { 'user': 'pebbles', 'age': 1,  'active': true }
      ];

     const hudai =  _.filter(arts.artObjects, {  'longTitle': 'Bureau, Abraham Roentgen, ca. 1758 - ca. 1760' });
    console.log(hudai);
  

    useEffect(() => {
      const fetchArts = async () => {
        await axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=rirqQnx4`)
        .then(res => {
          const response = res.data;
          console.log(response);
          setArts(response);
        })
      }
    
      fetchArts();
    }, [])
    

    
  return (
    <div>
        <h1>List of arts</h1>
        {/* <Find collection={myArr} predicate={myArr.id} fromIndex={0} /> */}
        {arts ? <ul>
            {arts.artObjects.map((art) => {
                return <li onClick={() => showArtDetails(art)} key={art.id}>{art.title}</li>
                
                
            })}
        </ul> : null}
        
    </div>
  )
}

export default Main