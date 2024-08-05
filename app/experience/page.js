import Navbar from './navbar';
import Image from 'next/image';
import Link from "next/link";

import balo from './src/balo.jpg';
import tandt from './src/t&t.jpg';
import xing from './src/xing.jpg';
import dhut from './src/dhut.jpg';

export default function Experience() {
  return (
    
    <main>
      <body className="h-screen bg-gradient-to-b bg-gray-600"></body>
      <div>
        <Navbar />
      </div >
        <div className="flex justify-center items-center m-10 bg-gray-700">
          <div>
            <h1 className="text-3xl font-bold text-center text-white m-4">
              Experience
            </h1>
          </div>
        </div>
        <div className="flex m-10 bg-gray-700">
          <div>
            <p className="text-lg text-white m-5">
              Currently most of my experience is not related to the tech industry. I have worked in the different industry through out my career.
              Each of these experiences have helped me grow and develop my skills in different ways.
            </p>
            <div className="flex justify-center m-5 rounded-full">
              <Image src={balo} alt="T&t" width="300" height="300"/>
            </div>
            <p className="text-lg text-white m-5">
              My first experience would be my family own business. Which is not avabilie anymore, it was a vietnamese resturant.
              I was able to learn how to manage my time, build relationships with customers, and work in a fast pace environment. 
            </p>
            
            <p className="text-lg text-white m-5">
              My second experience would be another family own business. Which is still running, contruction company with my dad.
              Where i learn more hands on skills as we did many different projects. We would often do renovation for houses which would include
              redesigning the layout of the house, painting, and installing new floors. We would do outter work as well such as building decks, fences, roofing,
              and patios. I gain a lot of experience working with my hands and learning how to use different tools, most importantly i learned about attention to detail,
              time management, and problem solving.
            </p>
            <div className="flex justify-center m-5 rounded-full">
              <Image src={tandt} alt="T&t" width="300" height="300"/>
              
            </div>
            <div className="flex justify-center space-x-5 mt-5">

                <a href="https://g.co/kgs/wGD1oCQ" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 text-white px-10 py-2 rounded-lg hover:bg-blue-600">
                    Google
                  </button>
                </a>
                <a href="https://www.tntsupermarket.com/eng/" target="_blank" rel="noopener noreferrer">
                <button className="bg-green-500 text-white px-10 py-2 rounded-lg hover:bg-green-600">
                  Website
                </button>
              </a>
            </div>
            <p className="text-lg text-white m-5">
              My first offical job was at a supermarket called T&T Supermarket. I had alot of different position at this job, mainly because i was interested in learning.
              So i did the cashier, produce, and general service and e-commerce department. I learned many things skills at this job like the importance of displaying products.
              Here i was able to imporve my commuitcating skills and working in faster pace enivroment.
            </p>
            <div className="flex justify-center m-5 rounded-full">
              <Image src={xing} alt="T&t" width="300" height="300"/>
              
            </div>
            <div className="flex justify-center space-x-5 mt-5">

                <a href="https://www.google.com/search?q=xing+fu+tang+heritage+meadows&sca_esv=c0b955b0d7f1ad2c&sca_upv=1&rlz=1C1CHBF_enCA943CA943&sxsrf=ADLYWII2v0gJt0-UKN8XSuLAJVXLOoAW1w%3A1722851687861&ei=Z6GwZqyoNPP-1e8PysKKgAw&oq=xing+fu+tang+heri&gs_lp=Egxnd3Mtd2l6LXNlcnAiEXhpbmcgZnUgdGFuZyBoZXJpKgIIADIFEAAYgAQyCxAAGIAEGIYDGIoFMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMggQABiABBiiBDIIEAAYgAQYogQyCBAAGKIEGIkFSOQyUABYkidwAngAkAEBmAGaAqABthWqAQYwLjE1LjK4AQPIAQD4AQGYAhGgAqMUqAISwgIHECMYJxjqAsICHxAuGIAEGEMYtAIYxwEYyAMYigUY6gIYjgUYrwHYAQHCAhwQLhiABBhDGLQCGMcBGMgDGIoFGOoCGK8B2AEBwgITEAAYgAQYQxi0AhiKBRjqAtgBAsICChAjGIAEGCcYigXCAhAQLhiABBjHARgnGIoFGK8BwgIEECMYJ8ICExAuGIAEGEMYxwEYigUYjgUYrwHCAgoQABiABBhDGIoFwgILEC4YgAQY0QMYxwHCAgUQLhiABMICEBAuGIAEGNEDGBQYhwIYxwHCAg4QLhiABBjHARiOBRivAcICCxAuGIAEGMcBGK8BwgIKEAAYsAMY1gQYR8ICDRAAGLADGNYEGEcYyQPCAg4QABiABBiwAxiSAxiKBcICDRAAGIAEGLADGEMYigXCAg4QABiwAxjkAhjWBNgBA8ICGRAuGIAEGLADGEMYxwEYyAMYigUYrwHYAQHCAiIQLhiABBhDGMcBGIoFGI4FGK8BGJcFGNwEGN4EGOAE2AEEwgIKEAAYgAQYFBiHAsICBhAAGBYYHpgDDYgGAZAGEboGBggBEAEYCLoGBggCEAEYAboGBggDEAEYCboGBggEEAEYFJIHBjIuMTIuM6AHoOEB&sclient=gws-wiz-serp" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 text-white px-10 py-2 rounded-lg hover:bg-blue-600">
                    Google
                  </button>
                </a>
                <a href="https://xingfutang.com/" target="_blank" rel="noopener noreferrer">
                <button className="bg-green-500 text-white px-10 py-2 rounded-lg hover:bg-green-600">
                  Website
                </button>
              </a>
            </div>
            <p className="text-lg text-white m-5">
              My current job is at a bubble tea shop called Xing Fu Tang. I am currently a team lead at this job.
              I have been able to learn many new skills at this job such as managing a team, customer service, and inventory management.
            </p>
            <div className="flex justify-center m-5 rounded-full">
              <Image src={dhut} alt="T&t" width="300" height="300"/>
              
            </div>
            <div className="flex justify-center space-x-5 mt-5">

                <a href="https://g.co/kgs/eV5gGXp" target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 text-white px-10 py-2 rounded-lg hover:bg-blue-600">
                    Google
                  </button>
                </a>
                <a href="https://thediscoveryhut.com/" target="_blank" rel="noopener noreferrer">
                <button className="bg-green-500 text-white px-10 py-2 rounded-lg hover:bg-green-600">
                  Website
                </button>
              </a>
            </div>
            <p className="text-lg text-white m-5">
              My second job is at a toy store called The Discovery Hut. I currently work as a sales associate at this job.
              Here i more about displays and how they play an huge role in retail. 
              I have learned how to communicate with customers and how to help them find what they are looking for.
            </p>
          </div>
          
        </div>
    </main>
    
  );
}