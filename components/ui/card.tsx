'use client'

import { useMotionValue } from "framer-motion";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Example from "./reg-button";

// import { MdKeyboardArrowDown } from "react-icons/md";

export const EvervaultCard = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      let str = generateRandomString(10500);
      setRandomString(str);
    }, 50); // Update every 10 milliseconds

    return () => clearInterval(interval);
  }, []);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    setRandomString(str);
  }  


  // console.log(width)
  // console.log(height)
  // const [scrolled, setScrolled] = useState(false)

  return (
    <div
      className={cn(
        "relative flex aspect-square h-full w-full items-center justify-center bg-transparent",
        className,
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
          <div className="relative flex h-44  w-44 items-center justify-center rounded-full text-4xl font-bold text-white">
            <div className="absolute h-full w-full rounded-full blur-sm dark:bg-black/[0.8]" />
            <span className="z-20 select-none text-8xl text-white md:text-9xl">
              {text}
            </span>
          </div>
          <Example />
          {/* <MdKeyboardArrowDown
            className="duration-2000 absolute bottom-[-6em] animate-bounce text-white"
            size={40}
          /> */}
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString }: any) {
  

  const [optionalRender, setOptionalRender] = useState(250) 
  // const [clicked, setClicked] = useState(false)
  // clicked ? setOptionalRender(0) : null
  

 useEffect(()=>{
  if (window.innerWidth <= 768) {
    setOptionalRender(1500);
  }

 }, [])
  

  let maskImage = useMotionTemplate`radial-gradient(${optionalRender}px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };


  return (
    <div 
    className="pointer-events-none"
    >
      <div className="absolute inset-0 rounded-2xl group-hover/card:opacity-100"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 opacity-0  backdrop-blur-xl transition duration-500 group-hover/card:opacity-100"
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
