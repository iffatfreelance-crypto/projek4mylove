import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { relationshipConfig } from '../data/config';
import { X, Heart } from 'lucide-react';

export const SecretSunflower = () => {
  const [isOpen, setIsOpen] = useState(false);

  const FloatingHeart = ({ delay }: { delay: number }) => (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: -100, opacity: [0, 1, 0] }}
      transition={{ duration: 2, delay, repeat: Infinity }}
      className="absolute text-red-400"
    >
      <Heart size={20} fill="currentColor" />
    </motion.div>
  );

  return (
    <>
      {/* The Hidden Trigger */}
      <motion.div 
        whileHover={{ scale: 1.2, rotate: 10 }}
        className="fixed bottom-6 right-6 z-40 cursor-pointer opacity-30 hover:opacity-100 transition-opacity"
        onClick={() => setIsOpen(true)}
      >
        <div className="bg-sunflower p-3 rounded-full shadow-lg border-2 border-white">
          <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="15" fill="#8B5E3C" />
            {[...Array(12)].map((_, i) => (
              <path key={i} d="M50 35C50 35 55 20 50 5C45 20 50 35 50 35Z" fill="white" transform={`rotate(${i * 30} 50 50)`} />
            ))}
          </svg>
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full relative shadow-2xl overflow-hidden"
            >
              <button 
                className="absolute top-4 right-4 text-warm-brown/30 hover:text-warm-brown"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>

              <div className="flex justify-center mb-8 relative">
                 <div className="relative">
                   <span className="text-6xl">🌻</span>
                   {[...Array(5)].map((_, i) => (
                     <FloatingHeart key={i} delay={i * 0.4} />
                   ))}
                 </div>
              </div>

              <h3 className="text-2xl font-playfair text-warm-brown text-center mb-6">Pesan Rahasia Untukmu ✨</h3>
              
              <div className="bg-sunflower/5 p-6 rounded-2xl border border-dashed border-sunflower/30">
                <p className="text-warm-brown font-poppins leading-relaxed italic text-center">
                  "{relationshipConfig.secretMessage}"
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                 <motion.div 
                   animate={{ scale: [1, 1.1, 1] }}
                   transition={{ duration: 1.5, repeat: Infinity }}
                   className="text-sunflower"
                 >
                   <Heart size={32} fill="currentColor" />
                 </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
