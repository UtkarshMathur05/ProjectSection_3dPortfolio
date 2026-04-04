import React from 'react'
const Navibar = () => {

    return (
        <div className='py-6 px-10 flex gap-8 regular justify-between items-center myregular'>
            <img src="/images/logo.png" alt="Logo" width={100} />
            <div className='flex text-base font-medium text-gray-300 gap-6'>
                <button className='hover:text-white'>Home</button>
                <button className='hover:text-white'>Projects</button>
            </div>
            <div className='w-8 h-auto'>
                <img src={`/images/yellow.png`} alt="Development" width={150} className='rounded-[2px] group-hover:border-3 group-hover:border-white' />
            </div>
        </div>
    )
}

export default Navibar
