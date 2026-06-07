import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { videoData } from '../data/video';
import { SectionTransition } from './SectionTransition';
import { CasablancaLily, FloralDivider, PeonyBloom } from './FloralElements';

export const MemoryVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <SectionTransition className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden section-shell px-6 py-20">
      <PeonyBloom size={210} className="absolute -left-20 top-16 opacity-25" />
      <CasablancaLily size={200} className="absolute -right-20 bottom-16 rotate-12 opacity-25" />

      <div className="relative z-10 w-full max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="mb-3 font-poppins text-xs font-bold uppercase tracking-[0.22em] text-floral-rose">
            Pembuka kenangan
          </p>
          <h2 className="mb-4 font-playfair text-4xl tracking-tight text-warm-brown md:text-5xl">
            {videoData.title}
          </h2>
          <p className="mx-auto max-w-2xl font-poppins text-lg italic leading-relaxed text-warm-brown/70">
            {videoData.description}
          </p>
          <FloralDivider className="mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-lg border-[10px] border-white bg-black shadow-2xl"
        >
          <div className="aspect-video">
            <video
              ref={videoRef}
              src={videoData.videoUrl}
              poster={videoData.thumbnail}
              className="h-full w-full object-cover"
              onClick={togglePlay}
              onEnded={() => setIsPlaying(false)}
              playsInline
            />
          </div>

          <div
            className={`absolute inset-0 flex items-center justify-center bg-warm-brown/28 transition-opacity duration-500 ${
              isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
            }`}
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              onClick={togglePlay}
              className="soft-button flex h-20 w-20 items-center justify-center rounded-full"
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? <Pause size={30} /> : <Play size={30} className="ml-1" />}
            </motion.button>
          </div>

          <div className="pointer-events-none absolute inset-0 border border-blush/45" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-8 font-poppins text-sm italic text-warm-brown/55"
        >
          Scroll ke bawah untuk melihat timeline kenangan kita.
        </motion.p>
      </div>
    </SectionTransition>
  );
};
