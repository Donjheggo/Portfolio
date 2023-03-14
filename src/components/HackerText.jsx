import React, { useRef } from 'react';

const HackerText = ({ text }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const intervalRef = useRef(null);

  const handleMouseOver = (event) => {
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return text[index];
          }

          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");

      if(iteration >= text.length){ 
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  }

  return (
    <h1 className="mt-2 hacker" onMouseOver={handleMouseOver} data-value={text}>
      {text}
    </h1>
  );
}

export default HackerText;
