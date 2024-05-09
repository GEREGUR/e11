import { Chakra_Petch } from "next/font/google";

const chackra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const Text = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <article className="text-white flex flex-col items-center justify-center tracking-tight px-2 sm:px-6 py-12 max-w-prose text-2xl">
        <h2 className="text-6xl py-10">
          About{" "}
          <span className=" bg-gradient-to-r from-red-600 via-red-700 to-red-500 inline-block text-transparent bg-clip-text">
            Me
          </span>
        </h2>
        <p className="h-auto w-full tracking-tight items-center justify-center text-center">
          Hi! My name is Egor Rubailo and I'm mostly known as a fleenance
          frontend developer from Moscow who is passionate about optimization
          and UX/UI. Over the time I developed a skill set in a range of
          technologies and frameworks, including{" "}
          <span className=" bg-gradient-to-r from-red-600 via-red-700 to-red-800  inline-block text-transparent bg-clip-text">
            NEXT.JS
          </span>
          ,{" "}
          <span className=" bg-gradient-to-r from-red-600 via-red-700 to-red-800 tinline-block text-transparent bg-clip-text">
            React
          </span>{" "}
          and{" "}
          <span className=" bg-gradient-to-r from-red-600 via-red-700 to-red-800  inline-block text-transparent bg-clip-text">
            Tailwind
          </span>{" "}
          where I really value clean and readable code.
        </p>
      </article>
    </div>
  );
};
