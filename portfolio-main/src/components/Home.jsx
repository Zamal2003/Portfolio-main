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
    <section className="flex items-center justify-center min-h-[65vh] bg-gray-900 text-white px-6">
    <div className="flex flex-row-reverse items-center justify-between max-w-2xl mx-auto py-10 gap-6">
      
      {/* Profile Image */}
      <div className="w-1/3 flex justify-center">
        <img
          src={ProfilePhoto}
          alt="Profile"
          className="w-40 h-40 sm:w-56 sm:h-56 rounded-full shadow-lg object-cover"
        />
      </div>
  
      {/* Content */}
      <div className="w-2/3 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-400 mb-4"
       style={{color}} >
          Hi, I'm Md Jamaluddin
        </h1>
        <p className="italic mb-4">
         A Full Stack Developer with a passion for crafting dynamic and scalable web applications. I love solving complex problems, optimizing performance, efficient code. Whether it’s front-end interactivity or back-end architecture, I ensure every project is built for excellence.”</p>
        <div className="flex gap-4 w-fit">
  <a
    href="./resume.pdf"
    className="bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300 transition text-center ml-12"
    download
  >
    Download Resume
  </a>
  <a
    href="#projects"
    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-400 transition text-center"
  >
    View Projects
  </a>
</div>


      </div>
      
    </div>
  </section>
  
  
  
  );
}

export default Home;
