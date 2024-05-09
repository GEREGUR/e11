import { Instagram, Mail, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="grid gap-14 h-[25vh] w-full grid-cols-1 sm:grid-cols-2 bg-black p-4 sm:p-10 text-lg text-white">
      <ul className="flex flex-col gap-y-4">
        <li className="text-2xl">
          <h3 className="pb-6 border-b-2 border-white uppercase">Contact Me</h3>
        </li>
        <li className="flex flex-row justify-start items-center gap-2">
          <Mail />
          <p>georgerubaylo@gmail.com</p>
        </li>
        <li className="flex flex-row justify-start items-center gap-2">
          <Send />
          <p>@geregur</p>
        </li>
        <li className="flex flex-row justify-start items-center gap-2">
          <Instagram />
          <p>egor_rubailo.jsx</p>
        </li>
      </ul>
      <div className="text-3xl text-white text-end font-bold">ER11</div>
    </footer>
  );
};

export default Footer;
