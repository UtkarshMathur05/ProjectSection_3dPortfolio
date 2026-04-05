import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navibar from '../components/Navibar'
import Content from '../components/Content'
import ProjectCard from '../components/ProjectCard'
import ProjectsSection from '../components/ProjectsSection'
const Development = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className='bg-black'>
                <div id="home" className='bg-[#141414] min-h-screen w-full text-white bg-[url("/images/bg2.jpg")] bg-cover bg-center vignette relative'>
                    <Navibar page="yellow" />
                    <div className='bottom-blur bg-gradient-to-t from-[#000000] to-transparent'></div>
                    <Content content="In a country of developers, digital stability rests on a MERN-stack architect shipping complex code—while desperately trying to dodge a 404." />
                </div>
                <ProjectsSection />
            </div>
            <span className="bg-black text-white py-4 block text-sm text-body sm:text-center myregular">© 2023 <a href="https://flowbite.com/" class="hover:underline">Utkarsh.dev™</a>. All Rights Reserved.</span>
        </>
    )
}
export default Development