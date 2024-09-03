import { services } from '../constants/constants';

const Features = () => {
  return (
    <div className="tab:flex gap-8 justify-between padding max-heroSection:px-8 max-heroSection:gap-8 
    max-tab:gap-y-[32px] max-tab:row-h-12 max-tab:grid-cols-2 max-tab:grid max-mobile:flex max-mobile:flex-col max-mobile:px-4 max-mobile:items-center max-w-[1440px] mx-auto">
      {services.map((data) => {
        return (
          <div
            className={`flex flex-col gap-4 tab:max-w-[420px] px-12 py-16 border drop-shadow-xl bg-white rounded-3xl max-mobile:w-[80vw] max-mobile:max-w-[360px] max-mobile:px-8 max-mobile:py-10 ${
              data.id == 3 ? 'max-tab:col-span-2' : null
            }`}
            key={data.id}
          >
            <img
              src={data.imgURL}
              alt="icon"
              className="h-8 w-8 p-2 bg-coral-red rounded-full"
            />
            <h4 className="text-2xl font-semibold">{data.label}</h4>
            <h3 className="subHeading">{data.subtext}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
