import { VerticalTimeline } from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences, experiencesSR } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import ExpirienceCard from "./ExpirienceCard";

function Experience({ language, setLanguage }) {
  return (
    <>
      {/* headlines */}
      <motion.div variants={textVariant()}>
        <p
          onClick={() => {
            if (language === 'eng') {
              setLanguage('srb');
            } else {
              setLanguage('eng');
            }
          }}
          className={styles.sectionSubText}
        >
          What I have done so far
        </p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      {/* cards of experiences, ExpirienceCard is defined up in code */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {language === 'eng'
            ? experiences
                .slice()
                .reverse()
                .map((experience, index) => (
                  <ExpirienceCard key={index} experience={experience} />
                ))
            : experiencesSR
                .slice()
                .reverse()
                .map((experience, index) => (
                  <ExpirienceCard key={index} experience={experience} />
                ))}
          {/* {experiences.slice().reverse().map((experience, index) => (
            <ExpirienceCard key={index} experience={experience} />
          ))} */}
        </VerticalTimeline>
        <p>{`ovde ide ${language}`}</p>
      </div>
    </>
  );
}
// export default Experience

export default SectionWrapper(Experience, "work");
