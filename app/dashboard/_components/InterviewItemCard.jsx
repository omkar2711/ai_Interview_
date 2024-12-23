import React from 'react'
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { Calendar, Clock, Award } from 'lucide-react';


const InterviewItemCard = ({interview}) => {

    const router = useRouter()
    const onStart = ()=>{
        router.push("/dashboard/interview/"+interview?.mockId)
    }
    const onFeedback = ()=>{
        router.push("/dashboard/interview/"+interview?.mockId+"/feedback")
    }
  return (<>

    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{interview?.jobPosition}</h3>
        
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          {/* <span>{formatDate(interview.date)}</span> */}
          {interview?.jobExperience} Years of experience
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          {/* <span>{interview.duration} minutes</span> */}
          Created At:{interview.createdAt}
        </div>
        <div className="flex items-center text-gray-600">
          <Award className="w-4 h-4 mr-2" />
          <span>1 question </span>
        </div>
      </div>

      <div className="flex space-x-2">
        <Button className="flex-1 bg-[#e62d3c] text-white px-4 py-2 rounded-lg hover:bg-[#d41e2d] transition-colors"
        onClick={onFeedback}>
          Feedback
        </Button>
        <Button className="flex-1 border border-[#e62d3c] bg-white text-[#e62d3c] px-4 py-2 rounded-lg hover:bg-pink-50 transition-colors"
        onClick={onStart}>
          Start
        </Button>
      </div>
    </div>
</>

  )
}

export default InterviewItemCard