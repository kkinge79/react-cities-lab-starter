// IMPORT useState
import React, { useState} from "react";
import "./styles.css";
import imagesArr from './imageData.js'

export default function App() {

  const [bigImage, setBigImage] = useState({img: imagesArr[0].img})

  const handleClick = (imageUrl) => {
    console.log(imageUrl)
    setBigImage(imageUrl)
  }
  

const images = imagesArr.map((image, index) => {
  return (
    <img
    src={image.img}
    alt={image.city}
    className = 'bigImage'
    key = {index}
    onClick = {() => handleClick(image.img)}
    />
  )
})



  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
        {images}
        </div>
        {<img src={bigImage} id="bigimage" alt='bigImage'/>} 
      </div>
    </div>
  );
}
