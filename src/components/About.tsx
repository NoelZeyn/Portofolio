import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-200 shadow-md relative overflow-hidden">
      {/* Background Decorative Circle */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-blue-300 rounded-full blur-3xl opacity-50 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-500 rounded-full blur-3xl opacity-30 transform translate-x-1/2 translate-y-1/2"></div>

      {/* Container 1: Profile Picture */}
      <div className="container1 mx-auto px-10 flex justify-center mb-8">
        <div className="relative group">
          {/* Profile Image */}
          <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg transform group-hover:scale-105 group-hover:rotate-3 transition-transform duration-500">
            <Image
              src="/fotoku.jpg" // Ganti dengan path foto Anda
              alt="Ahmad Akrom Kamaluddin"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>

          {/* Floating Text Effect */}
          <div className="absolute bottom-0 left-0 right-0 text-center bg-white py-2 rounded-b-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-sm text-gray-700 font-semibold">Software Developer</p>
          </div>
        </div>
      </div>

      {/* Container 2: About Text */}
      <div className="container2 mx-auto px-6 text-center">
        <h2 className="text-3xl text-black font-bold mb-4 transition-transform duration-500 hover:scale-105">
          About Me
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Hi, Im Ahmad Akrom Kamaluddin, a passionate software developer
          specializing in web development. I enjoy building interactive and
          user-friendly web applications with modern technologies like Next.js,
          React.js, and Tailwind CSS.
        </p>

        {/* Animated Call to Action Button */}
        <div className="mt-8">
          <a
            href="/Curriculum Vitae (Eng Version)_Ahmad Akrom Kamaluddin.pdf" // Ganti dengan path resume Anda
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
