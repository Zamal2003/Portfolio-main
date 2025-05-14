import React from "react";

function Education() {
  const educationList = [
    {
      institution: "Millennium Institute of Technology & Science, Bhopal",
      duration: "June 2021 - June 2025",
      degree: "B.Tech in Computer Science",
      badge: "Latest",
    },
    {
      institution: "Goverment Zila Senior Secondary School Brahampura, Muzaffarpur",
      duration: "March 2020 - March 2021",
      degree: "Class 12th (Science Stream)",
      badge: "",
    },
    {
      institution: "Utkarmik Madhya Vidhlaya Public School, Muzaffarpur",
      duration: "March 2018 - March 2019",
      degree: "Class 10th",
      badge: "",
    }
  ];

  return (
    <section id="education" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white text-center mb-12">
          Education
        </h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {educationList.map((education, index) => (
            <li key={index} className="mb-12 ml-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <svg
                  className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path>
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                {education.institution}
                {education.badge && (
                  <span className="ml-3 bg-blue-100 text-blue-800 text-sm font-medium px-3 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {education.badge}
                  </span>
                )}
              </h3>
              <time className="block mb-2 text-sm text-gray-400 dark:text-gray-500">
                {education.duration}
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {education.degree}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Education;
