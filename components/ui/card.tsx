import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Example from "./reg-button";

// import { MdKeyboardArrowDown } from "react-icons/md";

export const EvervaultCard = ({
  text,
  subtext,
  className,
}: {
  text?: string;
  subtext?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      let str = generateRandomString(10500);
      setRandomString(str);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "relative flex aspect-square h-full w-full items-center justify-center bg-transparent",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card relative flex h-full w-full items-center justify-center overflow-hidden bg-transparent transition"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="relative flex flex-col h-44  w-auto items-center justify-center rounded-full text-4xl font-bold text-white">
            <div className="absolute h-full w-full rounded-full blur-sm dark:bg-black/[0.8]" />
            <span className="z-20 select-none text-4xl bg-gradient-to-r from-red-700 via-red-500 to-orange-500  inline-block text-transparent bg-clip-text md:text-9xl p-2">
              {text}
            </span>
          </div>
          <div className="mt-6">
            <Example />
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  const [optionalRender, setOptionalRender] = useState(250);

  useEffect(() => {
    if (window.innerWidth <= 480) {
      setOptionalRender(1000);
    }
  }, []);

  let maskImage = useMotionTemplate`radial-gradient(${optionalRender}px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl group-hover/card:opacity-100"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-700 to-orange-500 opacity-0  backdrop-blur-xl transition duration-500 group-hover/card:opacity-100"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 h-full whitespace-pre-wrap break-words font-mono text-xs font-bold text-white transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length * 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
