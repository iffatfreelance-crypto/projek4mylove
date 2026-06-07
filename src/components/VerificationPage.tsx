import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Heart } from 'lucide-react';
import { relationshipConfig } from '../data/config';
import { SectionTransition } from './SectionTransition';
import { CasablancaLily, FloralDivider, PeonyBloom, WhiteRose } from './FloralElements';

export const VerificationPage = ({ onSuccess }: { onSuccess: () => void }) => {
  const [date, setDate] = useState('');
  const [error, setError] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (date === relationshipConfig.anniversaryDate) {
      setIsCorrect(true);
      setTimeout(onSuccess, 2600);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <SectionTransition className="flex min-h-screen items-center justify-center overflow-hidden pastel-garden-gradient p-6">
      <PeonyBloom size={210} className="absolute -left-20 top-10 opacity-30" />
      <CasablancaLily size={220} className="absolute -right-24 bottom-8 rotate-12 opacity-30" />

      <motion.div
        layout
        className="glass-card relative z-10 w-full max-w-md overflow-hidden rounded-lg p-7 text-center shadow-xl md:p-9"
      >
        <div className="absolute -right-10 -top-10 opacity-35">
          <WhiteRose size={120} />
        </div>

        <AnimatePresence mode="wait">
          {!isCorrect ? (
            <motion.div
              key="verification-form"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              className="relative"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-blush/50 bg-white/65 text-floral-rose">
                <Heart size={26} fill="currentColor" />
              </div>

              <h2 className="mb-3 font-playfair text-2xl leading-tight text-warm-brown">
                Website ini dibuat khusus untuk seseorang yang sangat spesial
              </h2>
              <p className="mb-6 font-poppins text-sm leading-relaxed text-warm-brown/70">
                Sebelum masuk ke taman kenangan ini, aku ingin memastikan kamu masih ingat hari pertama kita.
              </p>

              <FloralDivider className="mb-7" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2 text-left">
                  <label htmlFor="anniversary-date" className="block font-poppins text-sm font-medium text-warm-brown">
                    Masukkan tanggal pertama kita jadian
                  </label>
                  <div className="relative">
                    <Calendar className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-floral-rose" size={18} />
                    <input
                      type="date"
                      id="anniversary-date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-lg border border-blush/45 bg-white/75 py-4 pl-12 pr-4 font-poppins text-warm-brown outline-none transition-all focus:border-floral-rose focus:ring-4 focus:ring-blush/25"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="soft-button w-full rounded-lg px-6 py-4 font-poppins text-sm font-bold uppercase tracking-[0.16em] transition-all"
                >
                  Masuk
                </motion.button>
              </form>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6 rounded-lg border border-blush/35 bg-white/55 p-4"
                  >
                    <p className="font-poppins text-sm italic text-warm-brown">
                      Hmm... coba diingat pelan-pelan ya.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="verification-success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative py-8"
            >
              <motion.div
                animate={{ scale: [1, 1.12, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blush/45 text-floral-rose"
              >
                <Heart size={38} fill="currentColor" />
              </motion.div>
              <h2 className="mb-4 font-playfair text-3xl text-warm-brown">Benar</h2>
              <div className="space-y-3 font-poppins text-warm-brown/78">
                <p className="italic">"Semuanya dimulai pada hari itu..."</p>
                <p>Dan hari ini kita merayakan perjalanan indah yang masih terus tumbuh.</p>
              </div>
              <FloralDivider className="mt-8" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </SectionTransition>
  );
};
