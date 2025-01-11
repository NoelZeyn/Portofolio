import React from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contacts from '@/components/Contacts';

export default function Home(){
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contacts />
      </main>
    </div>
  );
};

