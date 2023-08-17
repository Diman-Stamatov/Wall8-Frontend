import React, { useState, useEffect } from 'react';
const AnimatedText = () => {
    const sentences = [
      "At Wall-8, we redefine the way you manage your finances and empower you to take control of your money like never before.",
      "Our cutting-edge digital platform offers a seamless and innovative experience that transcends traditional banking.",
      "Say goodbye to the constraints of the past and step into a future where your financial well-being is at the forefront of every decision we make."
    ];
  
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <p className="text-lg md:text-xl font-light mb-4">
        {sentences[currentSentenceIndex]}
      </p>
    );
  };
  
  export default AnimatedText;