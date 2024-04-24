import { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks, navLinksSR } from '../allText/navLinks';
import { uziLogo, menu, close, iconSr, iconEn } from '../assets/forImages';

function Navbar({ setLanguage, language }) {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      }}
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* logo with link to back home */}
        <Link
          className="flex items-center gap-2 w-[140px]"
          to={'/'}
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={uziLogo}
            alt="Uzelac Light logo"
            title="Uzelac Light"
            className="object-cover"
          />
        </Link>
        {/* list of links on page */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {language === 'en'
            ? navLinks.map((link) => (
                <li
                  onClick={() => setActive(link.title)}
                  key={link.id}
                  className={`${
                    link.id === 'contact'
                      ? 'bg-purpleBtn rounded-2xl px-5 py-2 hover:bg-readMore transition-colors duration-300'
                      : ''
                  } ${
                    active === link.title
                      ? 'text-white border-b-2'
                      : 'text-link'
                  } hover:text-white text-[18px] font-medium cursor-pointer flex justify-center items-center`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))
            : navLinksSR.map((link) => (
                <li
                  onClick={() => setActive(link.title)}
                  key={link.id}
                  className={`${
                    link.id === 'contact'
                      ? 'bg-[#915eff] rounded-2xl px-5 py-2'
                      : ''
                  } ${
                    active === link.title
                      ? 'text-white border-b-2'
                      : 'text-link'
                  } hover:text-white text-[18px] font-medium cursor-pointer flex justify-center items-center`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
          <img
            className="cursor-pointer"
            onClick={() => {
              if (language === 'en') {
                setLanguage('sr');
              } else {
                setLanguage('en');
              }
            }}
            src={language === 'en' ? iconSr : iconEn}
            alt={language === 'en' ? 'SRB' : 'ENG'}
            title={
              language === 'en'
                ? 'Prevedi na srpski'
                : 'Translation into English'
            }
          />
        </ul>
        {/* for mobile device list of links on page */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="inline-block p-4 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="object-contain"
              width={20}
              height={20}
            />
          </div>
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[240px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-6">
              {language === 'en'
                ? navLinks.map((link) => (
                    <li
                      onClick={() => {
                        setActive(link.title);
                        setToggle(false);
                      }}
                      key={link.id}
                      className={`${
                        link.id === 'contact'
                          ? 'bg-[#915eff] text-[#f5af19] rounded-2xl px-5 py-2'
                          : ''
                      } ${
                        active === link.title ? 'text-white' : 'text-secondary'
                      } hover:text-white text-[18px] font-medium cursor-pointer flex justify-center items-center`}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))
                : navLinksSR.map((link) => (
                    <li
                      onClick={() => {
                        setActive(link.title);
                        setToggle(false);
                      }}
                      key={link.id}
                      className={`${
                        link.id === 'contact'
                          ? 'bg-[#915eff] text-[#f5af19] rounded-2xl px-5 py-2'
                          : ''
                      } ${
                        active === link.title ? 'text-white' : 'text-secondary'
                      } hover:text-white text-[18px] font-medium cursor-pointer flex justify-center items-center`}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
              <img
                className="cursor-pointer"
                onClick={() => {
                  setToggle(false);
                  if (language === 'en') {
                    setLanguage('srb');
                  } else {
                    setLanguage('eng');
                  }
                }}
                src={language === 'en' ? iconSr : iconEn}
                alt={language === 'en' ? 'SRB' : 'ENG'}
                title={
                  language === 'en'
                    ? 'Prevedi na srpski'
                    : 'Translation into English'
                }
              />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
