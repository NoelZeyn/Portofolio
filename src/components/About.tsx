import React, { useEffect } from "react";
import Image from "next/image";

const About = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/particles.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS.load('particles-js', 'particles.json', () => {
          console.log('particles.js config loaded');
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="about" className="py-16 shadow-md relative overflow-hidden">
      <div id="particles-js" className="absolute top-0 left-0 w-full h-full"></div>
      <div className="absolute top-0 left-0 w-60 h-60 bg-blue-300 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500 rounded-full blur-3xl opacity-30 transform translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 flex justify-center mb-8">
        <div className="relative group">
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg transform group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500">
            <Image src="/fotoku.jpg" alt="Ahmad Akrom Kamaluddin" width={160} height={160} className="object-cover" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 text-center bg-white py-2 rounded-b-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-sm text-gray-700 font-semibold">Student</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <h2 className="text-white text-3xl font-bold mb-4 transition-transform duration-500 hover:scale-105">
          About Me
        </h2>
        <p className="text-white leading-relaxed max-w-3xl mx-auto">
        An Information Technology student with strong analytical skills, high attention to detail, and adaptability in new situations. I have organizational experience that enables  me to work effectively in dynamic situations, both independently and as part of a team.
        </p>
        <div className="mt-8">
          <a
            href="/Curriculum Vitae (Eng Version)_Ahmad Akrom Kamaluddin.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
