import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import danceArena from "../assets/images/dance_arena.png";

function Hero({ language }) {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* purple circle and purple line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        {/* text with description about that specific man */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {language === "eng" ? "I am" : "Ja sam"}{" "}
            <span className="text-[#915eff]">Uzelac</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {language === "eng"
              ? "I transform MOMENTS through dynamic LIGHTING,"
              : "Transformišem TRENUTKE kroz dinamičko OSVETLJENJE,"}
            <br className="sm:block hidden" />
            {language === "eng"
              ? " impressive SOUND, and VISUAL artistry"
              : " impresivan ZVUK i VIZUELNU umetnost"}
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="onMobile">
        <img src={danceArena} alt="danceArena" />
      </div>
      {/* scroll div */}
      <div className="absolute xs:bottom-10 bottom-[50px] w-full flex justify-center items-center">
        <a href="#about">
          <div className="border-4 w-[35px] h-[64px] rounded-3xl border-secondary flex justify-center items-start p-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero;
