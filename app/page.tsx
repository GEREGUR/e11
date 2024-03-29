

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
import Footer from "@/components/ui/footer";
// import Team from "@/components/ui/team-grid";
import { Chakra_Petch } from "next/font/google";

const chackra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['400', '700'],
})
const Skeleton = () => (
  <div className="flex h-full min-h-[6rem] w-full flex-1 rounded-xl bg-gradient-to-br from-pink-300 to-red-700"></div>
);

const items = [
  {
    title: "360 Degree Assignment",
    description: "Explore personal pros & cons with your team",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Worlink Auto",
    description: "Discover the beauty of Chinese auto.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Social Market",
    description: "Visualize the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

export default function Home() {
  return (
    <main className={chackra.className}>
      <div className="bg-black">
        <div
          className="relative mx-auto mt-2 flex flex-col items-start p-6"
          style={{ height: "95vh" }}
        >
          <EvervaultCard text="ER11"></EvervaultCard>
        </div>
        <Text />
        <BentoGrid className="mx-auto max-w-full p-2 sm:p-10">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            ></BentoGridItem>
          ))}
        </BentoGrid>
        {/* <div className="mx-2 sm:mx-10">
          <Team />
        </div> */}
        <Accordion type="single" collapsible className="p-2 mt-24 sm:p-10 text-white">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It is.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>Yes. Of course.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>Yes. For sure.</AccordionContent>
          </AccordionItem>
        </Accordion>
        <Footer />
      </div>
    </main>
  );
}
