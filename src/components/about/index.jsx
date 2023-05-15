import { motion } from "framer-motion";

export function About() {
  return (
    <motion.div
      className="absolute flex w-full h-[calc(100%-64px)] lg:h-full md:p-8 p-4 md:items-center justify-center"
      initial={{ translateX: "100vw" }}
      animate={{ translateX: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ translateX: "100vw" }}>
      <div className="max-w-5xl">
        <h1 className="text-center text-5xl font-bold text-text">About</h1>
        <p className="mt-4 text-justify text-xl text-text">
          Hello there, I'm a web developer, competitive programmer, and a
          soon-to-be high schooler.
        </p>
        <p className="mt-4 text-justify text-xl text-text">
          I was born in Bandung, Indonesia. But due to my dad's work, we moved
          to South Tangerang when I was 5. Currently, I'm in grade 9 at SMP
          Labschool Kebayoran.
        </p>
        <p className="mt-4 text-justify text-xl text-text">
          When I was 14, I had an opportunity to learn web development from{" "}
          <a href="https://educourse.id">Educourse.id</a>. My teachers there
          were amazed on how fast I can learn Javascript. Since then, I keep
          learning about web development. Not only that, I also learn about
          competitive programming.
        </p>
        <p className="mt-4 text-justify text-xl text-text pb-4">
          My days are usually filled with a lot of school stuff. But when I have
          a free time, I usually fill it with playing games, working out,
          programming, watching anime, or just scrolling through the internet.
        </p>
      </div>
    </motion.div>
  );
}
