import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

function Contact({ language }) {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        'service_i3rs6cc',
        'template_okfabjh',
        formRef.current,
        'o2jP32BE4AwKYKPs8'
      )
      .then(
        () => {
          setLoading(false);
          if (language === 'eng') {
            alert('Thank you. I will get back to you as soon as possible.');
          } else {
            alert('Hvala Vam. Javiću se čim budem u prilici.');
          }
        },
        (error) => {
          setLoading(false);
          console.log(error);
          if (language === 'eng') {
            alert('Somthing went wrong. Please, try again.');
          } else {
            alert('Nešto ne radi. Molimo probajte ponovo.');
          }
        }
      );
    e.target.reset();
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          {language === 'eng' ? 'Get in touch' : 'Budimo u kontaktu'}
        </p>
        <h3 className={styles.sectionHeadText}>
          {language === 'eng' ? 'Contact' : 'Kontakt'}.
        </h3>
        {/* form for contact */}
        <form
          className="mt-12 flex flex-col gap-8"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {language === 'eng' ? 'Your Name' : 'Vaše Ime'}
            </span>
            <input
              required
              type="text"
              name="user_name"
              placeholder={
                language === 'eng' ? 'Full Name?' : 'Vaše ime i prezime?'
              }
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {language === 'eng' ? 'Your Email' : 'Vaš Email'}
            </span>
            <input
              required
              type="email"
              name="user_email"
              placeholder={
                language === 'eng' ? "What's your email?" : 'Koji je Vaš email?'
              }
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {language === 'eng' ? 'Subject' : 'Naslov'}
            </span>
            <input
              required
              type="text"
              name="subject"
              placeholder={
                language === 'eng' ? "What's the subject?" : 'Koja je tema?'
              }
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              {language === 'eng' ? 'Your Message' : 'Vaša Poruka'}
            </span>
            <textarea
              required
              rows={3}
              name="message"
              placeholder={
                language === 'eng'
                  ? 'What do you want to say?'
                  : 'Šta želite da kažete?'
              }
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            title={
              language === 'eng' ? 'Send this message' : 'Pošalji ovu poruku'
            }
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {language === 'eng'
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
  );
}

export default SectionWrapper(Contact, 'contact');
