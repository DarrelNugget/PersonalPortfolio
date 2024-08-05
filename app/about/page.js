import Navbar from './navbar';
import Image from 'next/image';
import calgary from "./src/calgary.jpg";
export default function About() {
  return (
    <main>
      <body className="h-screen bg-gradient-to-b bg-gray-600"></body>
      <div>
        <Navbar />
      </div >
        <div className="flex justify-center items-center m-10 bg-gray-700">
          <div>
            <h1 className="text-3xl font-bold text-center text-white m-4">
              About Me
            </h1>
          </div>
        </div>
        
        <div className="flex justify-center m-10 bg-gray-700">
          
          <div>
            <div className="flex justify-center m-5 rounded-full">
              <Image src={calgary} alt="T&t" width="500" height="300"/>
              
          </div>
            <h2 className="justify-left mb-2 mt-5 ml-5 mr-5 text-2xl font-medium">
              Background
            </h2>
            <p className="text-lg text-white mb-5 ml-5 mr-5">
              I was born and rasied in Calgary, Alberta. However my parents are from Vietnam. Growing up i was speaked Vietnamese at home and English at school, but my vietnamese is really bad still.
            </p>
            <h2 className="justify-left mb-2 mt-5 ml-5 mr-5 text-2xl font-medium">
              Interests
            </h2>
            <p className="text-lg text-white mb-5 ml-5 mr-5">
              I enjoy playing videos games as one mainly competivite games that normally involve a ranking system. I mainly play FPS games such as Valorant, CSGO and Overwatch.
              However when i want to relax i play games like Stardew Valley and Minecraft. My other interests would be exerising i love to go to the gym and workout, i also
              play badminton every week with my friends.
            </p>

          </div>
        </div>
    </main>
  );
}