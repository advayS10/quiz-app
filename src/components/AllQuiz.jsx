import React from 'react'
import DisplayQuiz from './DisplayQuiz'

const AllQuiz = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className=''>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
          <DisplayQuiz />  
        </div>
      </div>
    </div>
  )
}

export default AllQuiz