import { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks, navLinksSR } from "../constants";
import { logo, menu, close, iconSr, iconEn } from "../assets";

function Navbar({ setLanguage, language }) {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* logo with link to back home */}
        <Link
          className="flex items-center gap-2"
          to={"/"}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer mr-6">
            Uzelac <span className="sm:inline-block hidden">| Light</span>
          </p>
        </Link>
        {/* list of links on page */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {language === "eng"
            ? navLinks.map((link) => (
                <li
                  onClick={() => setActive(link.title)}
                  key={link.id}
                  className={`${
                    link.id === "contact"
                      ? "bg-[#915eff] text-[#f5af19] rounded-2xl px-5 py-2"
                      : ""
                  } ${
                    active === link.title ? "text-white" : "text-secondary"
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
                    link.id === "contact"
                      ? "bg-[#915eff] text-[#f5af19] rounded-2xl px-5 py-2"
                      : ""
                  } ${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer flex justify-center items-center`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
          <img
            className="cursor-pointer"
            onClick={() => {
              if (language === "eng") {
                setLanguage("srb");
              } else {
                setLanguage("eng");
              }
            }}
            src={language === "eng" ? iconSr : iconEn}
            alt={language === "eng" ? "SRB" : "ENG"}
            title={
              language === "eng"
                ? "Prevedi na srpski"
                : "Translation into English"
            }
          />
        </ul>
        {/* for mobile device list of links on page */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[240px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-6">
              {language === "eng"
                ? navLinks.map((link) => (
                    <li
                      onClick={() => {
                        setActive(link.title);
                        setToggle(false);
                      }}
                      key={link.id}
                      className={`${
                        link.id === "contact"
                          ? "bg-[#915eff] text-[#f5af19] rounded-2xl px-5 py-2"
                          : ""
                      } ${
                        active === link.title ? "text-white" : "text-secondary"
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
                        link.id === "contact"
                          ? "bg-[#915eff] text-[#f5af19] rounded-2xl px-5 py-2"
                          : ""
                      } ${
                        active === link.title ? "text-white" : "text-secondary"
                      } hover:text-white text-[18px] font-medium cursor-pointer flex justify-center items-center`}
                    >
                      <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                  ))}
              <img
                className="cursor-pointer"
                onClick={() => {
                  setToggle(false);
                  if (language === "eng") {
                    setLanguage("srb");
                  } else {
                    setLanguage("eng");
                  }
                }}
                src={language === "eng" ? iconSr : iconEn}
                alt={language === "eng" ? "SRB" : "ENG"}
                title={
                  language === "eng"
                    ? "Prevedi na srpski"
                    : "Translation into English"
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
