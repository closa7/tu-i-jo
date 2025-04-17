import React, { useEffect } from "react";
import "./FloatingHearts.css";

const FloatingHearts = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return null;
};

export default FloatingHearts;
