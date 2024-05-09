import { Instagram, Mail, Send } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="grid gap-14 h-[25vh] w-full grid-cols-1 sm:grid-cols-2 bg-black p-2 sm:p-10 text-lg text-white">
      <ul className="flex flex-col gap-y-4">
        <li className="text-2xl">
          <h3 className="pb-6 border-b-2 border-white uppercase">Contact Me</h3>
        </li>
        <li className="flex flex-row justify-start items-center gap-2">
          <Mail />
          <Link href="mailto:georgerubaylo@gmail.com">
            georgerubaylo@gmail.com
          </Link>
        </li>
        <li className="flex flex-row justify-start items-center gap-2">
          <Send />
          <Link href={"https://t.me/geregur"}>@geregur</Link>
        </li>
        {/* <li className="flex flex-row justify-start items-center gap-2">
          <Instagram />
          <p>egor_rubailo.jsx</p>
        </li> */}
      </ul>
      <div className="text-3xl bg-gradient-to-r from-pink-500 to-rose-500 inline-block text-transparent bg-clip-text text-end font-bold">
        ER11
      </div>
    </footer>
  );
};

export default Footer;
