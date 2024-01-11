import { Tilt } from 'react-tilt';
import { domain } from '../../assets/forImages';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  language,
}) {
  return (
    <motion.div
      className="mx-auto"
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
      <Tilt
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        options={{ max: 45, scale: 1, speed: 450 }}
      >
        <article>
          <div className="relative w-full h-[230px]">
            {/* image of project */}
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div>
                <a
                  className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  href={source_code_link}
                  target="_blank"
                  title={
                    language === 'eng'
                      ? 'View this project on the web'
                      : 'Pogledaj ovaj projekat na webu'
                  }
                >
                  <img
                    src={domain}
                    alt="project link"
                    className="object-contain w-1/2 h-1/2"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* text to describe work and projects */}
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
          </div>
          {/* hashtags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </article>
      </Tilt>
    </motion.div>
  );
}

export default ProjectCard;
