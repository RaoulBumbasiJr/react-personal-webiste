import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';
import './TypingAnimation.css';

const TypingAnimation = ({ text, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex === text.length) {
        clearInterval(typingInterval);
      } else {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed, currentIndex]);

  return <div className="typing-animation">{displayText}</div>;
};

export default TypingAnimation;