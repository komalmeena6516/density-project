import React from 'react';
import phone from "../../images/herophone-images/Groupphone.svg";
import "./hero.css";

const HeroPhone = () => {
  return (
    <div className='container' >
        <div className="image-grp">
            <img className='image' src={phone} alt="" />
        </div>
    </div>
  )
}

export default HeroPhone