import React from "react";
import { useState, useContext } from "react";


function SpecialAmountsComponent({amount}) {
    
  
  const specialPictures = new Map()
    .set(666, "https://static.wikia.nocookie.net/cartoon-characters8569/images/5/55/HIM.jpg") 
    .set(69, "https://i.imgur.com/1kZWrPi.jpeg") 
    .set(420, "https://i.imgur.com/uvfuB7Q.png")
    .set(42, "https://i.imgur.com/AFHc6h8.png")
    .set(58008, "https://st3.depositphotos.com/1877361/16677/v/450/depositphotos_166772476-stock-illustration-abstract-drawing-of-female-breasts.jpg")
    .set(789, "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/789-seven-ate-nine-funny-sarcasm-gift-idea-haselshirt.jpg")
    .set(300, "https://i.imgur.com/h4eXiad.jpeg")
    .set(1984, "https://i.imgur.com/yNIcaB6.jpeg")
    .set(1337, "https://i.pinimg.com/564x/82/23/e6/8223e6f2684080d0427d1688d02875a8.jpg")
    .set(360, "https://i.imgur.com/touHkKI.png")
    .set(9001, "https://i.imgur.com/nly1D9y.jpeg")
    

    const specialAmounts = Array.from(specialPictures.keys());

  const loadedPictures = []

  specialAmounts.forEach((number) => {
    if((amount+'').includes(number)){
      loadedPictures.push(<img 
          className="animatePicture"          
          style={{
              height: 100,
              width: 100,
              display: "block",
              border: "1px solid white",              
              margin: "auto",
              padding:2,
              marginBottom:5
            }}
            src={specialPictures.get(number)}
            alt="ProfilePic"
          />)
    }
    
  })

  return (
    <div  className='container' style={{display:"flex", flexDirection:"row", animation: "fadeInAnimation 1s linear"}}>
      {loadedPictures}
    </div>
  )
}

export default SpecialAmountsComponent;
