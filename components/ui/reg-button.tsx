import { useRef, useState } from "react";
import { motion } from "framer-motion";

const Example = () => {
  return <FollowButton />;
};

const TARGET_TEXT = "Follow us";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#9$%^&()2:{};|,1.<>/?";

const FollowButton = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="bg-blacks group relative overflow-hidden rounded-lg px-[0.1rem] py-[0.1rem] font-sans font-medium uppercase text-white transition-colors hover:text-red-600 "
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#bd0000_0%,#460000_50%,#BD0000_100%)]" />
      <div className="relative z-10 flex h-full w-full items-center gap-2 rounded-lg bg-black px-8 py-4">
        <span className="md:text-xl">{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="absolute inset-0 z-10 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-red-700/100 to-blue-400/0 to-60% opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default Example;
