import React from 'react';
import { motion } from 'framer-motion';
import gallery from '../assets/gallery.png';
import todoimage from '../assets/todoimage.png';
import hospital from '../assets/hospital.png';
import amazon from '../assets/amazon.png';
import Formflow from '../assets/Formflow.png';
function Projects() {
  const projectList = [
    {
      title: 'DATA COLLECTOR FOR SAFETY ENGINEER',
      image: Formflow,
      description: 'The Data Collector for Safety Engineer is a digital solution designed to streamline and enhance the process of collecting, managing, and analyzing safety-related data on construction or industrial sites. The system allows safety engineers to efficiently record observations, incidents, inspections, and compliance checks through a user-friendly interface, using either a mobile or desktop platform. is a seamless form submission and management system. Users can effortlessly fill out and submit forms, while administrators can track, review, and manage submissions through an intuitive dashboard. Whether for surveys, feedback collection, or data entry, FormFlow simplifies the process with a user-friendly interface and efficient data management.The main objective of this tool is to replace manual paperwork with a structured digital workflow, enabling real-time data capture, faster reporting, and improved decision-making.',
      link: "https://admin-form-beige.vercel.app/",
    }, 
    {
      title: 'Todo-App',
      image: todoimage,
      description: 'A full-stack task management application built with the MERN stack.',
      link: 'https://todo-app-my-app.vercel.app/',
    },
    
    {
      title: 'Hospital Management',
      image: hospital,
      description: 'A hospital management system built with the MERN stack.',
      link: 'https://hospital-management-client-sr2w.vercel.app/#/login',
    },
    {
      title: 'Simple Gallery',
      image: gallery,
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
    <section id="projects" className="bg-gradient-to-r from-blue-500 to-purple-500 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-11">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden transform p-5"
              initial={{ opacity: 0, y: 50 }} // Animation starts from below
              whileInView={{ opacity: 1, y: 0 }} // Animation appears on scroll
              transition={{ duration: 0.5, delay: index * 0.2 }} // Delay for stagger effect
              viewport={{ once: true }} // Animation runs only once
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
