import Button from './sub-components/Button';
import { offer } from '../assets/images/index';

const Offers = () => {
  return (
    <div className="padding flex flex-row-reverse items-center max-w-[1440px] mx-auto max-heroSection:px-8 max-tab:flex-col max-tab:gap-16 max-mobile:gap-12 max-mobile:px-4">
      <div className="flex flex-col gap-8 max-tab:items-center max-tab:text-center max-mobile:gap-6">
        <h1 className="heading1">
          <span className="text-coral-red">Special</span> Offer
        </h1>
        <h3 className="subHeading flex flex-col gap-2 max-tab:max-w-[680px] max-tab:w-[72vw] max-mobile:gap-1">
          <span>
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </span>
          <span>
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </span>
        </h3>
        <div className="flex gap-8 max-mobile:flex-col max-mobile:gap-2 max-mobile:items-center">
          <Button text={'Show Now'} needbtn={true} bgInput={'bg-coral-red'} />
          <Button
            text={'Learn more'}
            needbtn={false}
            bgInput={'bg-slate-300'}
          />
        </div>
      </div>
      <img src={offer} alt="image" className="w-[44vw] max-tab:w-[80vw]" />
    </div>
  );
};

export default Offers;
