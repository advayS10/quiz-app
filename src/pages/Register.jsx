import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [formData, setFromData] = useState({
    name: "",
    email: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    localStorage.setItem("email", formData.email)
    localStorage.setItem("name", formData.name)
  }

  console.log(localStorage.getItem("email"))
  console.log(localStorage.getItem("name"))

  const navigate = useNavigate()

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-400 to-sky-600">
    <div className="w-full max-w-md p-8 bg-white rounded-lg ">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">

            <div>
                <label className="block text-gray-700 font-semibold mb-1">Name:</label>
                <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFromData({ ...formData, name: e.target.value})}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    placeholder="Enter your name"
                    required
                />
            </div>

            <div>
                <label className="block text-gray-700 font-semibold mb-1">Email:</label>
                <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFromData({ ...formData, email: e.target.value})}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    placeholder="Enter your email"
                    required
                />
            </div>

            <button 
                type="submit" 
                className="w-full bg-sky-500 text-white font-semibold py-3 rounded-lg hover:bg-sky-600 transition duration-300"
                onClick={() => navigate('/')}
            >
                Submit
            </button>
        </form>
    </div>
</div>
  )
}

export default Register