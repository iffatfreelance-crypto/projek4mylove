import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bouquet, FloralDivider } from './FloralElements';

const messages = [
  '730 hari...',
  'Banyak tawa...',
  'Banyak cerita...',
  'Banyak kenangan...',
  'Dan semuanya dimulai dari kamu.',
];

export const CinematicTransition = ({ onComplete }: { onComplete: () => void }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < messages.length) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, 2300);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(onComplete, 900);
    return () => clearTimeout(timer);
  }, [index, onComplete]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden pastel-garden-gradient px-6">
      <div className="absolute inset-0 paper-texture opacity-30" />
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [-3, 2, -3] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-6 opacity-55"
      >
        <Bouquet className="scale-75 md:scale-100" />
      </motion.div>

      <div className="relative z-10 text-center">
        <FloralDivider className="mb-8" />
        <AnimatePresence mode="wait">
          {index < messages.length && (
            <motion.p
              key={messages[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2 }}
              className="font-playfair text-3xl italic leading-relaxed text-warm-brown md:text-5xl"
            >
              {messages[index]}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
