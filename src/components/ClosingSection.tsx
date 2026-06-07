import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { relationshipConfig } from '../data/config';
import { Bouquet, FloralDivider, PeonyBloom, WhiteRose } from './FloralElements';

const ClosingSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pastel-garden-gradient px-4 py-20">
      <div className="absolute inset-0 paper-texture opacity-35" />
      <PeonyBloom size={250} className="absolute -bottom-20 -left-20 opacity-30" />
      <WhiteRose size={160} className="absolute right-10 top-10 opacity-35" />

      <div className="relative z-10 w-full max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass-card relative overflow-hidden rounded-lg p-8 shadow-2xl md:p-14"
        >
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="mx-auto mb-8 flex justify-center"
          >
            <Bouquet className="scale-90" />
          </motion.div>

          <FloralDivider className="mb-7" />

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-7 font-playfair text-4xl leading-tight text-warm-brown md:text-6xl"
          >
            Happy 2nd Anniversary,
            <span className="mt-2 block italic text-floral-rose">{relationshipConfig.partnerName}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10 font-poppins text-lg italic leading-relaxed text-warm-brown/78 md:text-xl"
          >
            "{relationshipConfig.secretMessage}"
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blush/45 text-floral-rose shadow-lg">
              <Heart size={30} fill="currentColor" />
            </div>
            <p className="font-playfair text-xl font-bold uppercase tracking-[0.18em] text-warm-brown">
              Always & Forever
            </p>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          viewport={{ once: true }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mx-auto mt-10 inline-flex items-center gap-2 rounded-lg border border-blush/40 bg-white/55 px-5 py-3 font-poppins text-xs font-bold uppercase tracking-[0.14em] text-warm-brown/65 backdrop-blur-md transition-colors hover:text-warm-brown"
        >
          Relive the memories
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </section>
  );
};

export default ClosingSection;
