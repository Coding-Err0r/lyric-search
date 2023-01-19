export default function Footer() {
  return (
    <p className="absolute bottom-0 w-full p-6 font-sans text-sm text-zinc-300 md:w-2/3 md:p-4 lg:w-1/2 ">
      Copyright ©️
      <a
        className="text-pink-200"
        href="https://github.com/XPro-Gamer-Rhine"
        target={"_blank"}
        rel="noreferrer"
      >
        RHINE
      </a>
      {" // "}
      <a
        className="text-pink-200"
        href="https://github.com/Coding-Err0r/lyric-search.git"
        target={"_blank"}
        rel="noreferrer"
      >
        Source
      </a>
    </p>
  );
}
