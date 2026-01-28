import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollSection from "./components/ScrollSection";

function App() {
  
  return (
    <LanguageProvider>
    <div className="min-h-screen scroll-container">
        <Header/>
        <ScrollSection> 
        <div className="snap-section"> 
        <Hero />
        </div>
        </ScrollSection>
        <ScrollSection>
        <div className="snap-section">
        <About />
        </div>

        </ScrollSection>
        <ScrollSection>
        <div className="snap-section">
        <Skills />
        </div>

        </ScrollSection>
        <ScrollSection>
        <div className="snap-section">
        <Projects />
        </div>

        </ScrollSection>
        <ScrollSection>
        <div className="snap-section">
        <Contact />
        </div>

        </ScrollSection>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
