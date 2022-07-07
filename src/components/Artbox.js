import React from 'react';
import { useNavigate } from "react-router-dom";
import './Artbox.css';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
const Artbox = (props) => {
    const navigate = useNavigate();

    const showArtDetails = (art) => {
        navigate('/artdetails', {state: art});
    }
  return (

    <ParallaxProvider>
        <div className='artboxes' style={{ backgroundImage: `url(${props.img})` }}>
            {/* <img src={props.img} alt={props.alt}/> */}
            <div className='container'>
                <Parallax translateY={[-40, 40]} speed={1} style={{textAlign: "center"}}>
                    <h1>{props.title}</h1> 
                    <button onClick={() => showArtDetails(props.art)} className="details-button">See Details</button>
                </Parallax>
                
            </div>
            
                
        </div>
      </ParallaxProvider>
    
  )
}

export default Artbox