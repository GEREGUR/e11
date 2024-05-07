const Footer = () => {
  return (
    <footer className="mt-24 grid gap-14 h-[25vh] w-full grid-cols-1 sm:grid-cols-2 bg-black p-4 sm:p-10 text-lg text-white">
      <ul className="flex flex-col gap-y-4">
        <li className="text-2xl">
          <h3 className="pb-6 border-b-2 border-white uppercase">Follow us</h3>
        </li>
        <li>er11.studio@gmail.com</li>
        <li>@er11studio</li>
      </ul>
      <div className="text-3xl text-white text-end font-bold">ER11</div>
    </footer>
  );
};

export default Footer;
