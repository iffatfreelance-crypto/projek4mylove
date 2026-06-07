import { motion } from 'framer-motion';

type FlowerProps = {
  size?: number;
  className?: string;
};

export const PeonyBloom = ({ size = 120, className = '' }: FlowerProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <g opacity="0.98">
      {[0, 45, 90, 135].map((rotation) => (
        <ellipse
          key={rotation}
          cx="60"
          cy="60"
          rx="24"
          ry="46"
          fill="#F6B8D0"
          opacity="0.78"
          transform={`rotate(${rotation} 60 60)`}
        />
      ))}
      {[22, 67, 112, 157].map((rotation) => (
        <ellipse
          key={rotation}
          cx="60"
          cy="60"
          rx="20"
          ry="38"
          fill="#FAD7E5"
          opacity="0.9"
          transform={`rotate(${rotation} 60 60)`}
        />
      ))}
      <circle cx="60" cy="60" r="22" fill="#F8C8DC" />
      <circle cx="60" cy="60" r="12" fill="#FFE8A7" />
      <circle cx="56" cy="56" r="3" fill="#D982A8" opacity="0.55" />
      <circle cx="64" cy="58" r="3" fill="#D982A8" opacity="0.45" />
      <circle cx="61" cy="66" r="2.5" fill="#D982A8" opacity="0.5" />
    </g>
  </svg>
);

export const WhiteRose = ({ size = 90, className = '' }: FlowerProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="50" cy="50" r="38" fill="#F8FFF9" />
    <path d="M50 18C65 28 71 42 62 56C51 52 45 43 50 18Z" fill="#FFFFFF" />
    <path d="M75 44C69 62 57 70 41 63C43 50 54 42 75 44Z" fill="#F2F8F4" />
    <path d="M46 76C29 68 22 56 31 41C44 45 52 56 46 76Z" fill="#FFFFFF" />
    <path d="M24 48C32 31 46 25 60 34C55 47 44 54 24 48Z" fill="#F4FBF6" />
    <circle cx="50" cy="50" r="16" fill="#FFF9EF" />
    <path d="M42 49C46 41 56 39 62 46C58 54 48 58 42 49Z" fill="#FFFFFF" />
    <path d="M47 55C52 48 61 49 65 56C59 63 51 64 47 55Z" fill="#F3F8F5" />
  </svg>
);

export const CasablancaLily = ({ size = 130, className = '' }: FlowerProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 140 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <g opacity="0.96">
      <path d="M70 70C48 54 42 28 54 8C72 27 80 48 70 70Z" fill="#FAD5E2" />
      <path d="M70 70C92 54 98 28 86 8C68 27 60 48 70 70Z" fill="#F8BFD4" />
      <path d="M70 70C49 73 26 60 16 38C42 36 61 47 70 70Z" fill="#F8C8DC" />
      <path d="M70 70C91 73 114 60 124 38C98 36 79 47 70 70Z" fill="#FADCE8" />
      <path d="M70 70C50 90 47 115 62 132C76 109 79 88 70 70Z" fill="#F9C7DB" />
      <path d="M70 70C90 90 93 115 78 132C64 109 61 88 70 70Z" fill="#F7B7CF" />
      <circle cx="70" cy="70" r="7" fill="#FFF3B0" />
      {[0, 45, 90, 135, 180].map((rotation) => (
        <path
          key={rotation}
          d="M70 70C70 58 72 48 76 38"
          stroke="#C96F93"
          strokeWidth="2"
          strokeLinecap="round"
          transform={`rotate(${rotation} 70 70)`}
          opacity="0.45"
        />
      ))}
    </g>
  </svg>
);

export const LeafSprig = ({ size = 120, className = '' }: FlowerProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path d="M24 96C50 76 70 50 94 20" stroke="#87BFA3" strokeWidth="5" strokeLinecap="round" />
    <ellipse cx="38" cy="78" rx="12" ry="20" fill="#A8D5BA" transform="rotate(-48 38 78)" />
    <ellipse cx="56" cy="62" rx="11" ry="18" fill="#8FC6AA" transform="rotate(38 56 62)" />
    <ellipse cx="72" cy="44" rx="10" ry="18" fill="#B7DEC6" transform="rotate(-46 72 44)" />
    <ellipse cx="88" cy="28" rx="9" ry="16" fill="#96CDAF" transform="rotate(42 88 28)" />
  </svg>
);

export const Bouquet = ({ className = '' }: { className?: string }) => (
  <div className={`relative h-44 w-56 ${className}`} aria-hidden="true">
    <motion.div
      animate={{ y: [0, -8, 0], rotate: [-2, 1, -2] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute left-2 top-10"
    >
      <LeafSprig size={130} className="rotate-[-12deg]" />
    </motion.div>
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute left-12 top-2"
    >
      <PeonyBloom size={132} />
    </motion.div>
    <motion.div
      animate={{ y: [0, -7, 0], rotate: [2, -1, 2] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute right-2 top-24"
    >
      <WhiteRose size={86} />
    </motion.div>
    <motion.div
      animate={{ y: [0, -10, 0], rotate: [-4, 2, -4] }}
      transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute right-0 top-8"
    >
      <CasablancaLily size={118} />
    </motion.div>
  </div>
);

export const FloralDivider = ({ className = '' }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
    <span className="h-px w-16 bg-gradient-to-r from-transparent to-blush" />
    <WhiteRose size={28} />
    <span className="h-px w-16 bg-gradient-to-l from-transparent to-blush" />
  </div>
);
