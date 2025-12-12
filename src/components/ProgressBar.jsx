import React from "react";

const ProgressBar = ({ currentStep, totalSteps }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      {Array.from({ length: totalSteps }).map((_, idx) => (
        <div
          key={idx}
          style={{
            width: "140px",
            height: "6px",
            borderRadius: "10px",
            backgroundColor: "#15313D", // ← SOLID DARK BLUE FOR ALL
            opacity: idx === currentStep ? 1 : 0.3, // active = dark, inactive = faded
            transition: "opacity 0.3s",
          }}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
