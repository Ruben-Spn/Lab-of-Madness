import Image from "next/image";
import data from "../data/teamData.json";
import { animate, motion, useAnimation } from "framer-motion";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

interface TeamMember {
  image: string;
  name: string;
  description: string;
  about: string;
}

const fadeInView = {
  initial: {
    opacity: 0.5,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,

    transition: { duration: 0.75, delay: 0.25, ease: "easeInOut" },
  },
};

export default function Carousel() {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const animateCard = useAnimation();

  useEffect(() => {
    if (!carouselRef.current) {
      return;
    }
    setWidth(
      carouselRef.current?.offsetWidth - carouselRef.current?.scrollWidth
    );
  }, []);
  return (
    <motion.div className="overflow-hidden cursor-grab w-full relative py-10">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: width - 50 }}
        className="flex  gap-20 w-full h-full"
        dragElastic={0.1}
        ref={carouselRef}
      >
        {data.members.map((teamMember: TeamMember, index: number) => {
          return (
            <motion.article
              key={index}
              className="bg-white min-h-[500px] min-w-[300px] flex flex-col items-center gap-5 px-6 py-5 rounded-md"
              variants={fadeInView}
              initial="initial"
              whileInView="animate"
            >
              <div
                className="h-[100px] w-[100px] rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${teamMember.image})` }}
              ></div>

              <div className="flex flex-col items-center justify-center gap-2">
                <h1 className="font-roboto text-lg">{teamMember.name}</h1>
                <p className="font-roboto text-xs text-red-700/70">
                  {teamMember.description}
                </p>
              </div>

              <motion.div className="flex flex-col items-center justify-center">
                <p className="font-roboto text-xs text-center">
                  {teamMember.about}
                </p>
              </motion.div>

              <div className="flex items-center w-full px-4 gap-4">
                <hr className="h-[4px] w-full px-2 border-red-700/30" />
                <div className="flex gap-4">
                  <FaLinkedin className="h-6 w-6 hover:cursor-pointer" />
                  <FaGithubSquare className="h-6 w-6 hover:cursor-pointer" />
                </div>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
