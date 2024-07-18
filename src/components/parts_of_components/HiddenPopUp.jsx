import { scandal } from '../../assets/forImages';

function HiddenPopUp({ setShowHidden, language }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-primary p-8 rounded-[20px] shadow-lg flex flex-col items-center justify-center font-bold">
        <h3 className="text-white font-bold text-[24px]">
          {language === 'en' ? 'Work in a strip bar' : 'Rad u striptiz baru'}
        </h3>
        <img
          src={scandal}
          alt={`Uzelac Light`}
          title={`Uzelac Light`}
          className="object-cover rounded-2xl my-10"
        />
        <p className="text-description mt-2 text-[15px] xs:text-[16px] w-[350px] xs:w-[408px] px-4 xs:px-0 text-center">
          {language === 'en'
            ? 'In addition to the above-mentioned works, it should also be noted that Uzelac was engaged in a strip bar, but to this day, the author of this project does not know what he really did in that branch.'
            : 'Pored gore navedenih radova, treba napomenuti i angažovanje u striptiz baru, ali do dan danas, autoru ovog projekta nije poznato čime se to Uzelac zaista bavio u toj branši.'}
        </p>
        <button
          onClick={() => {
            setShowHidden(false);
          }}
          className="mt-4 px-4 py-2 bg-[#915eff] rounded-xl text-white hover:bg-readMore transition-colors duration-300"
        >
          {language === 'en'
            ? 'O God save me, put this away'
            : 'O Bože me sačuvaj, sklanjaj ovo'}
        </button>
      </div>
    </div>
  );
}

export default HiddenPopUp;
