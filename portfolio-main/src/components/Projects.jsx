import React from 'react';
import gallery from '../assets/gallery.png';
import todoimage from '../assets/todoimage.png';
import hospital from '../assets/hospital.png';
import amazon from '../assets/amazon.png';

function Projects() {
  const projectList = [
    {
      title: 'Todo-App',
      image: todoimage,  // Ensure this image is in public/assets/
      description: 'A full-stack task management application built with the MERN stack. This app allows users to efficiently organize their tasks with an intuitive and user-friendly interface. personal portfolio showcasing my skills, projects, and contact information.',
      link: 'https://todo-app-my-app.vercel.app/',
    },
    {
      title: 'Hospital Management',
      image: hospital,
      description: 'A hospital management system built with the MERN stack uses MongoDB ,Express.js,Node.js React.js  .',
      link: 'https://hospital-management-client-sr2w.vercel.app/#/login',
    },
    {
      title: 'Simple Gallery',
      image: gallery,  // Add actual image paths
      description: 'An online store with features like product search, cart management, and payment gateway integration.',
      link: 'https://simplegallery01.netlify.app/',
    },
   
    {
      title: 'Amazon clone',
      image: amazon,
      description: 'A full-stack application for creating, reading, updating, and deleting blog posts.',
      link: 'https://amazon2-o-jk.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-r to-purple-500 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <img
                  src={project.image || '/assets/default.png'}  // Fallback for missing images
                  alt={project.title}
                  style={{ width: "300px", height: "auto" }}
                />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
