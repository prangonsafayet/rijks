import React from 'react';
import { useNavigate } from "react-router-dom";
import './Artbox.css';

const Artbox = (props) => {
    const navigate = useNavigate();

    const showArtDetails = (art) => {
        navigate('/artdetails', {state: art});
    }
  return (
    <div className='artboxes' onClick={() => showArtDetails(props.art)}>
        <img src={props.img} alt={props.alt}/>
        <p>{props.title}</p>       
    </div>
  )
}

export default Artbox