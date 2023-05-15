import avatar from "./../../assets/profilepicture.jpeg";
import { motion } from "framer-motion";

export function Home() {
  return (
    <motion.div
      className="flex fixed h-[calc(100%-64px)] lg:h-full w-full justify-center md:p-8 p-4"
      initial={{ translateX: "100vw" }}
      animate={{ translateX: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ translateX: "100vw" }}>
      <div className="flex flex-col md:flex-row h-full max-w-5xl items-center justify-center">
        <img src={avatar} alt="My photo" className="h-48 w-48 rounded-full" />
        <div className="md:ml-4">
          <h1 className="text-5xl font-bold text-text">Hello, I'm Kalif</h1>
          <p className="text-3xl text-text">
            I'm a 15-year-old front-end web developer.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
