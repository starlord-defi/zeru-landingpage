'use client';

import { motion } from 'framer-motion';

export default function AnimatedHeading() {
  const text = 'Your Passport To';
  const text2 = 'Onchain Privileges';
  const words = text.split(' ');
  const words2 = text2.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring' as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div>
      <div className="md:text-5xl text-3xl font-semibold text-primary leading-tight">
        <motion.div variants={container} initial="hidden" animate="visible">
          {words.map((word, index) => (
            <span key={index} className="inline-block mr-2 sm:mr-3">
              <motion.span variants={child}>{word}</motion.span>
            </span>
          ))}
        </motion.div>
      </div>
      <div className="md:text-5xl text-3xl font-semibold text-cta leading-tight">
        <motion.div variants={container} initial="hidden" animate="visible">
          {words2.map((word, index) => (
            <span key={index} className="inline-block mr-2 sm:mr-3">
              <motion.span variants={child}>{word}</motion.span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
