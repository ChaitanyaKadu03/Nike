import { memo } from 'react';
import { star } from '../../assets/icons/index';

const ShoeCard = memo(({ props }) => {
  return (
    <div
      className="flex flex-col gap-6 justify-between cursor-pointer max-mobile:min-w-[280px] max-mobile:w-[72%] max-mobile:gap-4 max-mobile:bg-slate-100 max-mobile:p-2 max-mobile:pb-4
     max-mobile:rounded-3xl"
    >
      <img src={props.imgURL} alt="image" className="" />
      <div className="flex flex-col gap-2 max-mobile:gap-2">
        <div className="flex items-center gap-4 info-text max-mobile:gap-2">
          <img src={star} alt="star icon" />
          <p className='max-mobile:text-sm'>({props.rating})</p>
        </div>
        <h2 className="heading2">{props.name}</h2>
        <h2 className="text-xl font-semibold text-coral-red max-mobile:text-lg">{props.price}</h2>
      </div>
    </div>
  );
});

export default ShoeCard;
