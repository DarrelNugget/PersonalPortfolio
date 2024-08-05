"use client";

import Link from 'next/link';
import Navbar from './navbar';


export default function Home() {
  return (
    
    <main>
      <body className="h-screen bg-gradient-to-b bg-gray-600"></body>

      <div>
        <Navbar />
      </div >
        <div className="flex justify-center items-center m-10 bg-gray-700">
          <div>
            <h1 className="text-3xl font-bold text-center text-white m-4">
              Home
            </h1>
          </div>
        </div>
        <div className="flex justify-center m-10 bg-gray-700">
          <div>
            <p className="text-lg text-white m-5">
              Hello my name is Darrel Nguyen, im currently at a student Southern Alberta Institute of Technology for software development,
              pursing a diploma. I have a passion for technology growing up around videos games and brother who would always build computers.
              My first introduction to programming was in high school where I took a computer science course and learned the basics of Java.
              I have always been interested in learning new things and challenging myself. I am always looking for new opportunities to learn and grow.
            </p>
            <p className="text-lg text-white m-5">
              During my time at SAIT I have learned many new things such as web development, mobile development, and database management.
              In languages like Python, Java, C#, SQL, and JavaScript. I have also learned how to work in a team and how to communicate with others.
              I have also had the opportunity to work on several projects that have allowed me to apply my theoretical knowledge to practical scenarios, 
              further honing my skills in problem-solving, critical thinking, and collaboration.
            </p>
            <p className="text-lg text-white m-5">
              My goal is to leverage my education and experiences to contribute meaningfully to the tech industry, whether through innovative software solutions, 
              efficient system designs, or by fostering a collaborative and inclusive tech community. 
              I am excited about the future and the endless possibilities that lie ahead in the world of technology.
            </p>
            <p className="text-lg text-white m-5">
              Feel free to check out the other pages and learn more about me and my experiences.
            </p>
          </div>
        </div>
    </main>
    
  );
}
