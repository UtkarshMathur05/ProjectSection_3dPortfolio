import React, { useState } from 'react'
const Cards = ({ image, title, onClick }) => {
    return (
        <>
            <div onClick={onClick}
                className="cursor-pointer flex flex-col items-center gap-2">
                <div className='group hover:scale-105 transition-all duration-300 cursor-pointer' onClick={onClick}>
                    <img src={`/images/${image}.png`} alt={title} width={150} className='rounded-lg group-hover:border-3 group-hover:border-white' />
                    <div className='text-xl flex justify-center items-center mt-2 text-gray-500 regular group-hover:text-white'>{title}</div>
                </div>
            </div>
        </>
    )
}

export default Cards