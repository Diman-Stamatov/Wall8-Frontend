import React from "react";
import { useState, useContext } from "react";

function SpecialAmountsComponent({amount}) {
    
  const specialAmounts = [666, 69, 420, 911, 80085];
  const specialPictures = {
    666:"https://static.wikia.nocookie.net/cartoon-characters8569/images/5/55/HIM.jpg", 
    69:"https://i.imgur.com/1kZWrPi.jpeg", 
    420:"https://i.imgur.com/uvfuB7Q.png",
    911:"https://i.imgur.com/Pyx6Fr9.jpeg",
    80085:"https://st3.depositphotos.com/1877361/16677/v/450/depositphotos_166772476-stock-illustration-abstract-drawing-of-female-breasts.jpg"
    }


  const names = []

  specialAmounts.forEach((number) => {
    if((amount+'').includes(number)){
        names.push(<img
            style={{
              height: 100,
              width: 100,
              display: "block",
              border: "1px solid white",
              margin: "auto",
              padding:2,
              marginBottom:5
            }}
            src={specialPictures[number]}
            alt="ProfilePic"
          />)
    }
    
  })

  return (
    <div className='container'>
      {names}
    </div>
  )
}

export default SpecialAmountsComponent;
