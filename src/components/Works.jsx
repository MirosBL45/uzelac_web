import ProjectCard from './parts_of_components/ProjectCard';

import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects, projectsSR } from '../allText';
import { textVariant, fadeIn } from '../utils/motion';

function Works({ language }) {
  return (
    <>
      {/* headlines */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {language === 'eng' ? 'My work' : 'Moj rad'}
        </p>
        <h2 className={styles.sectionHeadText}>
          {language === 'eng' ? 'Projects' : 'Projekti'}.
        </h2>
      </motion.div>
      {/* description of all work */}
      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
          variants={fadeIn('', '', 0.1, 1)}
        >
          {language === 'eng'
            ? 'My portfolio includes diverse projects, from iconic concerts to film productions that have entered the hearts of viewers. With my ability to harmonize light, colors and sound, I provide depth and dimension to any environment. My experience in sound further enriches each production, laying the foundation for the total immersion of the audience in the event.'
            : 'Moj portfolio obuhvata raznolike projekte, od ikoničnih koncerata do filmskih ostvarenja koja su se uvukla u srca gledalaca. Svojom sposobnošću da uskladim svetlost, boje i zvuk, pružam dubinu i dimenziju svakom ambijentu. Moje iskustvo sa zvukom dodatno obogaćuje svaku produkciju, postavljajući temelje za potpuno uranjanje publike u događaj.'}
        </motion.p>
      </div>
      {/* cards of work */}
      <div className="mt-20 flex flex-wrap gap-7">
        {language === 'eng'
          ? projects.map((project, index) => (
              <ProjectCard
                language={language}
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))
          : projectsSR.map((project, index) => (
              <ProjectCard
                language={language}
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
      </div>
    </>
  );
}

export default SectionWrapper(Works, 'projects');
