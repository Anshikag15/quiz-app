import React from "react";
import OptionButton from "./OptionButton";
import NavigationButtons from "./NavigationButtons";

const QuestionCard = ({
  question,
  options,
  selectedAnswer,
  onSelect,
  onNext,
  onBack,
  showBack,
  isLastStep,
}) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        // Only a small upward shift now
        transform: "translateY(-40px)",
      }}
    >
      {/* QUESTION BOX */}
      <div
        style={{
          width: "896px",
          height: "78px",
          borderRadius: "10px",
          border: "1px solid #96E5FF",
          background: "linear-gradient(89.72deg, #C6E9F7 0.09%, #E5F8FF 99.91%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Inter",
          fontWeight: 600,
          fontSize: "22px",
          color: "#15313D",
          marginBottom: "18px",
        }}
      >
        {question}
      </div>

      {/* OPTIONS */}
      <div
        style={{
          width: "896px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          marginBottom: "40px",
        }}
      >
        {options.map((opt, idx) => (
          <OptionButton
            key={idx}
            text={opt}
            isSelected={selectedAnswer === idx}
            onClick={() => onSelect(idx)}
          />
        ))}
      </div>

      {/* ARROWS (BOTTOM RIGHT) */}
      <div
        style={{
          width: "896px",
          display: "flex",
          justifyContent: "flex-end",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <NavigationButtons
        onBack={onBack}
        onNext={onNext}
        showBack={showBack}
        isFirstStep={!showBack}
/>

      </div>
    </div>
  );
};

export default QuestionCard;
