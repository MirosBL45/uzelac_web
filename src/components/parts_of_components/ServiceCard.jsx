import { Tilt } from 'react-tilt';
function ServiceCard({ index, title, icon }) {
  return (
    <Tilt key={index} className="mx-auto xs:w-[250px] w-full">
      <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="font-bold text-center text-white text-[20px]">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
}

export default ServiceCard;
