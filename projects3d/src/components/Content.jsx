import React from 'react'

const Content = () => {
    return (
        <>
            <div className='w-fit ml-10 bottom-40 absolute'>
                <img src="/images/logo.png" alt="Logo" width={90} />
                <div className='text-5xl mb-3 mt-2 mybold'>Utkarsh Mathur</div>
                <div className='myregular mb-5 w-140'>In a country of developers, digital stability rests on a MERN-stack architect shipping complex code—while desperately trying to dodge a 404.</div>
                <button className='bg-white text-black px-6 py-3 rounded-sm mybold text-xl flex hover:bg-gray-300 transition duration-300'>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 330 330" style={{ enableBackground: 'new 0 0 330 330' }} xml:space="preserve" className='w-6 h-6 mr-2'>
                        <path id="XMLID_308_" d="M37.728,328.12c2.266,1.256,4.77,1.88,7.272,1.88c2.763,0,5.522-0.763,7.95-2.28l240-149.999
	c4.386-2.741,7.05-7.548,7.05-12.72c0-5.172-2.664-9.979-7.05-12.72L52.95,2.28c-4.625-2.891-10.453-3.043-15.222-0.4
	C32.959,4.524,30,9.547,30,15v300C30,320.453,32.959,325.476,37.728,328.12z"/>
                    </svg>
                    Resume
                </button >
            </div>
        </>
    )
}

export default Content