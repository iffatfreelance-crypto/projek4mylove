import { motion } from 'framer-motion';
import { timelineData } from '../data/timeline';
import { SectionTransition } from './SectionTransition';
import { FloralDivider, PeonyBloom, WhiteRose } from './FloralElements';

export const TimelineSection = () => {
  return (
    <SectionTransition className="relative overflow-hidden section-shell px-6 py-24">
      <PeonyBloom size={190} className="absolute -right-20 top-24 opacity-20" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-poppins text-xs font-bold uppercase tracking-[0.22em] text-floral-rose">
            Timeline
          </p>
          <h2 className="mb-5 font-playfair text-4xl text-warm-brown md:text-5xl">Perjalanan Kita</h2>
          <FloralDivider />
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-transparent via-blush to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {timelineData.map((item, index) => {
              const imageClass =
                index % 2 === 0
                  ? 'md:col-start-1 md:row-start-1'
                  : 'md:col-start-3 md:row-start-1';
              const contentClass =
                index % 2 === 0
                  ? 'md:col-start-3 md:row-start-1 md:text-left'
                  : 'md:col-start-1 md:row-start-1 md:text-right';

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-90px' }}
                  className="relative grid gap-6 pl-14 md:grid-cols-[1fr_72px_1fr] md:items-center md:gap-0 md:pl-0"
                >
                  <div className="absolute left-0 top-7 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-blush/40 bg-cream shadow-lg md:left-1/2 md:-translate-x-1/2">
                    <WhiteRose size={34} />
                  </div>

                  <div className={imageClass}>
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-lg border-[8px] border-white bg-white shadow-xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-warm-brown/38 via-transparent to-transparent opacity-75" />
                      <div className="absolute left-4 top-4 rounded-full bg-white/78 px-3 py-1 font-poppins text-[11px] font-bold uppercase tracking-[0.12em] text-floral-rose backdrop-blur-sm">
                        {item.date}
                      </div>
                    </div>
                  </div>

                  <div className={`${contentClass} space-y-4`}>
                    <div className="inline-flex rounded-full border border-blush/35 bg-white/58 px-4 py-1 font-poppins text-xs font-bold uppercase tracking-[0.16em] text-floral-rose">
                      {item.date}
                    </div>
                    <h3 className="font-playfair text-3xl text-warm-brown">{item.title}</h3>
                    <p className="font-poppins leading-relaxed text-warm-brown/70">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionTransition>
  );
};
