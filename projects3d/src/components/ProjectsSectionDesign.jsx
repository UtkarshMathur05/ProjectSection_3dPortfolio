import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard' // We can reuse the exact same card!
import ProjectsSection from './ProjectsSection';

// 1. The Design Database: Notice we use an array of 'works' (images/gifs) instead of tech stacks
const designCategories = [
    {
        id: 1,
        title: "Thumbnails",
        description: "High-CTR YouTube thumbnails engineered to grab attention and stop the scroll.",
        // Replace these with your actual image paths
        works: [
            "/images/thumb1.jpg",
            "/images/thumb2.jpg",
            "/images/thumb3.jpg",
            "/images/thumb4.jpg"
        ]
    },
    {
        id: 2,
        title: "3D Works",
        description: "Immersive 3D environments, character modeling, and abstract product renders.",
        works: [
            "/images/3d-1.jpg",
            "/images/3d-2.jpg",
            "/images/3d-3.jpg"
        ]
    },
    {
        id: 3,
        title: "Reels & Edits",
        description: "Fast-paced, cinematic vertical video edits designed for modern attention spans.",
        works: [
            "/images/reel-placeholder1.gif",
            "/images/reel-placeholder2.gif"
        ]
    }
];

const ProjectsSectionDesign = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <div id="projects" className="relative bg-black text-white px-10 pl-10 pb-20">
            <h1 className="text-2xl mybold mb-5">My Design Vault</h1>

            {/* The Grid of Categories */}
            <div className="flex flex-wrap gap-8">
                {designCategories.map((category) => (
                    <ProjectCard
                        key={category.id}
                        title={category.title}
                        onClick={() => setSelectedCategory(category)}
                    />
                ))}
            </div>

            {/* THE VISUAL "NETFLIX" MODAL */}
            {selectedCategory && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-page-in">

                    <div className="relative w-full max-w-5xl bg-[#181818] border border-[#333] rounded-xl p-10 shadow-2xl overflow-hidden">

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className="absolute top-4 right-6 text-gray-400 hover:text-white text-4xl font-light z-10"
                        >
                            &times;
                        </button>

                        {/* Modal Header */}
                        <h2 className="text-[#E50914] text-4xl mybold mb-2">
                            {selectedCategory.title}
                        </h2>
                        <p className="myregular text-lg text-gray-400 mb-8 max-w-2xl">
                            {selectedCategory.description}
                        </p>

                        {/* 
                            NETFLIX STYLE HORIZONTAL SCROLLING ROW
                            - overflow-x-auto: allows horizontal scrolling
                            - snap-x: makes it snap to images like a real carousel
                            - hide-scrollbar: custom class to remove the ugly scroll bar 
                        */}
                        <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">
                            {selectedCategory.works.map((workImg, index) => (
                                <div
                                    key={index}
                                    className="snap-center shrink-0 w-80 h-48 bg-[#222] rounded-md overflow-hidden relative group cursor-pointer"
                                >
                                    <img
                                        src={workImg}
                                        alt={`${selectedCategory.title} ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    {/* Optional: Dark gradient overlay on hover so it feels cinematic */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="mybold text-white tracking-widest uppercase">View</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectsSectionDesign