import { arrowRight } from '../../assets/icons/index';
import { memo } from 'react';

const Button = memo(
  ({
    text,
    needbtn,
    bgInput,
    needClick = false,
    clickStates = false,
    widthNeed = false
  }) => {
    return (
      <button
        className={`flex items-center gap-3 ${bgInput} w-fit px-8 py-4 rounded-full max-mobile:px-6 max-mobile:py-3 max-mobile:gap-2 ${
          needClick ? 'mobile:hidden' : null
        } ${widthNeed ? 'max-mobile:w-full max-mobile:justify-center' : ''}`}
        onClick={() => {
          if (needClick) {
            clickStates.setshowlAll((res) => !res);
          }
        }}
      >
        <p className="text-xl font-medium text-white max-mobile:text-lg">
          {text}
        </p>
        <img
          src={arrowRight}
          alt="arrow"
          className={`h-6 bg-white rounded-full ${
            !needbtn ? 'hidden' : ''
          } max-mobile:h-4`}
        />
      </button>
    );
  }
);

export default Button;
