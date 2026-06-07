import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bouquet, FloralDivider, PeonyBloom, WhiteRose } from './FloralElements';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 900);
          return 100;
        }

        return prev + 1;
      });
    }, 28);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen flex-col items-center justify-center overflow-hidden pastel-garden-gradient p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 flex w-full max-w-md flex-col items-center text-center"
      >
        <div className="relative mb-8 h-44 w-56">
          <Bouquet className="absolute inset-0" />
          <motion.div
            animate={{ scale: [1, 1.08, 1], rotate: [-4, 4, -4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-2 bottom-4"
          >
            <WhiteRose size={58} />
          </motion.div>
        </div>

        <FloralDivider className="mb-5" />

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-3 font-playfair text-2xl text-warm-brown"
        >
          Menyiapkan taman kenangan kita...
        </motion.h2>

        <p className="mb-8 max-w-sm font-poppins text-sm leading-relaxed text-warm-brown/68">
          Sedikit bunga, sedikit cerita, dan banyak hal manis yang cuma punya kita.
        </p>

        <div className="h-2 w-72 max-w-full overflow-hidden rounded-full border border-white/70 bg-white/55 shadow-inner">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full rounded-full bg-gradient-to-r from-blush via-butter to-sky"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          className="mt-4 font-poppins text-xs font-semibold tracking-[0.18em] text-warm-brown/70"
        >
          {progress}%
        </motion.p>
      </motion.div>

      <PeonyBloom size={190} className="absolute -bottom-16 -left-12 opacity-35" />
      <WhiteRose size={130} className="absolute right-6 top-10 opacity-45" />
    </div>
  );
};
