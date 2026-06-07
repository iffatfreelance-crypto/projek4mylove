import { motion } from 'framer-motion';
import { galleryData } from '../data/gallery';
import { FloralDivider, PeonyBloom, WhiteRose } from './FloralElements';

const rotations = ['-2.5deg', '1.8deg', '-1deg', '2.2deg', '-1.8deg', '1.2deg'];

const GallerySection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden section-shell px-4 py-24">
      <PeonyBloom size={210} className="absolute -left-20 top-20 opacity-20" />
      <WhiteRose size={140} className="absolute -right-12 bottom-24 opacity-30" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 font-poppins text-xs font-bold uppercase tracking-[0.22em] text-floral-rose">
            Scrapbook
          </p>
          <h2 className="mb-5 font-playfair text-4xl text-warm-brown md:text-5xl">
            Our Sweet Memories
          </h2>
          <FloralDivider />
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {galleryData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div
                className="relative overflow-hidden rounded-lg border-[10px] border-white bg-white pb-14 shadow-xl transition-shadow duration-300 group-hover:shadow-2xl"
                style={{ transform: `rotate(${rotations[index % rotations.length]})` }}
              >
                <div className="absolute left-1/2 top-3 z-10 h-7 w-24 -translate-x-1/2 -rotate-2 rounded-sm bg-butter/75 shadow-sm" />
                <div className="aspect-square overflow-hidden rounded-md bg-sky/25">
                  <img
                    src={item.url}
                    alt={item.caption}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <p className="absolute bottom-5 left-5 right-5 text-center font-poppins text-sm italic leading-relaxed text-warm-brown/78">
                  {item.caption}
                </p>
              </div>

              <div className="pointer-events-none absolute -right-3 -top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <WhiteRose size={58} />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="font-playfair text-2xl italic text-warm-brown">
            And many more beautiful days to keep.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
