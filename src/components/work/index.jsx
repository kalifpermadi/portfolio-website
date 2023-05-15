import { WorkItem } from "./WorkItem";
import work1 from "./../../assets/work-1.jpg";
import work2 from "./../../assets/work-2.jpg";
import work3 from "./../../assets/work-3.jpg";
import { motion } from "framer-motion";

const workData = [
  {
    title: "I-GEN Website Redesign",
    image: work1,
    link: "https://i-gen.co.id/",
    imageAlt: "Current I-GEN website",
    description: "Redesigned I-GEN website using Wordpress",
  },
  {
    title: "Minecraft Style Portfolio Website",
    image: work2,
    link: "https://kalifpermadi.github.io/minecraft-portfolio-website/",
    imageAlt: "Portfolio Website with Minecraft style",
    description:
      "Another portfolio website that I created using Minecraft textures",
  },
  {
    title: "Python Bad Apple!! Terminal",
    image: work3,
    link: "https://github.com/kalifpermadi/bad-apple-terminal",
    imageAlt: "A Bad Apple!! frame in terminal",
    description:
      "The popular Bad Apple!! video converted into ASCII characters and printed in terminal",
  },
];

export function Work() {
  return (
    <motion.div
      className="absolute flex h-screen w-full justify-center md:p-8 p-4"
      initial={{ translateX: "100vw" }}
      animate={{ translateX: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ translateX: "100vw" }}
    >
      <div className="flex flex-col h-[calc(100%-64px)] lg:h-full lg:max-w-[calc(100dvw-128px)] md:justify-center">
        <h1 className="my-4 text-center text-5xl font-bold text-text">
          Projects & Work
        </h1>
        <p className="text-center text-xl text-text">
          Here are some of my favorite things I've ever created
        </p>
        <div className="flex flex-wrap justify-center">
          {workData.map((work) => (
            <WorkItem key={work.title} {...work} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
