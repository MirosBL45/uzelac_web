import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { useState, useEffect } from 'react';

function Tech() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <>
      {windowWidth > 650 ? (
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div key={technology.name} className="w-28 h-28">
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="w-32 h-32 rounded-full border-2 border-gray-300 p-5"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-full"
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SectionWrapper(Tech, '');
