import React from "react";

const OptionButton = ({ text, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: "896px",
        height: "78px",
        borderRadius: "10px",
        border: "1px solid #96E5FF80",
        background: isSelected
          ? "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)"
          : "linear-gradient(89.72deg, rgba(198,233,247,0.1) 0.09%, rgba(229,248,255,0.1) 99.91%)",
        cursor: "pointer",
        transition: "0.2s",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px",
        whiteSpace: "nowrap",       // 🔥 THE IMPORTANT FIX
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        if (!isSelected)
          e.target.style.background =
            "linear-gradient(89.72deg, #E1F6FF 0.09%, #F3FCFF 99.91%)";
      }}
      onMouseLeave={(e) => {
        if (!isSelected)
          e.target.style.background =
            "linear-gradient(89.72deg, rgba(198,233,247,0.1) 0.09%, rgba(229,248,255,0.1) 99.91%)";
      }}
    >
      <span
        style={{
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: "22px",
          color: "#15313D",
          letterSpacing: "-0.31px",
          lineHeight: "22px",
          textAlign: "center",
        }}
      >
        {text}
      </span>
    </button>
  );
};

export default OptionButton;
