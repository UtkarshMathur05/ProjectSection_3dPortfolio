import React from 'react'
import Navibar from '../components/Navibar'
import Content from '../components/Content'
const Development = () => {
    return (
        <>

            <div>
                <div className='bg-[#141414] h-screen w-screen text-white bg-[url("/images/bg2.jpg")] bg-cover bg-center vignette'>
                    <Navibar />
                    <Content />
                </div>
            </div>
        </>
    )
}
export default Development