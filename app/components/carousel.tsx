import Image from "next/image";
import data from "../data/teamData.json";
import { motion, useAnimation } from "framer-motion";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

interface TeamMember {
  image: string;
  name: string;
  description: string;
  about: string;
}

export default function Carousel() {
  return (
    <motion.div className="flex gap-10 w-full flex-col items-center justify-center md:flex-row flex-wrap">
      {data.members.map((teamMember: TeamMember, index: number) => {
        return (
          <motion.article
            key={index}
            className="bg-white w-[250px] flex flex-col items-center gap-5 px-6 py-5 rounded-md"
          >
            <div
              className="h-[70px] w-[70px] rounded-full bg-cover bg-center"
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

            <div className="flex items-center justify-center gap-10">
              <FaLinkedin className="h-6 w-6 hover:cursor-pointer" />
              <FaGithubSquare className="h-6 w-6 hover:cursor-pointer" />
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
