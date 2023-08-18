import FeedbackCard from "./parts_of_components/FeedbackCard";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { testimonials } from "../constants";

function Feedbacks({ language }) {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            {language === "eng"
              ? "What others say about me"
              : "Šta drugi kažu o meni"}
          </p>
          <h2 className={styles.sectionHeadText}>
            {language === "eng" ? "Testimonials" : "Preporuke"}.
          </h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard index={index} key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

export default SectionWrapper(Feedbacks, "");
