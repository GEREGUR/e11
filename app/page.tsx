"use client";

import { EvervaultCard } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import { BentoGrid, BentoGridItem } from "@/components/ui/grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Chakra_Petch } from "next/font/google";
import { TextGenerateEffect } from "@/components/ui/text-generate";

const chackra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface SkeletonProp {
  title?: string;
  bgColor?: string;
}
const Skeleton = ({ title, bgColor }: SkeletonProp) => (
  <div
    className={`flex items-center justify-center uppercase text-4xl font-medium h-full min-h-[6rem] w-full flex-1 rounded-xl ${bgColor}`}
  >
    {title}
  </div>
);

const items = [
  {
    title: "E-commerce shop",
    description: "Next, JS, Tanstack Query, Swiper, Framer Motion",
    header: (
      <Skeleton
        title="CASHER"
        bgColor="bg-gradient-to-r from-amber-500 to-pink-500"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Kanban feature for an app",
    description: "React, TS, Framer Motion",
    header: (
      <Skeleton
        title="Kanban"
        bgColor="bg-gradient-to-r from-red-300 via-red-500 to-red-600"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Psychological Test",
    description: "Next, Next-auth, MongoDB, Mongoose",
    header: (
      <Skeleton
        title="TYPL"
        bgColor="bg-gradient-to-r from-amber-200 to-amber-600"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Admin Dasboard",
    description: "Next, TS, MUI",
    header: (
      <Skeleton
        title="Berry Dashboard"
        bgColor="bg-gradient-to-r from-red-500 to-orange-500"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Platfrom for translators",
    description: "React, ShadCN, Tanstack Query",
    header: (
      <Skeleton
        title="CNII"
        bgColor="bg-gradient-to-r from-rose-400 to-red-500"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Admin dashboard",
    description: "Next, TS, ShadCN",
    header: (
      <Skeleton
        title="EcomVue"
        bgColor="bg-gradient-to-r from-pink-500 to-rose-500"
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "E-commerce shop",
    description: "Next, TS, Swiper, Framer Motion (in dev)",
    header: (
      <Skeleton
        title="Social Market"
        bgColor="bg-gradient-to-r from-amber-200 to-orange-700"
      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

const words = `NEXT.js Tailwind React Typescript Framer-motion Styled Components JavaScript Node.js Tanstack Query&Router MongoDB Drizzle`;

export default function Home() {
  return (
    <main className={chackra.className}>
      <div
        className="relative mx-auto mt-2 flex flex-col items-center"
        style={{ height: "95vh" }}
      >
        <EvervaultCard text="Egor Rubailo"></EvervaultCard>
      </div>
      <Text />
      <div className="w-full text-center">
        <p className="bg-gradient-to-r from-red-500 to-orange-500 inline-block text-transparent bg-clip-text text-6xl py-12">
          Projects
        </p>
      </div>
      <BentoGrid className="mx-auto max-w-screen p-2 sm:p-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
      <p className="text-6xl text-center">
        My{" "}
        <span className=" bg-gradient-to-r from-red-500 to-orange-500 inline-block text-transparent bg-clip-text">
          Tech Stack
        </span>
      </p>
      <div className="flex flex-row text-center self-center w-full">
        <TextGenerateEffect words={words} className="text-white" />
      </div>
      <Accordion type="single" collapsible className="p-2 sm:p-10 text-white">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text text-lg">
            Yes. It is.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text text-lg">
            Yes. Of course.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text text-lg">
            Yes. For sure.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
