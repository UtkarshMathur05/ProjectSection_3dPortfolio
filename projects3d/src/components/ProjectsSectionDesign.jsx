import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'

// 1. Updated Database: Changed 'vimeo' to 'youtube' and updated the videoUrl format
const designCategories = [
    {
        id: 1,
        title: "Thumbnails",
        format: 'horizontal',
        description: "High-CTR YouTube thumbnails engineered to grab attention and stop the scroll.",
        works: [
            { type: 'image', thumbnail: '/thumbnails/img-1.jpg', src: '/thumbnails/img-1.jpg' },
            { type: 'image', thumbnail: '/thumbnails/img-2.jpg', src: '/thumbnails/img-2.jpg' },
            { type: 'image', thumbnail: '/thumbnails/img-3.jpg', src: '/thumbnails/img-3.jpg' },
            { type: 'image', thumbnail: '/thumbnails/img-4.jpg', src: '/thumbnails/img-4.jpg' },
            { type: 'image', thumbnail: '/thumbnails/img-5.jpg', src: '/thumbnails/img-5.jpg' },
        ]
    },
    {
        id: 2,
        title: "3D Works",
        format: 'horizontal',
        description: "Immersive 3D environments, character modeling, and abstract product renders.",
        works: [
            {
                type: 'youtube', // Changed to youtube
                thumbnail: 'https://img.youtube.com/vi/nUstW51TN0I/maxresdefault.jpg',
                videoUrl: 'https://youtube.com/embed/nUstW51TN0I'
            },
            {
                type: 'youtube', // Changed to youtube
                thumbnail: 'https://img.youtube.com/vi/TdHVEFOhXiM/maxresdefault.jpg',
                videoUrl: 'https://youtube.com/embed/TdHVEFOhXiM'
            },
            {
                type: 'youtube', // Changed to youtube
                thumbnail: 'https://img.youtube.com/vi/odoDj0HjsYI/maxresdefault.jpg',
                videoUrl: 'https://youtube.com/embed/odoDj0HjsYI'
            },
        ]
    },

    {
        id: 3,
        title: "Reels & Edits",
        format: 'vertical',
        description: "Fast-paced, cinematic vertical video edits designed for modern attention spans.",
        works: [
            {
                type: 'youtube',
                thumbnail: 'https://img.youtube.com/vi/H7EyG2P-yy8/maxresdefault.jpg',
                videoUrl: 'https://www.youtube.com/embed/H7EyG2P-yy8'
            },
            {
                type: 'youtube',
                thumbnail: 'https://img.youtube.com/vi/wxnpqt0JaDQ/maxresdefault.jpg',
                videoUrl: 'https://www.youtube.com/embed/wxnpqt0JaDQ'
            },
            {
                type: 'youtube',
                thumbnail: 'https://img.youtube.com/vi/-ljgu4GW2is/maxresdefault.jpg',
                videoUrl: 'https://www.youtube.com/embed/-ljgu4GW2is'
            },
            {
                type: 'youtube',
                thumbnail: 'https://img.youtube.com/vi/kipZaOXt3M0/maxresdefault.jpg',
                videoUrl: 'https://www.youtube.com/embed/kipZaOXt3M0'
            },
            {
                type: 'youtube',
                thumbnail: 'https://img.youtube.com/vi/0ETcLdjZrsI/maxresdefault.jpg',
                videoUrl: 'https://www.youtube.com/embed/0ETcLdjZrsI'
            }
        ]
    }
];

const DesignProjectsSection = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeMedia, setActiveMedia] = useState(null);

    const closeCategoryModal = () => {
        setSelectedCategory(null);
        setActiveMedia(null);
    };

    return (
        <div id="projects" className="relative bg-black text-white px-10 pl-10 pb-20">
            <h1 className="text-2xl mybold mb-5">Design Projects</h1>

            <div className="flex flex-wrap gap-8">
                {designCategories.map((category) => (
                    <ProjectCard
                        key={category.id}
                        title={category.title}
                        onClick={() => setSelectedCategory(category)}
                    />
                ))}
            </div>

            {/* LEVEL 1: THE CATEGORY MODAL (Netflix Row) */}
            {selectedCategory && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-page-in">
                    <div className="relative w-full max-w-5xl bg-[#181818] border border-[#333] rounded-xl p-10 shadow-2xl overflow-hidden">

                        <button
                            onClick={closeCategoryModal}
                            className="absolute top-4 right-6 text-gray-400 hover:text-white text-4xl font-light z-10"
                        >
                            &times;
                        </button>

                        <h2 className="text-[#E50914] text-4xl mybold mb-2">
                            {selectedCategory.title}
                        </h2>
                        <p className="myregular text-lg text-gray-400 mb-8 max-w-2xl">
                            {selectedCategory.description}
                        </p>

                        <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar">
                            {selectedCategory.works.map((work, index) => (
                                <div
                                    key={index}
                                    onClick={() => setActiveMedia(work)}
                                    className={`snap-center shrink-0 bg-[#222] rounded-md overflow-hidden relative group cursor-pointer ${selectedCategory.format === 'vertical' ? 'w-52 aspect-[9/16]' : 'w-80 aspect-video'
                                        }`}
                                >
                                    <img
                                        src={work.thumbnail}
                                        alt={`Artwork ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        {/* Updated to check for 'youtube' */}
                                        <span className="mybold text-white tracking-widest uppercase text-sm">
                                            {work.type === 'youtube' ? 'Play Video' : 'View Full'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* LEVEL 2: FULL SCREEN LIGHTBOX */}
            {activeMedia && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4 animate-page-in">
                    <button
                        onClick={() => setActiveMedia(null)}
                        className="absolute top-6 right-8 text-white hover:text-gray-400 text-4xl font-light z-10"
                    >
                        &times;
                    </button>

                    {activeMedia.type === 'image' ? (
                        <img
                            src={activeMedia.src}
                            alt="Full View"
                            className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
                        />
                    ) : (
                        <div className={`w-full bg-black rounded-md overflow-hidden shadow-2xl ${selectedCategory.format === 'vertical' ? 'max-w-sm aspect-[9/16]' : 'max-w-6xl aspect-video'
                            }`}>
                            <iframe
                                src={activeMedia.videoUrl}
                                className="w-full h-full"
                                frameBorder="0"
                                /* Added standard YouTube allow permissions */
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default DesignProjectsSection