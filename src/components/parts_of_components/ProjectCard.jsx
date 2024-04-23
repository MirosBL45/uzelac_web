import { Tilt } from 'react-tilt';
import { domain } from '../../assets/forImages';
import { useState } from 'react';

import { splitContent } from '../../utils/functions';

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  language,
}) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => setShowFullText(!showFullText);

  return (
    <div id={`${index}project`} className="mx-auto">
      <Tilt
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        options={{ max: 45, scale: 1, speed: 450 }}
      >
        <article title={`Uzelac Light ${name}`}>
          <div className="relative w-full h-[230px]">
            {/* image of project */}
            <img
              src={image}
              alt={`Uzelac Light ${name}`}
              title={`Uzelac Light ${name}`}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div>
                <a
                  className="black-gradient w-[85px] h-[27px] rounded-full flex justify-around items-center cursor-pointer"
                  href={source_code_link}
                  target="_blank"
                  title={
                    language === 'en'
                      ? 'View this project on the web'
                      : 'Pogledaj ovaj projekat na webu'
                  }
                >
                  <img
                    src={domain}
                    alt="Uzelac Light project link"
                    title={`Uzelac Light project link`}
                    className="object-contain h-1/2"
                  />
                  <span className="text-[12px]">
                    {language === 'en' ? ' See Live' : ' Vidi Uživo'}
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* text to describe work and projects */}
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="text-description mt-2 text-[15px] xs:text-[16px]">
              {showFullText
                ? splitContent(description)
                : description.split('. ')[0] + '.'}
            </p>
            {!showFullText && (
              <a
                onClick={toggleText}
                className="text-readMore underline cursor-pointer inline-block pt-[15px] pr-[15px] pb-[15px] text-[13px] xs:text-[15px]"
              >
                {language === 'en' ? 'Read more' : 'Opširnije'}
              </a>
            )}
            {showFullText && (
              <a
                href={`#${index}project`}
                onClick={toggleText}
                className="text-readMore underline cursor-pointer inline-block pt-[15px] pr-[15px] pb-[15px] text-[13px] xs:text-[15px]"
              >
                {language === 'en' ? 'Show less' : 'Prikaži manje'}
              </a>
            )}
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
    </div>
  );
}

export default ProjectCard;
