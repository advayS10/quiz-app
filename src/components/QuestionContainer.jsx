import { Check, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Timer from './Timer'

const QuestionContainer = ({data, correct, setCorrect, wrong, setWrong, handleTimeout}) => {
 
    const [answer, setAnswer] = useState("")
    const [userInput, setUserInput] = useState("")
    const [initialSeconds, setInitialSeconds] = useState(3)

    useEffect(() => {
        setUserInput("")
        setAnswer("")
        setInitialSeconds(3)
    }, [data])


    const submitAnswer = (selectedAnswer) => {
        
        if(selectedAnswer === data.answer){
            setAnswer("correct")
            setCorrect(prev => prev + 1)
        }
        else{
            setAnswer("wrong")
            setWrong(prev => prev + 1)
        }        
    }


  return (
    <div className='relative'>
        <div className='text-sm sm:text-lg md:text-xl lg:text-2xl'>
            <div className='flex items-center justify-between p-6 py-8 font-bold'>
                <div className='flex flex-col sm:flex-row  gap-2'>
                    <div className='flex gap-2 mr-2'>
                        <div>
                            <p>Q.{data.id}</p>
                        </div>
                        <div className='text-left'>
                            <p>{data.question}</p>
                        </div>
                    </div>
                    
                </div>
                <div>
                    {/* <div className='size-9 md:size-14 flex items-center justify-center rounded-full border-4 border-red-600'>
                        <Timer initialSeconds={initialSeconds} handleTimeout={handleTimeout}/>
                    </div> */}
                </div>
            </div>
            {
                data.options ? (
                    <div className='grid grid-cols-2 gap-4 m-4 rounded-lg font-bold text-white pt-24'>

                        {data.options.map((option, index) => (
                        <button
                            key={index}
                            className={`flex items-center p-2 md:p-4 ${
                            ["bg-red-400", "bg-blue-400", "bg-yellow-400", "bg-green-400"][index]
                            }`}
                            onClick={() => submitAnswer(option)}
                        >
                            <div className='relative w-full'>
                            <div className='absolute'>{String.fromCharCode(65 + index)}.</div>
                            <div className='text-center'>
                                <p>{option}</p>
                            </div>
                            </div>
                        </button>
                        ))}

                    </div>
                ) : (
                    <div className='w-full flex flex-col gap-4 rounded-lg p-6'>
                        <div className='flex items-center gap-2'>
                            <div>
                                <h2>Answer:</h2>
                            </div>
                            <div>
                                <input 
                                type='number'
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <div className='text-lg'>
                                <button className='bg-green-500 text-white px-4 py-2 rounded-lg mt-20' 
                                onClick={() => submitAnswer(userInput)}
                                >Submit</button>
                            </div>
                        </div>
                    </div>
                )
            }
            
        </div>

        <div className={`
            ${answer ? answer === "correct" ? "bg-green-300 text-green-900" : "bg-red-300 text-red-900" : "hidden"} 
            absolute w-full h-full rounded-xl top-2 opacity-90`}>
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='w-full max-w-md '>
                    <div className='flex flex-col items-center justify-center space-y-2'>
                        {
                            answer === "correct" ? (
                                <div className='size-14 border-4 flex items-center justify-center rounded-full border-green-600'>
                                    <Check className='text-green-800'/>
                                </div>
                            ) : (
                                <div className='size-14 border-4 flex items-center justify-center rounded-full border-red-600'>
                                    <X className='text-red-800'/>
                                </div>
                            )
                        }
                        
                        <div>
                            <h2 className='text-2xl font-bold'>{answer === "correct" ? "Correct Answer!" : "Wrong Answer!"}</h2>
                            {
                                answer === "correct" ? "" : (<p>Correct Answer is {data.answer}</p>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default QuestionContainer