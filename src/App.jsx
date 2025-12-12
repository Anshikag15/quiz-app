import React, { useState } from "react";
import paw from "./assets/paw.gif";

import ProgressBar from "./components/ProgressBar";
import QuestionCard from "./components/QuestionCard";
import ResultsScreen from "./components/ResultsScreen";

const questions = [
  {
    question: "1. What sound does a cat make?",
    options: ["Bhau-Bhau", "Meow-Meow", "Oink-Oink"],
    correctAnswer: 1,
  },
  {
    question: "2. What would you probably find in your fridge?",
    options: ["Shoes", "Ice Cream", "Books"],
    correctAnswer: 1,
  },
  {
    question: "3. What color are bananas?",
    options: ["Blue", "Yellow", "Red"],
    correctAnswer: 1,
  },
  {
    question: "4. How many stars are in the sky?",
    options: ["Two", "Infinite", "One Hundred"],
    correctAnswer: 1,
  },
];

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (idx) => {
    setSelectedAnswers((prev) => ({ ...prev, [currentStep]: idx }));
  };

  const handleNext = () => {
    if (selectedAnswers[currentStep] === undefined) return;

    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      calculateScore();
      setIsFinished(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const calculateScore = () => {
    let correctCount = 0;

    questions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.correctAnswer) {
        correctCount++;
      }
    });

    const percentage = Math.round((correctCount / questions.length) * 100);
    setScore(percentage);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setIsFinished(false);
    setScore(0);
  };

  if (isFinished) {
    return <ResultsScreen score={score} onReset={handleReset} />;
  }

  return (
    <div
      className="min-h-screen min-w-[1920px] h-[1080px] font-sans antialiased text-slate-900 relative overflow-hidden mx-auto"
      style={{
        background: "linear-gradient(90deg, #BECFEE, #71C6E2, #D9F4FA, #BECFEE)",
      }}
    >
      {/* MAIN CARD */}
      <div
        className="bg-white rounded-[42px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative"
        style={{
          width: "1542px",
          height: "856px",
          marginTop: "112px",
          marginLeft: "189px",
        }}
      >

        {/* WRAPPED TITLE + SUBTITLE BLOCK (moves together) */}
        <div style={{ marginTop: "60px" }}>  
          {/* TITLE */}
          <h1
            className="font-serif italic font-normal text-center"
            style={{
              fontSize: "90px",
              background: "linear-gradient(90deg, #15313D 0%, #3CABDA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0, 
            }}
          >
            Test Your Knowledge
          </h1>

          {/* SUBTITLE */}
          <div
            className="bg-white text-center rounded-lg"
            style={{
              width: "422px",
              height: "45px",
              margin: "20px auto 0",
              padding: "10px 31px",
              fontSize: "18px",
              border: "1px solid #eee",
            }}
          >
            Answer all questions to see your results
          </div>
        </div>

        {/* PROGRESSBAR */}
        <div style={{ marginTop: "25px" }}>
          <ProgressBar currentStep={currentStep} totalSteps={questions.length} />
        </div>

        {/* SPACER BEFORE QUESTIONS */}
        <div style={{ height: "80px" }}></div>

        {/* QUESTION + OPTIONS */}
        <QuestionCard
          question={questions[currentStep].question}
          options={questions[currentStep].options}
          selectedAnswer={selectedAnswers[currentStep]}
          onSelect={handleSelect}
          onNext={handleNext}
          onBack={handleBack}
          showBack={currentStep > 0}
          isLastStep={currentStep === questions.length - 1}
        />

        {/* PAW + BEST OF LUCK (ONLY ON FIRST SCREEN) */}
        {currentStep === 0 && (
          <>
            {/* Best of Luck bubble */}
            <div
              style={{
                position: "absolute",
                top: "600px",
                left: "-60px",
                padding: "12px 24px",
                fontFamily: "Caveat Brush, sans-serif",
                fontSize: "32.73px",
                letterSpacing: "-0.82px",
                transform: "rotate(2.56deg)",
                color: "#15313D",
                background: "white",
                borderRadius: "12px",
                border: "1px solid #77C7E3",
                boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                zIndex: 20,
              }}
            >
              Best of Luck !
            </div>

            {/* Paw touching border */}
            <img
              src={paw}
              alt="paw"
              style={{
                position: "absolute",
                top: "680px",
                left: "90px",
                width: "173px",
                height: "173px",
                pointerEvents: "none",
                zIndex: 10,
              }}
            />
          </>
        )}

      </div>
    </div>
  );
}

export default App;
