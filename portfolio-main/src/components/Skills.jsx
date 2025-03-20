import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', bgColor: 'bg-red-500' },
    { name: 'CSS', bgColor: 'bg-blue-500' },
    { name: 'JavaScript', bgColor: 'bg-yellow-500' },
    { name: 'React', bgColor: 'bg-blue-600' },
    { name: 'Node.js', bgColor: 'bg-green-500' },
    { name: 'MongoDB', bgColor: 'bg-green-700' },
    { name: 'Express.js', bgColor: 'bg-yellow-700' },
    { name: 'Postman', bgColor: 'bg-orange-500' },
    { name: 'Git', bgColor: 'bg-orange-500' },
    { name: 'Github', bgColor: 'bg-gray-800' }
  ];

  return (
    <div id="skills" className="max-w-7xl mx-auto px-2">
        <h2 className="text-4xl font-bold text-white text-center mb-10 mt-5">Skills</h2>
    <div className="flex flex-wrap justify-center gap-6 p-6">
      
      {skills.map((skill, index) => (
        <div
          key={index}
          className={`w-40 h-40 flex flex-col items-center justify-center rounded-xl shadow-lg ${skill.bgColor} text-white text-lg font-semibold`}
        >
          {skill.name}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Skills;
