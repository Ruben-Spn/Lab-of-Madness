"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import Carousel from "./components/carousel";

const fadeInFromBottom = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: 1, ease: "easeInOut" },
};

const fadeInButtons = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: 3, ease: "easeInOut" },
};

const fadeInFromRight = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: 2, ease: "easeInOut" },
};
const fadeInFromLeft = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5, delay: 2, ease: "easeInOut" },
};

const fadeInView = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,

    transition: { duration: 0.75, delay: 0.25, ease: "easeInOut" },
  },
};

const fadeInViewLeft = {
  initial: {
    opacity: 0,
    x: -100,
    rotate: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    rotate: 5,
    transition: { duration: 0.75, delay: 1, ease: "easeInOut" },
  },
};

const fadeInViewRight = {
  initial: {
    opacity: 0,
    x: 100,
    rotate: 0,
  },
  animate: {
    opacity: 1,
    x: 0,
    rotate: -5,
    transition: { duration: 0.75, delay: 1, ease: "easeInOut" },
  },
};

export default function Home() {
  const animateOverlay = useAnimation();
  const animateButton2 = useAnimation();
  const animateButton = useAnimation();
  const scrollAnimation = useAnimation();
  const mainControls = useAnimation();

  const [isHovering, setIsHovering] = useState(false);
  const [isHovering2, setIsHovering2] = useState(false);

  const ref = useRef(null);
  const discoverRef = useRef(null);
  const teamRef = useRef(null);

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    setTimeout(() => {
      setInterval(() => {
        animateOverlay.start({
          opacity: Math.random(),
        });
      }, 50);
    }, 3000);
  }, []);

  useEffect(() => {
    isHovering
      ? animateButton.start({ height: "100%" })
      : animateButton.start({ height: 0 });

    isHovering2
      ? animateButton2.start({ height: "100%" })
      : animateButton2.start({ height: 0 });
  }, [isHovering, isHovering2]);

  const scrollToRef = (ref: any) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen max-w-screen relative">
      <div className="bg-black -z-[100] absolute w-full h-full inset-0"></div>
      <section
        id="banner"
        className="h-screen w-full bg-asset-banner-wide bg-cover bg-center flex items-center justify-center relative"
      >
        <div className="absolute sm:top-20 top-28 flex items-center blur-[0.5px] gap-3 px-10 sm:px-24">
          <motion.div {...fadeInFromBottom} className="z-10">
            <Image src="/assets/lab.svg" alt="Lab" width={200} height={200} />
          </motion.div>
          <motion.div className="flex flex-col items-center justify-center gap-3">
            <motion.div {...fadeInFromLeft} className="-z-10">
              <Image src="/assets/o.svg" alt="Lab" width={25} height={50} />
            </motion.div>
            <motion.div {...fadeInFromRight} className="-z-10">
              <Image src="/assets/f.svg" alt="Lab" width={25} height={50} />
            </motion.div>
          </motion.div>
          <motion.div {...fadeInFromBottom} className="z-10">
            <Image
              src="/assets/madness.svg"
              alt="Lab"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
        <motion.div
          className={` sm:min-w-[500px] h-full opacity-0 scale-110  bg-cover bg-center flex items-center justify-center bg-asset-banner-overlay`}
          animate={animateOverlay}
        >
          <div className="h-20 w-40 hover:cursor-pointer"></div>
        </motion.div>
        <motion.div
          className="absolute bottom-24 flex flex-col gap-10 sm:bottom-44 sm:gap-44 sm:flex-row"
          {...fadeInButtons}
        >
          <motion.div
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            whileHover={{ cursor: "pointer" }}
            onClick={() => scrollToRef(discoverRef)}
            onTap={() => scrollToRef(discoverRef)}
            className=" z-10  flex items-center justify-center relative sm:px-20 sm:py-6 sm:text-2xl px-20 py-4 text-xl border-[3px] sm:border-[4px] border-[#F6E8EA] text-[#F6E8EA] tracking-wider font-oswald shadow-2xl"
          >
            <p className="z-10">ONTDEK</p>

            <motion.div
              className="absolute w-full  bg-red-500  h-full -z-0 bottom-0"
              animate={animateButton}
              initial={{ height: 0, y: 0 }}
            ></motion.div>
            <div className="absolute h-full w-full bg-black/20 scale-110 blur-lg -z-[1]" />
          </motion.div>

          <motion.div
            onHoverStart={() => setIsHovering2(true)}
            onHoverEnd={() => setIsHovering2(false)}
            whileHover={{ cursor: "pointer" }}
            onClick={() => scrollToRef(teamRef)}
            onTap={() => scrollToRef(teamRef)}
            className=" z-10  flex items-center justify-center relative sm:px-20 sm:py-6 sm:text-2xl px-20 py-4 text-xl border-[3px] sm:border-[4px] border-[#F6E8EA] text-[#F6E8EA] tracking-wider font-oswald shadow-2xl"
          >
            <p className="z-10">HET TEAM</p>

            <motion.div
              className="absolute w-full  bg-red-500  h-full -z-0 bottom-0"
              animate={animateButton2}
              initial={{ height: 0, y: 0 }}
            ></motion.div>
            <div className="absolute h-full w-full bg-black/20 scale-110 blur-lg -z-[1]" />
          </motion.div>
        </motion.div>
      </section>

      <section
        ref={discoverRef}
        className=" gap-20 sm:px-28 py-40 flex flex-col items-center justify-center  text-[#F6E8EA] relative w-full min-h-screen"
      >
        <div className="absolute bg-gradient-to-t from-black to-transparent h-28 w-full -top-28"></div>
        <div className="absolute bg-gradient-to-t from-black to-transparent h-28 w-full top-0 rotate-180"></div>
        <div className="absolute inset-0 w-full h-full bg-asset-pattern bg-cover -z-50 blur-sm brightness-[0.2]"></div>
        <div className="flex items-center -space-x-8 w-full justify-center">
          <motion.div
            variants={fadeInViewRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className=" bg-asset-image1 bg-center h-[200px] w-[175px] sm:h-[400px] sm:w-[350px] bg-cover z-40 rounded-sm mt-8"
          ></motion.div>
          <motion.div
            variants={fadeInView}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className=" bg-asset-location bg-center h-[250px] w-[400px] sm:h-[500px] sm:w-[800px] bg-cover z-50  shadow-2xl shadow-black rounded-sm"
          ></motion.div>
          <motion.div
            variants={fadeInViewLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            className=" bg-asset-image2 bg-center h-[200px] w-[175px] sm:h-[400px] sm:w-[350px] bg-cover z-30 rounded-sm mt-8"
          ></motion.div>
        </div>
        <div className=" w-full px-10 flex flex-col items-center ">
          <h1 className="text-2xl inline-block font-roboto text-red-500 items-center justify-center flex text-center uppercase">
            Ontrafel de geheimen van de gestoorde professor
          </h1>
          <p className="font-roboto text-center inline-block mt-5 leading-relaxed md:px-52">
            Neem deel aan deze boeiende ervaring met één of twee vrienden en
            stap in de schoenen van chemiestudenten aan de hogeschool. Na school
            werkten jullie altijd samen aan extra projecten. Op een dag horen
            jullie vreemde geluiden uit het lokaal waar jullie leerkracht Victor
            Simeon vaak naartoe gaat. Nieuwsgierig geworden, besluiten jullie
            een kijkje te nemen en ontdekken jullie dat de leerkracht bezig is
            met het creëren van een dodelijk virus. Tot jullie schrik realiseren
            jullie je dat jullie hem al die tijd onbewust hebben geholpen.
            Voelend dat jullie medeplichtig zijn, besluiten jullie het plan van
            de professor tegen te gaan. De vraag is: zullen jullie hierin
            slagen?
          </p>
        </div>
      </section>

      <section className="w-full  min-h-screen text-black flex flex-col items-center justify-center max-w-screen gap-10 relative sm:px-36 px-9 py-60">
        <div className="absolute bg-gradient-to-t from-black to-transparent h-28 w-full -top-28"></div>
        <div className="absolute bg-gradient-to-t from-black to-transparent h-28 w-full top-0 rotate-180"></div>
        <div
          ref={teamRef}
          className="absolute inset-0 w-full h-full bg-asset-pattern bg-cover -z-50 blur-sm brightness-[0.2]"
        ></div>

        <div>
          <h1 className="text-3xl  font-roboto text-red-500 items-center justify-center flex text-center">
            MEET THE TEAM
          </h1>
          <p className="font-roboto text-center mt-5 leading-relaxed text-white">
            The Lab of Madness is een project door SQUAD 2, een groep
            laatstejaars studenten van de richting GDM te Artevelde Hogeschool.
          </p>
        </div>

        <Carousel />
      </section>

      <section className="py-5 px-12 text-white text-[10px] font-roboto text-center w-full">
        Lab of Madness created By squad 2 - 2023/2024
      </section>
    </main>
  );
}
