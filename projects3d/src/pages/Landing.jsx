import React from 'react'
import Cards from '../components/Cards'
import { useNavigate } from 'react-router-dom'
const Landing = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='bg-[#141414] h-screen w-screen text-white flex flex-col items-center justify-center gap-10 myregular'>
                <h1 className='text-5xl'>Who's Watching?</h1>
                <div className='flex items-center justify-center text-white gap-10'>
                    <Cards onClick={() => navigate('/design')}
                        image="red"
                        title="Design"
                    />
                    <Cards onClick={() => navigate('/development')}
                        image="yellow"
                        title="Development"
                    />

                </div>
                {/* <div>
                    <button className='text-lg text-gray-500 tracking-wider border border-gray-500 px-8 py-1 mt-8 hovered-btn' >Welcome</button>
                </div> */}
            </div>
        </>
    )
}

export default Landing