import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hello, I am an undergraduate student of Computer Science at BRAC University.
         My passion for problem-solving and learning new technology has led me to pursue a career in web development. 
         I am constantly seeking out new challenges and opportunities to improve my skills and knowledge in this field. 
         With passion for programming and a deep interest in web development,
          I am excited to apply my skills to create innovative and impactful solutions. 
          Thank you for taking the time to learn more about me and my work.
        </p>

        <br />

        <p className="text-xl">
         
        </p>
      </div>
    </div>
  );
};

export default About;
