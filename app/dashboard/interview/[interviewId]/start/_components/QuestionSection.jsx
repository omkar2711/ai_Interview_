import { Lightbulb, Volume2 } from "lucide-react";
import React from "react";

const QuestionSection = ({ mockInterviewQuestion, activeQuestionIndex }) => {
  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  };

  // Ensure `mockInterviewQuestion` is an array
  const questions = Array.isArray(mockInterviewQuestion)
    ? mockInterviewQuestion
    : [mockInterviewQuestion]; 

  return (
    <div className="flex flex-col  p-5 border rounded-lg my-1 bg-secondary">
      {/* Question Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {questions.map((question, index) => (
          <h2
            key={index}
            className={`p-2 rounded-full text-center text-xs md:text-sm cursor-pointer ${
              activeQuestionIndex === index
                ? "bg-[#e62d3c] text-white"
                : "bg-secondary"
            }`}
          >
            Question #{index + 1}
          </h2>
        ))}
      </div>

      {/* Active Question Content */}
      {questions[activeQuestionIndex] && (
        <>
          <h2 className="my-5 text-md md:text-lg font-bold">
            {questions[activeQuestionIndex].Question}
          </h2>
          {/* <Volume2
            className="cursor-pointer mb-4"
            onClick={() =>
              textToSpeech(questions[activeQuestionIndex].Question)
            }
          />
          <div className="border rounded-lg p-5 bg-blue-100">
            <h2 className="flex gap-2 items-center text-blue-800">
              <Lightbulb />
              <strong>Note:</strong>
            </h2>
            <h2 className="text-sm text-blue-600 my-2">
              {process.env.NEXT_PUBLIC_QUESTION_NOTE || "Think critically and provide structured answers."}
            </h2>
          </div> */}

          {/* Answer Section */}
          {/* <div className="border rounded-lg p-5 mt-4 bg-green-50">
            <h2 className="font-bold text-lg text-green-800">Answer:</h2>
            <p className="text-sm text-green-700 mt-2">
              {questions[activeQuestionIndex].Answer}
            </p>
          </div> */}
        </>
      )}
    </div>
  );
};

export default QuestionSection;
