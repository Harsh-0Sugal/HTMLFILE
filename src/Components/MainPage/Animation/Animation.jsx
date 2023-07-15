import React, { useEffect, useState } from "react";
import "./Animation.css";

function Animation() {
  const VALUES = [
    "Hungry?",
    "Movie marathon?",
    "Unexpected guests?",
    "Late Night at Office?",
    "Cooking gone wrong?",
    "Game Night?",
  ];
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("Hungry");


  // Changes value as index changes.
  useEffect(() => {
    const interval = setInterval(() => {
      setValue(VALUES[index]);
    }, 3500);

    return () => clearInterval(interval);
  }, [index]);

  // Changes index as value changes and adding removing animation class
  useEffect(() => {
    setIndex((prevIndex) => {
      return ((prevIndex + 1) % VALUES.length);
    });

    const interval = setInterval(() => {
      document.querySelector(".first_left_animation-heading").classList.add("animate-bottom");
    }, 10);

    document.querySelector(".first_left_animation-heading").classList.remove("animate-bottom");
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div className="first_left_animation">
      <h1 className="first_left_animation-heading animate-bottom">{value}</h1>
      <h2 style={{ fontSize: "24px", fontWeight: "400", color: "#80807d" }}>
        Order food from favourite restaurants near you.
      </h2>
    </div>
  );
}

export default Animation;