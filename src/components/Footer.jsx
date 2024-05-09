import { SectionWrapper } from '../hoc';

function Footer({ language }) {
  return (
    <div>
      {language === 'en' ? (
        <p className="text-secondary text-center sm:text-[17px] xs:text-[15px] text-[13px]">
          Made with <span className="text-red-700">&#9829;</span> by{' '}
          <a
            aria-label="Visit Miroslav Jovic on the web"
            title="Visit Miroslav Jovic on the web"
            className="text-[#915eff] hover:text-[hsl(259,100%,75%)]"
            href="https://miroslavjovic.com"
            target={'_blank'}
          >
            Miroslav Jovic
          </a>
          . Feel free to reach out to me via{' '}
          <a
            aria-label="Send mail to jovicmiroslav88@gmail.com"
            title="jovicmiroslav88@gmail.com"
            className="text-[#915eff] hover:text-[hsl(259,100%,75%)]"
            href="mailto:jovicmiroslav88@gmail.com"
          >
            email
          </a>{' '}
          or check out my{' '}
          <a
            aria-label={'Visit Jovic Miroslav`s GitHub'}
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
          Napravio od <span className="text-red-700">&#9829;</span>{' '}
          <a
            aria-label="Posetite Jović Miroslava na vebu"
            title="Posetite Jović Miroslava na vebu"
            className="text-[#915eff] hover:text-[hsl(259,100%,75%)]"
            href="https://miroslavjovic.com"
            target={'_blank'}
          >
            Miroslav Jović
          </a>
          . Slobodno mi se javite putem{' '}
          <a
            aria-label="Javi se na jovicmiroslav88@gmail.com"
            title="jovicmiroslav88@gmail.com"
            className="text-[#915eff] hover:text-[hsl(259,100%,75%)]"
            href="mailto:jovicmiroslav88@gmail.com"
          >
            mejla
          </a>{' '}
          ili pogledajte moj{' '}
          <a
            className="text-[#915eff] hover:text-[hsl(259,100%,75%)]"
            target="_blank"
            href="https://github.com/MirosBL45"
            title="GitHub profil - Miroslav Jović"
            aria-label="Javi se na GitHub profil - Miroslav Jović"
          >
            GitHub profil
          </a>
        </p>
      )}
    </div>
  );
}

export default SectionWrapper(Footer, '');
