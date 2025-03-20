import React, { useState, useEffect } from 'react';
import ProfilePhoto from '../assets/profile.jpeg';

function Home() {
  const [color, setColor] = useState("#000000");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let newColor = "#";
    for (let i = 6; i > 0; i--) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }
    return newColor;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(getRandomColor());
    }, 1000); // Change color every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto px-6">
        {/* Left Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4" style={{ color }}>
            Hi, I'm Md Jamaluddin
          </h1>
          <p className="italic mb-4">
          A passionate Full Stack Developer who thrives on building modern, scalable websites and applications. I specialize in React, Node.js, Express, and MongoDB, blending creativity and code to turn ideas into impactful solutions. Ready to create something amazing together?"          </p>
          <p className="italic mb-6">I thrive on turning ideas into real-world solutions.</p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="./Resume(4).pdf"
              className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300 transition"
              download
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400 transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Right Content (Profile Photo) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={ProfilePhoto}
            alt="Profile"
            className="w-48 h-48 rounded-full shadow-lg object-cover md:w-64 md:h-64"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
