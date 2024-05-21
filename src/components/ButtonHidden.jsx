import { useState } from 'react';
import HiddenPopUp from './parts_of_components/HiddenPopUp';

function ButtonHidden({ language }) {
  const [showHidden, setShowHidden] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setShowHidden(true);
        }}
        className="absolute bottom-[100px] right-0 w-[150px] h-[150px] sm:w-[300px] sm:h-[300px] sm:bottom-[200] bg-green-500 text-white opacity-0"
      >
        ButtonHidden opacity-0
      </div>
      {showHidden && (
        <HiddenPopUp setShowHidden={setShowHidden} language={language} />
      )}
    </>
  );
}

export default ButtonHidden;
