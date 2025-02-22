import React from 'react'

const ProgressReport = ({correct, wrong, total}) => {

    const score = ( correct / total ) * 100


  return (
    <div className='w-full border-4 m-8 rounded-lg border-blue-300'>
        <div className='flex flex-col items-center justify-center my-8 space-y-4'>
            <div className='space-y-2'>
                <h2 className='font-bold text-3xl'>Progress Report</h2>
                <p className='text-2xl'>Score</p>
            </div>
            <div>
                <div className='size-24 bg-blue-300 rounded-full flex items-center justify-center '>
                    <p className='text-2xl font-bold'>{score}%</p>
                </div>
            </div>
            <div>
                <div className='text-sm'>
                    <p className=''>Correct: {correct} </p>
                    <p className=''>Wrong: {wrong}</p>
                    <p className=''>Not Attempted: {total - (wrong + correct)}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProgressReport