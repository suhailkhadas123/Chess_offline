import "./Tile.css";
import React from 'react'


function Tile({ number , image}) {

     if (number % 2 !== 0 ) {
                return <span id="blockname " className="tiles dark_tile"><img src={image}  /></span>
            } else {
                return<span id="blockname " className="tiles light_tile"> <img src={image}  /></span>
            }
  
}

export default Tile