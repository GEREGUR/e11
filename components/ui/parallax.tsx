'use client';
import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const Parallax = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 200, damping: 50, bounce: 100 };

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.1], [0, 1]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-470, 0]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="min-h-full py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] text-neutral-200 bg-neutral-900"
    >
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
        <h1 className="text-2xl md:text-7xl font-bold">E11®</h1>
        <p className="max-w-2xl text-base md:text-xl">Testing parallax</p>
      </div>
      <motion.div
        style={{
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row space-x-20 my-20">
          <div className="bg-red-500 h-96 w-3/5 mx-auto" />
        </motion.div>
      </motion.div>
    </div>
  );
};
