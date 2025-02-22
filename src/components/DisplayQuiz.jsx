import React from 'react'
import { useNavigate } from 'react-router-dom'

const DisplayQuiz = ({quizName, time}) => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='w-full'>
        <div className='flex flex-col items-center rounded-2xl border-4 p-6 space-y-6 border-sky-500 h-full'>
          <div className='px-8 text-center'>
            <h1 className='font-bold text-3xl'>{quizName ? quizName : "Quiz"}</h1>
            <p className='text-md'>Time: {time ? time: "30"} min</p>
          </div>
          <div className='w-full flex justify-center items-center'>
            <button className='bg-green-600 text-white py-2 px-5 rounded-lg hover:opacity-80 transition-all'
            onClick = {() => navigate('/quiz')}
            >Start</button>
          </div>
          <div>
            <div>
              <h3 className='font-bold'>Instructions:</h3>
            </div>
            <div>
              <p>1. For multiple-choice questions, select the one best answer (A, B, C, or D).</p>
              <p>2. For integer-type questions, write your numerical answer clearly.</p>
              <p>3. No calculators unless specified.</p>
              <p>4. You have 30 minutes to complete this quiz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayQuiz