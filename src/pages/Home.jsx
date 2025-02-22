import React from 'react'
import AllQuiz from '../components/AllQuiz'
import QuizContainer from '../components/QuizContainer'
import DisplayQuiz from '../components/DisplayQuiz'

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-sky-400 to-sky-600'>
        <div className='w-full min-h-scree pt-20 '>
            <div className='flex flex-col items-center justify-center w-full max-w-lg mx-auto space-y-8'>
              <div>
                <h1 className='text-3xl font-bold '>Welcome to quiz platform!</h1>
              </div>
              <div>
                <DisplayQuiz />
              </div>
            </div>
            {/* <QuizContainer /> */}
        </div>
    </div>
  )
}

export default Home