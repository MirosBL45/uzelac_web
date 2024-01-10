import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services, servicesSR } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import ServiceCard from './parts_of_components/ServiceCard';

function About({ language }) {
  return (
    <main>
      {/* text of Overview and Introduction */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {language === 'eng' ? 'Introduction' : 'UVOD'}
        </p>
        <h2 className={styles.sectionHeadText}>
          {language === 'eng' ? 'Overview' : 'Pregled'}.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {language === 'eng'
          ? 'With a background in lighting design and visual storytelling, I specialize in crafting captivating sensory experiences. My journey began in the concert world, harmonizing lighting, sound, and visuals for unforgettable live performances. Over time, my expertise expanded to include film production, seamlessly integrating my artistic vision into the cinematic realm.'
          : 'Sa iskustvom u dizajnu osvetljenja i vizuelnom prikazu, specijalizovao sam se za stvaranje prelepih čulnih iskustava. Moje putovanje je počelo u svetu koncerata, uživo usaglašavajući osvetljenje, zvuk i vizuelni prikaz za nezaboravne nastupe. Vremenom se moja stručnost proširila i uključila filmsku produkciju, neprimetno integrišući moju umetničku viziju u bioskopsko područje.'}
      </motion.p>
      {/* cards of what you know to do */}
      <div className="mt-20 flex flex-wrap gap-10">
        {language === 'eng'
          ? services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))
          : servicesSR.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
      </div>
    </main>
  );
}

export default SectionWrapper(About, 'about');
