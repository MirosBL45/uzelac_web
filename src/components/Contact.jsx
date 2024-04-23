import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import ContactPopUp from './parts_of_components/ContactPopUp';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

import { SERVICE_BASE, TEMPLATE_BASE, PUBLIC_BASE } from '../utils/constants';

function Contact({ language }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);
  const [textPopUp, setTextPopUp] = useState('Thank you');

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(SERVICE_BASE, TEMPLATE_BASE, formRef.current, PUBLIC_BASE)
      .then(
        () => {
          if (language === 'en') {
            setTextPopUp(
              'Thank you. I will get back to you as soon as possible.'
            );
          } else {
            setTextPopUp('Hvala Vam. Javiću se čim budem u prilici.');
          }
          setLoading(false);
          setShowPopUp(true);
        },
        (error) => {
          if (language === 'en') {
            setTextPopUp('Somthing went wrong. Please, try again.');
          } else {
            setTextPopUp('Nešto ne radi. Molimo probajte ponovo.');
          }
          setLoading(false);
          console.log(error);
          setShowPopUp(true);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <div
        title={
          language === 'en'
            ? 'Contact Uzelac Light'
            : 'Kontaktiraj Uzelac Light'
        }
        className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden"
      >
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>
            {language === 'en' ? 'Get in touch' : 'Budimo u kontaktu'}
          </p>
          <h3 className={styles.sectionHeadText}>
            {language === 'en' ? 'Contact' : 'Kontakt'}.
          </h3>
          {/* form for contact */}
          <form
            className="mt-12 flex flex-col gap-8"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {language === 'en' ? 'Your Name' : 'Vaše Ime'}
              </span>
              <input
                required
                type="text"
                name="user_name"
                placeholder={
                  language === 'en' ? 'Full Name?' : 'Vaše ime i prezime?'
                }
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {language === 'en' ? 'Your Email' : 'Vaš Email'}
              </span>
              <input
                required
                type="email"
                name="user_email"
                placeholder={
                  language === 'en'
                    ? "What's your email?"
                    : 'Koji je Vaš email?'
                }
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {language === 'en' ? 'Subject' : 'Naslov'}
              </span>
              <input
                required
                type="text"
                name="subject"
                placeholder={
                  language === 'en' ? "What's the subject?" : 'Koja je tema?'
                }
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                {language === 'en' ? 'Your Message' : 'Vaša Poruka'}
              </span>
              <textarea
                required
                rows={3}
                name="message"
                placeholder={
                  language === 'en'
                    ? 'What do you want to say?'
                    : 'Šta želite da kažete?'
                }
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <button
              title={
                language === 'en' ? 'Send this message' : 'Pošalji ovu poruku'
              }
              type="submit"
              className="bg-purpleBtn py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-readMore transition-colors duration-300"
            >
              {language === 'en'
                ? loading
                  ? 'Sending...'
                  : 'Send'
                : loading
                ? 'Šalje se...'
                : 'Pošalji'}
            </button>
          </form>
        </motion.div>
        {/* earth canvas for floating planet */}
        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      {showPopUp && (
        <ContactPopUp text={textPopUp} setShowPopUp={setShowPopUp} />
      )}
    </>
  );
}

export default SectionWrapper(Contact, 'contact');
