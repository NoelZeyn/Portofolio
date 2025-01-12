"use client";

import React from 'react';
import Header from '@/components/Header';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contacts from '@/components/Contacts';
import BackToTop from '@/components/BackToTop';
import ThemeToggle from '@/components/ThemeToggle'; // Import komponen ThemeToggle

export default function Home() {
  return (
    <div>
      <Header />
      <ThemeToggle /> {/* Letakkan tombol toggle tema */}
      <main>
        <About />
        <Projects />
        <Skills />
        <Contacts />
      </main>
      <BackToTop />
    </div>
  );
}
