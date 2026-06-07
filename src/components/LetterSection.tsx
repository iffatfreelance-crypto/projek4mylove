import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';
import { letterData } from '../data/letter';
import { Bouquet, CasablancaLily, FloralDivider, WhiteRose } from './FloralElements';

const EnvelopeGraphic = () => (
  <div className="relative mx-auto h-40 w-64 max-w-full" aria-hidden="true">
    <div className="absolute inset-x-0 bottom-0 h-32 rounded-lg border border-blush/45 bg-cream shadow-xl" />
    <div className="absolute inset-x-0 bottom-0 h-32 overflow-hidden rounded-lg">
      <div className="absolute left-0 top-0 h-0 w-0 border-b-[128px] border-l-[128px] border-b-blush/50 border-l-transparent" />
      <div className="absolute right-0 top-0 h-0 w-0 border-b-[128px] border-r-[128px] border-b-sky/45 border-r-transparent" />
      <div className="absolute bottom-0 left-0 h-0 w-0 border-b-[78px] border-l-[128px] border-b-white/70 border-l-transparent" />
      <div className="absolute bottom-0 right-0 h-0 w-0 border-b-[78px] border-r-[128px] border-b-white/70 border-r-transparent" />
    </div>
    <div className="absolute left-1/2 top-2 h-0 w-0 -translate-x-1/2 border-l-[126px] border-r-[126px] border-t-[92px] border-l-transparent border-r-transparent border-t-white shadow-sm" />
    <div className="absolute left-1/2 top-16 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-blush text-floral-rose">
      <Mail size={24} />
    </div>
  </div>
);

const LetterSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden section-shell px-4 py-20">
      <CasablancaLily size={250} className="absolute -left-24 bottom-10 opacity-25" />
      <WhiteRose size={150} className="absolute right-8 top-14 opacity-35" />

      <div className="relative z-10 w-full max-w-2xl">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="envelope"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05, rotate: 4 }}
              transition={{ duration: 0.6 }}
              className="glass-card group relative w-full cursor-pointer overflow-hidden rounded-lg p-8 text-center shadow-2xl md:p-12"
              onClick={() => setIsOpen(true)}
            >
              <div className="absolute -right-16 -top-12 opacity-30">
                <Bouquet className="scale-75" />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="mb-7"
              >
                <EnvelopeGraphic />
              </motion.div>

              <h3 className="mb-4 font-playfair text-3xl text-warm-brown transition-transform group-hover:scale-[1.02]">
                Ada surat untukmu...
              </h3>
              <p className="font-poppins text-sm italic text-warm-brown/62">
                Klik untuk membuka
              </p>
            </motion.button>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              className="relative max-h-[82vh] overflow-y-auto rounded-lg border border-blush/40 bg-cream p-7 shadow-2xl md:p-12"
            >
              <CasablancaLily size={150} className="absolute -right-14 -top-10 rotate-12 opacity-20" />

              <div className="mb-8 text-right font-poppins text-xs font-bold uppercase tracking-[0.16em] text-floral-rose/75">
                04.06.2024
              </div>

              <h2 className="mb-5 font-playfair text-4xl text-warm-brown">
                {letterData.title}
              </h2>
              <FloralDivider className="mb-8 justify-start" />

              <div>
                {letterData.content.split('\n').map((paragraph, index) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;

                  return (
                    <p key={`${trimmed}-${index}`} className="mb-4 font-poppins text-base leading-relaxed text-warm-brown/82 md:text-lg">
                      {trimmed}
                    </p>
                  );
                })}
              </div>

              <div className="mt-10 text-right">
                <p className="mb-1 font-playfair text-xl italic text-warm-brown">
                  {letterData.closing}
                </p>
                <p className="font-playfair text-2xl font-bold text-warm-brown">
                  {letterData.author}
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsOpen(false)}
                className="mt-8 rounded-lg border border-blush/45 bg-white/60 px-5 py-3 font-poppins text-xs font-bold uppercase tracking-[0.16em] text-warm-brown/65 transition-colors hover:text-warm-brown"
              >
                Tutup surat
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default LetterSection;
