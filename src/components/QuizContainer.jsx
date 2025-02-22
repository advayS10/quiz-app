import React, { useState } from 'react'
import QuestionContainer from './QuestionContainer'
import { ArrowLeft, ArrowRight, TimerIcon } from 'lucide-react'
import { data } from '../lib/data'
import ProgressReport from './ProgressReport'
import Timer from './Timer'
import { useNavigate } from 'react-router-dom'

const QuizContainer = () => {

    const [increment, setIncrement] = useState(0)
    const [correct, setCorrect] = useState(0)
    const [wrong, setWrong] = useState(0)
    const navigate = useNavigate()
    const handleTimeout = () => {
        setIncrement(data.length)
    }

  return (
    <>
        <div className='min-h-screen '>
            <div className='flex flex-col items-center justify-center p-6 pt-12 sm:p-16 '>
                <div className='w-full space-y-8 '>

                    <div className='text-center'>
                        <div className='flex flex-col items-center gap-2 group'>
                            <div className='bg-red-300 m-6 rounded-lg text-xl'>
                                <div className='p-2 flex items-center justify-between'>
                                    <TimerIcon /> <Timer initialMinute={30} stop={increment === data.length} handleTimeout={handleTimeout}/>
                                </div>
                            </div>

                            <div className='w-full text-xl rounded-xl bg-sky-100'>
                                {
                                    increment < data.length ? (
                                        <QuestionContainer 
                                        data={data[increment]}
                                        correct={correct}
                                        setCorrect={setCorrect}
                                        wrong={wrong}
                                        setWrong={setWrong}
                                        handleTimeout={handleTimeout}
                                        />
                                    ) : (
                                        <div className='w-full max-w-md flex items-center justify-center mx-auto '>
                                            <ProgressReport correct={correct} wrong={wrong} total={data.length}/>
                                        </div>
                                    )
                                }

                                

                            </div>

                            <div className='m-2'>
                                {
                                    increment < data.length ? (
                                        <div className='flex items-center gap-2'>
                                            <div className={`${increment == 0 ? 'hidden' : ''} size-14 bg-sky-700 flex items-center justify-center text-white rounded-full`}>
                                                <button className='p-4 font-bold' onClick={() => setIncrement(increment-1)}>
                                                    <ArrowLeft />
                                                </button>
                                            </div>
                                            <div className='size-14 bg-sky-700 flex items-center justify-center text-white rounded-full'>
                                                <button className='p-4 font-bold' onClick={() => setIncrement(increment+1)}>
                                                    <ArrowRight />
                                                </button>
                                            </div>
                                        </div>
                    
                                    ) : (
                                        <div className='size-14 bg-sky-700 flex items-center justify-center text-white rounded-full'>
                                            <button className='p-4 font-bold'
                                            onClick={() => navigate('/')}
                                            >
                                                Exit
                                            </button>
                                        </div>
                                    )
                                }
                                
                            </div>

                        </div>

                    </div>



                </div>
            </div>

        </div>
    </>
  )
}

export default QuizContainer