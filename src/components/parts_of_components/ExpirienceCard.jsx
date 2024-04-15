import { VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

function ExpirienceCard({ experience }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
        borderRadius: '20px',
      }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={`Uzelac Light ${experience.company_name}`}
            title={`Uzelac Light ${experience.company_name}`}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <article>
        <div>
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`expirience-point-${index}`}
              className="text-description text-[15px] xs:text-[16px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </article>
    </VerticalTimelineElement>
  );
}

export default ExpirienceCard;
