import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
const Navibar = ({ page }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [isSwitching, setIsSwitching] = useState(false);
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

    // 1. ADD THIS FUNCTION: Smoothly scrolls to the target ID
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleProfileToggle = () => {
        setIsSwitching(true); // Triggers the loading screen

        // Wait 1.5 seconds (1500ms) before actually changing the page
        setTimeout(() => {
            if (location.pathname === '/design') {
                navigate('/development');
            } else {
                navigate('/design');
            }
        }, 1500);
    };

    return (
        <>
            {isSwitching && (
                <div className="fixed inset-0 z-[9999] bg-[#141414] flex flex-col items-center justify-center animate-page-in">
                    {/* Netflix-Style Red Spinner */}
                    <div className="w-16 h-16 border-4 border-gray-800 border-t-[#E50914] rounded-full animate-spin"></div>

                    {/* Cinematic loading text */}
                    <div className="mt-8 mybold text-gray-400 tracking-[0.3em] text-sm uppercase animate-pulse">
                        {location.pathname === '/design' ? 'Loading Development...' : 'Loading Design Vault...'}
                    </div>
                </div>
            )}

            <div className={`py-6 px-10 flex gap-8 justify-between items-center myregular fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-[#141414] shadow-lg' : 'bg-transparent'
                }`}>
                <img src="/images/logo.png" alt="Logo" width={100} onClick={() => navigate('/')} className="cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95" />

                <div className='flex text-base font-medium text-gray-300 gap-6'>
                    {/* 2. UPDATE BUTTONS: Call the function with the ID names */}
                </div>

                <div className='w-8 h-auto'>
                    <img src={`/images/${page}.png`} alt="Development" width={150} className='rounded-[2px] cursor-pointer' onClick={handleProfileToggle} />
                </div>
            </div>
        </>
    )
}

export default Navibar