import React from 'react'

// 1. Accept 'title' and 'onClick' as props
const ProjectCard = ({ title, onClick }) => {
    return (
        <div
            onClick={onClick}
            className='bg-[#141414] w-[350px] h-[150px] px-20 py-13 rounded-lg flex flex-col relative justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300 hover:border hover:border-gray-700 hover:z-10'
        >
            <div className='text-[#FFFFFF] text-3xl mymedium'>{title}</div>

            <div className='bg-[#E50914] text-sm text-white rounded-tl-sm rounded-tr-sm myregular absolute px-3 py-1 bottom-0'>
                Recently added
            </div>
        </div>
    )
}

export default ProjectCard