import React, { useEffect, useState } from "react";

function ResultsScreen({ score, onReset }) {
  const [displayScore, setDisplayScore] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  // Rolling counter animation
  useEffect(() => {
    let start = 0;
    const end = score;
    if (start === end) return;

    const duration = 1200;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setDisplayScore(start);

      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [score]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "#F4FDFF",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

        // 🔥 Exit animation like Figma Smart Animate
        opacity: isExiting ? 0 : 1,
        transform: isExiting ? "translateY(20px)" : "translateY(0px)",
        transition: "opacity 1s ease-out, transform 1s ease-out",
        transitionDelay: "100ms",
      }}
    >
      {/* Keep Learning */}
      <div
        style={{
          background: "#FFFFFF",
          padding: "10px 31px",
          borderRadius: "8px",
          fontSize: "14px",
          border: "1px solid #EEE",
          marginBottom: "30px",
          fontFamily: "Inter",
        }}
      >
        Keep Learning!
      </div>

      {/* “Your Final Score is” */}
      <div
        style={{
          fontFamily: "DM Serif Display",
          fontSize: "60px",
          fontStyle: "italic",
          letterSpacing: "-4px",
          background: "linear-gradient(90deg, #15313D 0%, #3CABDA 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "20px",
        }}
      >
        Your Final Score is
      </div>

      {/* Score and % */}
      <div style={{ display: "flex", alignItems: "top" }}>
        <div
          style={{
            fontFamily: "DM Serif Display",
            fontSize: "120px",
            fontStyle: "italic",
            background: "linear-gradient(90deg, #15313D 0%, #3CABDA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-4px",
            lineHeight: "120px",
          }}
        >
          {displayScore}
        </div>

        <div
          style={{
            fontFamily: "DM Serif Display",
            fontSize: "60px",
            fontStyle: "italic",
            marginLeft: "10px",
            background: "linear-gradient(90deg, #15313D 0%, #3CABDA 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginTop: "35px",
            letterSpacing: "-4px",
          }}
        >
          %
        </div>
      </div>

      {/* Start Again */}
      <button
        onClick={() => {
          setIsExiting(true); // 🔥 trigger fade + slide

          setTimeout(() => {
            onReset(); // go back to Q1 after animation
          }, 1100); // 100ms delay + 1000ms smart animate
        }}
        style={{
          marginTop: "60px",
          width: "200px",
          height: "50px",
          borderRadius: "10px",
          background: "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)",
          border: "1px solid #96E5FF0D",
          fontFamily: "Inter",
          fontWeight: "600",
          fontSize: "22px",
          color: "#15313D",
        }}
      >
        Start Again
      </button>
    </div>
  );
}

export default ResultsScreen;
