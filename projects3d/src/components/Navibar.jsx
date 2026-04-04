import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
const Navibar = ({ page }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleProfileToggle = () => {
        // Check if the current URL is your Design page
        // (Make sure to change '/design' if your route is just '/')
        if (location.pathname === '/design') {
            navigate('/development');
        } else {
            navigate('/design');
        }
    };

    // 1. ADD THIS FUNCTION: Smoothly scrolls to the target ID
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`py-6 px-10 flex gap-8 justify-between items-center myregular fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#141414] shadow-lg' : 'bg-transparent'
            }`}>
            <img src="/images/logo.png" alt="Logo" width={100} onClick={() => navigate('/')} className="cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95" />

            <div className='flex text-base font-medium text-gray-300 gap-6'>
                {/* 2. UPDATE BUTTONS: Call the function with the ID names */}
                <button
                    onClick={() => scrollToSection('home')}
                    className='hover:text-white transition-colors'
                >
                    Home
                </button>
                <button
                    onClick={() => scrollToSection('projects')}
                    className='hover:text-white transition-colors'
                >
                    Projects
                </button>
            </div>

            <div className='w-8 h-auto'>
                <img src={`/images/${page}.png`} alt="Development" width={150} className='rounded-[2px] cursor-pointer' onClick={handleProfileToggle} />
            </div>
        </div>
    )
}

export default Navibar