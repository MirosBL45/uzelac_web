import ProjectCard from './parts_of_components/ProjectCard';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects, projectsSR } from '../allText/projects';

function Works({ language }) {
  return (
    <>
      {/* headlines */}
      <div>
        <p className={styles.sectionSubText}>
          {language === 'en' ? 'My work' : 'Moj rad'}
        </p>
        <h2 className={styles.sectionHeadText}>
          {language === 'en' ? 'Projects' : 'Projekti'}.
        </h2>
      </div>
      {/* description of all work */}
      <div className="w-full flex">
        <p className="mt-3 text-description text-[17px] max-w-3xl leading-[30px]">
          {language === 'en'
            ? 'My portfolio includes diverse projects, from iconic concerts to film productions that have entered the hearts of viewers. With my ability to harmonize light, colors and sound, I provide depth and dimension to any environment. My experience in sound further enriches each production, laying the foundation for the total immersion of the audience in the event.'
            : 'Moj portfolio obuhvata raznolike projekte, od ikoničnih koncerata do filmskih ostvarenja koja su se uvukla u srca gledalaca. Svojom sposobnošću da uskladim svetlost, boje i zvuk, pružam dubinu i dimenziju svakom ambijentu. Moje iskustvo sa zvukom dodatno obogaćuje svaku produkciju, postavljajući temelje za potpuno uranjanje publike u događaj.'}
        </p>
      </div>
      {/* cards of work */}
      <div className="mt-20 flex flex-wrap gap-7">
        {language === 'en'
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
