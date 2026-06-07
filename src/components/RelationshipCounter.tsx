import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { relationshipConfig } from '../data/config';
import { FloralDivider, PeonyBloom, WhiteRose } from './FloralElements';

const RelationshipCounter = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const start = new Date(relationshipConfig.anniversaryDate.replace(/-/g, '/')).getTime();
      const now = new Date().getTime();
      const difference = now - start;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeItems = [
    { label: 'Hari', value: timeLeft.days },
    { label: 'Jam', value: timeLeft.hours },
    { label: 'Menit', value: timeLeft.minutes },
    { label: 'Detik', value: timeLeft.seconds },
  ];

  return (
    <section className="relative overflow-hidden section-shell px-4 py-24">
      <PeonyBloom size={170} className="absolute left-8 top-10 opacity-20" />
      <WhiteRose size={130} className="absolute bottom-10 right-8 opacity-30" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-blush/45 text-floral-rose">
            <Heart size={26} fill="currentColor" />
          </div>
          <h2 className="mb-5 font-playfair text-3xl italic text-warm-brown md:text-5xl">
            Waktu yang sudah kita lewati bersama
          </h2>
          <FloralDivider className="mb-10" />

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {timeItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-lg p-5 shadow-xl md:p-6"
              >
                <div className="mb-2 font-poppins text-4xl font-bold text-warm-brown md:text-5xl">
                  {item.value}
                </div>
                <div className="font-poppins text-xs font-bold uppercase tracking-[0.18em] text-floral-rose md:text-sm">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 font-poppins text-sm italic text-warm-brown/70 md:text-base"
          >
            Setiap detiknya tetap aku syukuri.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default RelationshipCounter;
