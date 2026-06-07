import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { VerificationPage } from './components/VerificationPage';
import { HeroSection } from './components/HeroSection';
import { QuizSection } from './components/QuizSection';
import { MemoryVideo } from './components/MemoryVideo';
import { TimelineSection } from './components/TimelineSection';
import GallerySection from './components/GallerySection';
import LetterSection from './components/LetterSection';
import RelationshipCounter from './components/RelationshipCounter';
import ClosingSection from './components/ClosingSection';
import { SunflowerDecorator } from './components/SunflowerDecorator';
import { CinematicTransition } from './components/CinematicTransition';
import { SecretSunflower } from './components/SecretSunflower';
import { seoConfig } from './data/config';

type Stage = 'loading' | 'verification' | 'hero' | 'quiz' | 'transition' | 'main';

function App() {
  const [stage, setStage] = useState<Stage>('loading');

  useEffect(() => {
    document.title = seoConfig.title;
  }, []);

  return (
    <div className="min-h-screen bg-[#F4FBFF] text-warm-brown">
      <SunflowerDecorator />
      
      <AnimatePresence mode="wait">
        {stage === 'loading' && (
          <LoadingScreen 
            key="loading" 
            onComplete={() => setStage('verification')} 
          />
        )}

        {stage === 'verification' && (
          <VerificationPage 
            key="verification" 
            onSuccess={() => setStage('hero')} 
          />
        )}

        {stage === 'hero' && (
          <HeroSection 
            key="hero" 
            onStart={() => setStage('quiz')} 
          />
        )}

        {stage === 'quiz' && (
          <QuizSection 
            key="quiz" 
            onComplete={() => setStage('transition')} 
          />
        )}

        {stage === 'transition' && (
          <CinematicTransition 
            key="transition" 
            onComplete={() => setStage('main')} 
          />
        )}

        {stage === 'main' && (
          <div key="main" className="relative">
            <MemoryVideo />
            <TimelineSection />
            <GallerySection />
            <LetterSection />
            <RelationshipCounter />
            <ClosingSection />
            <SecretSunflower />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
