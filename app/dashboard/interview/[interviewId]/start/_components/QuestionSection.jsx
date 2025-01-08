import { Lightbulb, Volume2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const QuestionSection = ({ mockInterviewQuestion, activeQuestionIndex, followUpQuestion }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(activeQuestionIndex || 0);

  useEffect(() => {
    // Ensure `mockInterviewQuestion` is an array and initialize questions
    const initialQuestions = Array.isArray(mockInterviewQuestion)
      ? [...mockInterviewQuestion]
      : [mockInterviewQuestion];

    // Add follow-up question if it's valid and not already included
    if (followUpQuestion && !initialQuestions.some(q => q.Question === followUpQuestion)) {
      initialQuestions.push({
        Question: followUpQuestion,
        Answer: "", // Add empty Answer field for consistency
      });
    }

    // Update state with the updated questions array
    setQuestions(initialQuestions);

    // Automatically move to the next question
    setCurrentQuestionIndex(initialQuestions.length - 1);
  }, [mockInterviewQuestion, followUpQuestion]);

  const textToSpeech = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  };

  return (
    <div className="flex flex-col p-5 border rounded-lg my-1 bg-secondary">
      {/* Question Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {/* {questions.map((question, index) => (
          <h2
            key={index}
            className={`p-2 rounded-full text-center text-xs md:text-sm cursor-pointer ${
              currentQuestionIndex === index
                ? "bg-[#e62d3c] text-white"
                : "bg-secondary"
            }`}
            onClick={() => setCurrentQuestionIndex(index)} // Allow navigation between questions
          >
            Question #{index + 1}
          </h2>
        ))} */}
        <h2 className="p-2 rounded-full text-center text-xs md:text-sm cursor-pointer bg-[#e62d3c] text-white">Question</h2>
      </div>

      {/* Active Question Content */}
      {questions[currentQuestionIndex] && (
        <>
          <h2 className="my-5 text-md md:text-lg font-bold">
            {questions[currentQuestionIndex].Question}
          </h2>
          <Volume2
            className="cursor-pointer mb-4"
            onClick={() =>
              textToSpeech(questions[currentQuestionIndex].Question)
            }
          />
        </>
      )}
    </div>
  );
};

export default QuestionSection;
