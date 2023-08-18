import { SectionWrapper } from "../hoc";

function Footer({ language }) {
  return (
    <div>
      {language === "eng" ? (
        <p className="text-secondary text-center sm:text-[17px] xs:text-[15px] text-[13px]">
          Made with <span className="text-red-700">&#9829;</span> by{" "}
          <a
            title="jovicmiroslav88@gmail.com"
            className="text-[#915eff] hover:text-[hsl(259,100%,75%)]"
            href="mailto:jovicmiroslav88@gmail.com"
          >
            Miroslav Jovic
          </a>
          . Feel free to reach out to me via{" "}
          <a
            title="jovicmiroslav88@gmail.com"
            className="text-[#915eff] hover:text-[hsl(259,100%,75%)]"
            href="mailto:jovicmiroslav88@gmail.com"
          >
            email
          </a>{" "}
          or check out my{" "}
          <a
            className="text-[#915eff] hover:text-[hsl(259,100%,75%)]"
            target="_blank"
            href="https://github.com/MirosBL45"
            title="GitHub profile - Miroslav Jovic"
          >
            GitHub profile
          </a>
        </p>
      ) : (
        <p className="text-secondary text-center sm:text-[17px] xs:text-[15px] text-[13px]">
          Napravio od <span className="text-red-700">&#9829;</span>{" "}
          <a
            title="jovicmiroslav88@gmail.com"
            className="text-[#915eff] hover:text-[hsl(259,100%,75%)]"
            href="mailto:jovicmiroslav88@gmail.com"
          >
            Miroslav Jović
          </a>
          . Slobodno mi se javite putem{" "}
          <a
            title="jovicmiroslav88@gmail.com"
            className="text-[#915eff] hover:text-[hsl(259,100%,75%)]"
            href="mailto:jovicmiroslav88@gmail.com"
          >
            mejla
          </a>{" "}
          ili pogledajte moj{" "}
          <a
            className="text-[#915eff] hover:text-[hsl(259,100%,75%)]"
            target="_blank"
            href="https://github.com/MirosBL45"
            title="GitHub profil - Miroslav Jović"
          >
            GitHub profil
          </a>
        </p>
      )}
    </div>
  );
}

export default SectionWrapper(Footer, "");
