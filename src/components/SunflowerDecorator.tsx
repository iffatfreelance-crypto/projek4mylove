import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bouquet, PeonyBloom, WhiteRose } from './FloralElements';

const petalTrail = [
  { x: '7%', delay: 0, duration: 16, color: '#F8C8DC', size: 18 },
  { x: '18%', delay: 3, duration: 18, color: '#FFF3B0', size: 14 },
  { x: '28%', delay: 6, duration: 20, color: '#FFFFFF', size: 16 },
  { x: '39%', delay: 2, duration: 17, color: '#F7B7CF', size: 15 },
  { x: '52%', delay: 5, duration: 19, color: '#F8C8DC', size: 18 },
  { x: '63%', delay: 1, duration: 16, color: '#FFFFFF', size: 14 },
  { x: '74%', delay: 7, duration: 21, color: '#FFF3B0', size: 16 },
  { x: '86%', delay: 4, duration: 18, color: '#F7B7CF', size: 15 },
  { x: '94%', delay: 8, duration: 22, color: '#FFFFFF', size: 13 },
];

const FloatingPetal = ({
  x,
  delay,
  duration,
  color,
  size,
}: {
  x: string;
  delay: number;
  duration: number;
  color: string;
  size: number;
}) => (
  <motion.div
    initial={{ y: -40, x, opacity: 0, rotate: 0 }}
    animate={{
      y: '112vh',
      x: [x, `calc(${x} + 28px)`, `calc(${x} - 20px)`],
      rotate: [0, 120, 260, 360],
      opacity: [0, 0.65, 0.55, 0],
    }}
    transition={{ duration, delay, repeat: Infinity, ease: 'linear' }}
    className="fixed pointer-events-none z-0"
  >
    <svg width={size} height={size + 6} viewBox="0 0 20 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 1C15 6 18 10 17 15C16 21 10 25 10 25C10 25 4 21 3 15C2 10 5 6 10 1Z"
        fill={color}
        opacity="0.72"
      />
    </svg>
  </motion.div>
);

export const SunflowerDecorator = () => {
  const [showSecret, setShowSecret] = React.useState(false);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-30">
      <motion.button
        type="button"
        animate={{ y: [0, -12, 0], rotate: [-5, -2, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.04 }}
        onClick={() => setShowSecret(true)}
        className="absolute -top-8 -left-12 pointer-events-auto cursor-pointer opacity-70"
        aria-label="Buka pesan bunga rahasia"
      >
        <Bouquet className="scale-75 sm:scale-90" />
      </motion.button>

      <motion.button
        type="button"
        animate={{ y: [0, 14, 0], rotate: [4, 1, 4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.04 }}
        onClick={() => setShowSecret(true)}
        className="absolute -bottom-8 -right-10 pointer-events-auto cursor-pointer opacity-65"
        aria-label="Buka pesan bunga rahasia"
      >
        <Bouquet className="scale-90 rotate-180" />
      </motion.button>

      <AnimatePresence>
        {showSecret && (
          <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center pointer-events-none px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              className="w-full max-w-[360px] rounded-lg border border-blush/40 bg-cream/90 p-5 text-center shadow-2xl backdrop-blur-xl pointer-events-auto"
            >
              <div className="mb-3 flex items-center justify-center gap-2">
                <WhiteRose size={34} />
                <PeonyBloom size={42} />
                <WhiteRose size={34} />
              </div>
              <p className="font-playfair italic text-warm-brown text-lg leading-relaxed">
                "Kamu selalu jadi bagian paling lembut dari hari-hariku."
              </p>
              <button
                onClick={() => setShowSecret(false)}
                className="mt-4 text-xs font-poppins font-semibold uppercase tracking-[0.18em] text-floral-rose transition-colors hover:text-warm-brown"
              >
                Tutup
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {petalTrail.map((petal) => (
        <FloatingPetal key={`${petal.x}-${petal.delay}`} {...petal} />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(191,232,248,0.18),transparent_38%,rgba(248,200,220,0.16))] pointer-events-none" />
    </div>
  );
};
