import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { relationshipConfig } from '../data/config';
import { SectionTransition } from './SectionTransition';
import { Bouquet, CasablancaLily, PeonyBloom, WhiteRose } from './FloralElements';

export const HeroSection = ({ onStart }: { onStart: () => void }) => {
  return (
    <SectionTransition className="relative flex min-h-screen items-center justify-center overflow-hidden pastel-garden-gradient px-6 py-16">
      <div className="absolute inset-0 paper-texture opacity-45" />
      <PeonyBloom size={260} className="absolute -left-24 bottom-12 opacity-30 blur-[0.2px]" />
      <CasablancaLily size={280} className="absolute -right-24 top-8 rotate-12 opacity-30" />
      <WhiteRose size={140} className="absolute left-[8%] top-[14%] opacity-45" />

      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
        className="pointer-events-none absolute left-1/2 top-[52%] z-0 -translate-x-1/2 -translate-y-1/2 opacity-95"
      >
        <Bouquet className="scale-[1.35] md:scale-[1.75]" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="mb-6 flex items-center gap-3 rounded-full border border-white/70 bg-white/55 px-4 py-2 text-floral-rose shadow-sm backdrop-blur-md">
            <Heart size={16} fill="currentColor" />
            <span className="font-poppins text-xs font-bold uppercase tracking-[0.22em] text-warm-brown/75">
              Untuk {relationshipConfig.partnerName}
            </span>
          </div>

          <h1 className="max-w-4xl font-playfair text-5xl leading-[0.98] text-warm-brown drop-shadow-sm md:text-7xl">
            Happy 2nd Anniversary
            <span className="mt-3 block italic text-floral-rose">Sayang</span>
          </h1>

          <p className="mt-8 max-w-xl font-poppins text-base leading-relaxed text-warm-brown/78 md:text-lg">
            Sebelum kita mengulang semua kenangan kecil yang paling manis, aku punya perjalanan lembut yang aku siapkan khusus buat kamu.
          </p>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onStart}
            className="soft-button mt-10 inline-flex items-center gap-3 rounded-lg px-8 py-4 font-poppins text-sm font-bold uppercase tracking-[0.16em] transition-all"
          >
            Mulai Perjalanan Kita
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-7 left-1/2 z-10 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-floral-rose to-transparent"
      />
    </SectionTransition>
  );
};
