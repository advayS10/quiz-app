import React from 'react'
import { Link } from 'react-router-dom'
import { MessageCircleQuestion } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='w-full bg-sky-900 fixed top-0 z-10'>
        <div className='mx-16 h-16'>
            <div className='flex items-center justify-start h-full'>
                {/* Logo */}
                <div className='flex items-center '>
                    <Link to='/' className='flex items-center justify-between'>
                        <div className='size-9 bg-sky-700 flex items-center justify-between w-full px-2 rounded-lg text-white hover:opacity-80 transition-all'>
                            <MessageCircleQuestion />
                        </div>
                        <h1 className='text-xl text-white pl-2 font-bold'>Quizz</h1>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar