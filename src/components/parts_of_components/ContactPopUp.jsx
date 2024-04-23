function ContactPopUp({ setShowPopUp, text }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
      <div className="bg-primary p-8 rounded-[20px] shadow-lg flex flex-col items-center justify-center font-bold">
        <p>{text}</p>
        <button
          onClick={() => {
            setShowPopUp(false);
          }}
          className="mt-4 px-4 py-2 bg-[#915eff] rounded-xl text-white hover:bg-readMore transition-colors duration-300"
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default ContactPopUp;
