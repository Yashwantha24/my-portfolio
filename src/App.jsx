import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import { ToastProvider } from './components/Toast';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ErrorBoundary>
      <ToastProvider>
        <div className="bg-primary min-h-screen text-textLight font-sans selection:bg-accent selection:text-primary overflow-x-hidden">
          {loading && <Preloader finishLoading={() => setLoading(false)} />}

          {!loading && (
            <>
              <Navbar />
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
              </main>
            </>
          )}
        </div>
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
