"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useState } from "react";
import { useEffect } from "react";
import QuestionSection from "./_components/QuestionSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const StartInterview = ({ params }) => {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [showEndInterviewButton, setShowEndinterviewButton] = useState(false);
  useEffect(() => {
    GetInterviewDetails();
  }, []);

  const GetInterviewDetails = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId));

    const jsonMockResp = JSON.parse(result[0].jsonMockResp);
    console.log(jsonMockResp);
    setMockInterviewQuestion(jsonMockResp);
    console.log(jsonMockResp, "json")
    setInterviewData(result[0]);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-10">
        {/* Questin Section */}
        <QuestionSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
        />

        {/* Video/audio Recording */}
        <RecordAnswerSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
          setShowEndinterviewButton={setShowEndinterviewButton}
        />
      </div>
      <div className="flex gap-3 my-5 md:my-0 md:justify-end md:gap-6">
        {activeQuestionIndex > 0 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
          >
            Previous Question
          </Button>
        )}
        {/* {activeQuestionIndex != mockInterviewQuestion?.length - 1 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
          >
            Next Question
          </Button>
        )} */}
        {(
          <Link 
          href={"/dashboard/interview/" + interviewData?.mockId + "/feedback"}
          className="flex-1"
        >
          <Button
            className={`flex-1 border border-[#e62d3c] bg-white text-[#e62d3c] px-4 py-2 rounded-lg transition-colors 
              ${showEndInterviewButton ? "hover:bg-pink-50" : "pointer-events-none opacity-50"}
            `}
          >
            End Interview
          </Button>
        </Link>
        )}

        {/* {(
          <Link
            href={"/dashboard/interview/" + interviewData?.mockId + "/feedback"}
          >
            
            <Button className="flex-1 border border-[#e62d3c] bg-white text-[#e62d3c] px-4 py-2 rounded-lg hover:bg-pink-50 transition-colors"> End Interview</Button>
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default StartInterview;
