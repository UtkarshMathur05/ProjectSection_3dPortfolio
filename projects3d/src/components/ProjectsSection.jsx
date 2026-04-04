import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard' // Update path if needed

// 1. Create your database of projects right here (or in a separate file)
const projectsData = [
    {
        id: 1,
        title: "HybridX",
        description: "A cross-platform mobile application designed to bridge the gap between legacy systems and modern cloud infrastructure.",
        techStack: ["React Native", "Node.js", "MongoDB", "Express", "Mongoose"],
        link: "https://hybrideducationhub.in/"
    },
    {
        id: 2,
        title: "3D Portfolio",
        description: "A fully interactive, 3D developer portfolio built with React Three Fiber. It features a custom animated avatar, dynamic camera navigation, immersive background audio, and interactive 3D objects to showcase projects and skills in a virtual workspace.",
        techStack: ["React.js", "React Three Fiber", "Tailwind CSS", "Howler.js", "GLTF"],
        link: "https://github.com/yourusername/nextflix"
    },
    {
        id: 3,
        title: "Coming Soon",
        description: "Stay tuned for my next big project!",
        techStack: [""],
        link: "https://github.com/"
    }
];

const ProjectsSection = () => {
    // 2. State now holds the ENTIRE project object, not just the title
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <div id="projects" className="relative bg-black text-white px-10 pl-10 pb-20">
            <h1 className="text-2xl mybold mb-5">My Projects</h1>

            {/* 3. The Grid: We "map" through the array to generate cards automatically */}
            <div className="flex flex-wrap gap-8 ">
                {projectsData.map((project) => (
                    <ProjectCard

                        key={project.id}
                        title={project.title}
                        // When clicked, save this specific project's data into state
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            {/* 4. THE POPUP MODAL */}
            {/* Render only if a project is selected */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">

                    {/* The Modal Box */}
                    <div className="relative w-full max-w-3xl bg-[#181818] border border-[#333] rounded-lg p-10 shadow-2xl">

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-4 right-6 text-gray-400 hover:text-white text-4xl font-light"
                        >
                            &times;
                        </button>

                        {/* Dynamic Content injected from the selected project */}
                        <h2 className="text-[#3BBAF4] text-4xl mybold mb-4">
                            {selectedProject.title}
                        </h2>

                        <p className="myregular text-lg text-gray-300 mb-8 leading-relaxed">
                            {selectedProject.description}
                        </p>

                        {/* Displaying the Tech Stack Array as little tags */}
                        <div className="mb-10 flex flex-wrap gap-3">
                            {selectedProject.techStack.map((tech, index) => (
                                <span
                                    key={index}
                                    className="bg-[#222] border border-[#444] px-4 py-1 rounded-full text-sm myregular text-gray-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4">
                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noreferrer"
                                className="bg-white text-black px-8 py-3 rounded-sm mybold text-lg hover:bg-gray-300 transition duration-300"
                            >
                                View Project
                            </a>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="border border-white text-white px-8 py-3 rounded-sm mybold text-lg hover:bg-white/10 transition duration-300"
                            >
                                Close
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectsSection