import Image from "next/image";
import data from "../data/teamData.json";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface TeamMember {
  image: string;
  name: string;
  description: string;
  about: string;
}

export default function Carousel() {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current)
      setWidth(
        carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth
      );
  }, []);

  return (
    <motion.div
      ref={carouselRef}
      className="cursor-grab overflow-hidden bg-red-500 w-full"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-10"
      >
        {data.members.map((teamMember: TeamMember, index: number) => {
          return (
            <article
              key={index}
              className="bg-indigo-300 h-[500px] min-w-[300px] flex flex-col items-center justify-center gap-5 px-7 py-3"
            >
              <Image src={teamMember.image} width={100} height={100} alt="" />
              <h1>{teamMember.name}</h1>
              <p>{teamMember.description}</p>
              <p>{teamMember.about}</p>
            </article>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
