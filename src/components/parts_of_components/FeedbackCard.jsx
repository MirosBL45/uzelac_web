import { motion } from 'framer-motion';
import { useState } from 'react';

import { fadeIn } from '../../utils/motion';

import { splitContent } from '../../utils/functions';

function FeedbackCard({
  index,
  testimonial,
  name,
  image,
  company,
  designation,
  language,
}) {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => setShowFullText(!showFullText);

  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl w-[320px] xs:w-[500px] mx-auto"
      id={`${index}testimonial`}
    >
      <article title={`Feedback for Uzelac Light by ${name}`}>
        <p className="text-description font-black text-[38px] xs:text-[48px]">
          "
        </p>
        <div className="mt-[-20px]">
          <div>
            <p className="text-description tracking-wider text-[15px] xs:text-[16px]">
              {showFullText
                ? splitContent(testimonial)
                : testimonial.split('. ')[0] + '.'}
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
                href={`#${index}testimonial`}
                onClick={toggleText}
                className="text-readMore underline cursor-pointer inline-block pt-[15px] pr-[15px] pb-[15px] text-[13px] xs:text-[15px]"
              >
                {language === 'en' ? 'Show less' : 'Prikaži manje'}
              </a>
            )}
          </div>
          <div className="mt-7 flex justify-between items-center gap-1">
            <div className="flex-1 flex flex-col">
              <p className="text-description font-medium text-[14px]">
                <span className="blue-text-gradient">@</span> {name}
              </p>
              <p className="mt-1 text-secondary text-[12px]">
                {designation} {language === 'en' ? 'in' : 'u'} {company}
              </p>
            </div>
            <img
              src={image}
              alt={`Feedback for Uzelac Light by ${name}`}
              title={`Feedback for Uzelac Light by ${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
        </div>
      </article>
    </motion.div>
  );
}

export default FeedbackCard;
