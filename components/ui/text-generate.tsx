import { useEffect, useRef } from "react";
import { motion, stagger, useAnimation } from "framer-motion";
import { cn } from "@/utils/cn";
import { Chakra_Petch } from "next/font/google";

const chackra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const animationControls = useAnimation();
  const elementRef = useRef<HTMLDivElement>(null);
  let wordsArray = words.split(" ");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateWords();
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px" }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const animateWords = async () => {
    await animationControls.start("visible");
  };

  return (
    <div
      className={cn("font-light w-full flex justify-center", className)}
      ref={elementRef}
    >
      <div className="mt-4">
        <div className="text-white text-3xl leading-snug tracking-wide flex gap-8 flex-row w-full">
          <motion.div initial="hidden" animate={animationControls}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className="text-white opacity-0"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ delay: idx * 0.2 }}
              >
                <div className={chackra.className}>{word} </div>
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
