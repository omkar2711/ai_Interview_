"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Feedback = ({ params }) => {
  const router = useRouter();
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    GetFeedback();
  }, [params.interviewId]);

  const GetFeedback = async () => {
    try {
      const result = await db
        .select()
        .from(UserAnswer)
        .where(eq(UserAnswer.mockIdRef, params.interviewId))
        .orderBy(UserAnswer.id);

      console.log(result);
      setFeedbackList(result);
    } catch (error) {
      console.error("Failed to fetch feedback:", error);
    }
  };

  const overallRating = useMemo(() => {
    if (!feedbackList?.length) return 0;
    const totalRating = feedbackList.reduce(
      (sum, item) => sum + Number(item.rating || 0),
      0
    );
    return (totalRating / feedbackList.length).toFixed(1);
  }, [feedbackList]);

  return (
    <div className="p-10">
      {feedbackList?.length === 0 ? (
        <h2 className="font-bold text-xl text-gray-500 my-5">
          No Interview Feedback Record Found
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-green-500">Congratulations</h2>
          <h2 className="font-bold text-2xl">Here is your interview feedback</h2>
          <h2 className="text-primary text-lg my-3">
            Your overall interview rating{" "}
            <strong
              className={`${
                overallRating >= 5 ? "text-green-500" : "text-red-600"
              }`}
            >
              {overallRating}
              <span className="text-black">/10</span>
            </strong>
          </h2>
          <h2 className="text-sm text-gray-500">
            Find below interview questions with correct answers, your answers, and
            feedback for improvement:
          </h2>
          {feedbackList.map((item) => (
            <Collapsible key={item.id} className="mt-7">
              <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 text-left flex justify-between gap-7 w-full">
                {item.question} <ChevronDown className="h-5 w-5" />{" "}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col gap-2">
                  <h2 className="text-red-500 p-2 border rounded-lg">
                    <strong>Rating: </strong>
                    {item.rating || "N/A"}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
                    <strong>Your Answer: </strong>
                    {item.userAns || "N/A"}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
                    <strong>Correct Answer: </strong>
                    {item.correctAns || "N/A"}
                  </h2>
                  <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-primary-900">
                    <strong>Feedback: </strong>
                    {item.feedback || "No feedback available"}
                  </h2>
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </>
      )}
      <Button onClick={() => router.replace("/dashboard")}>Go Home</Button>
    </div>
  );
};

export default Feedback;
