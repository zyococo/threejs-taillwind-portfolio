import { motion } from "framer-motion";

import { styles } from "../styles";
import { Sphere } from "./canvas";

const SphereGeometry = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* green vertical line */}
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#68fd46]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-green-300" />
        </div> */}

        <div className="z-10">
          <h1 className={`${styles.heroHeadText} text-[#ffffff]`}>
            Welcome to my world!
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-[#ffffff], font-black`}
          >
            {/* 現在転職活動中！ <br className="sm:block hidden" /> */}
            Japanese 30-year-old male from Osaka, Japan
            <br className="sm:block hidden" />
            Step out of your comfort zone!!
          </p>
        </div>
      </div>

      <Sphere className="-z-20 w-full h-full" />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>

      {/* <ComputersCanvas className="-z-10" /> */}
    </section>
  );
};

export default SphereGeometry;
