import Navbar from './navbar';
import Link from 'next/link';

export default function Contact() {
  return (
    <main>
      <body className="h-screen bg-gradient-to-b bg-gray-600"></body>
      <div>
        <Navbar />
      </div >
        <div className="flex justify-center items-center m-10 bg-gray-700">
          <div>
            <h1 className="text-3xl font-bold text-center text-white m-4">
              Contact
            </h1>
          </div>
        </div>
        <div className="flex justify-center ml-10 mr-10 mt-10 mb-5 bg-gray-700">
          <div>
            <Link href="https://www.linkedin.com/in/darrel-nguyen-5aa711264/" className="text-white text-lg font-semibold hover:underline">
              Linkedin
            </Link>
          </div>
        </div>
        <div className="flex justify-center ml-10 mr-10 bg-gray-700">
          <div>
            <Link href="https://github.com/DarrelNugget" className="text-white text-lg font-semibold hover:underline">
              GitHub
            </Link>
          </div>
        </div>
    </main>
  );
}