import React, { useState, useEffect } from 'react';
import './TypingAnimation1.css';

const TypingAnimation = ({ text, speed, delay }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDelayComplete, setIsDelayComplete] = useState(false);

  useEffect(() => {
    // Start the typing animation after the delay
    const delayTimeout = setTimeout(() => {
      setIsDelayComplete(true);
    }, delay);

    // Clear the delay timeout on component unmount
    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (isDelayComplete) {
      const typingInterval = setInterval(() => {
        if (currentIndex === text.length) {
          clearInterval(typingInterval);
        } else {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        }
      }, speed);

      // Clear the typing interval on component unmount
      return () => clearInterval(typingInterval);
    }
  }, [text, speed, currentIndex, isDelayComplete]);

  return <div className="typing-animation">{displayText}</div>;
};

export default TypingAnimation;
