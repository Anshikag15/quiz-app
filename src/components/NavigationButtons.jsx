import React from "react";

const NavigationButtons = ({ onBack, onNext, showBack, isFirstStep }) => {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      
      {/* PREV BUTTON */}
      <button
        onClick={!isFirstStep ? onBack : null}
        disabled={isFirstStep}
        style={{
          width: "53px",
          height: "50px",
          borderRadius: "10px",
          border: "1px solid #96E5FF0D",
          background: isFirstStep
            ? "linear-gradient(89.72deg, #F7FCFF 0.09%, #EEF8FF 99.91%)" // light Figma color
            : "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)",
          cursor: isFirstStep ? "default" : "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: isFirstStep ? 0.8 : 1,
        }}
      >
        <span
          style={{
            fontSize: "22px",
            color: isFirstStep ? "#A4B3BB" : "#15313D", // grey arrow on first page
          }}
        >
          ←
        </span>
      </button>

      {/* NEXT BUTTON */}
      <button
        onClick={onNext}
        style={{
          width: "53px",
          height: "50px",
          borderRadius: "10px",
          border: "1px solid #96E5FF0D",
          background:
            "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)", // blue Figma style
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "22px", color: "#15313D" }}>→</span>
      </button>
    </div>
  );
};

export default NavigationButtons;
