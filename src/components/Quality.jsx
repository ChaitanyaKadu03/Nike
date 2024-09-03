import Button from './sub-components/Button';
import { shoe8 } from '../assets/images';
import { useSetRecoilState } from 'recoil';
import { useEffect, useRef } from 'react';
import { divPosition } from '../store/atoms';

const Quality = ({ id }) => {
  const setPosition = useSetRecoilState(divPosition(id));
  const theDivPosition = useRef();

  useEffect(() => {
    setPosition({
      top:  theDivPosition.current.getBoundingClientRect().top + window.scrollY
    });
 
  }, []);

  return (
    <div
      ref={theDivPosition}
      className="padding flex items-center gap-2 max-w-[1440px] mx-auto justify-between max-heroSection:px-8 max-tab:flex-col max-tab:gap-12 max-tab:text-center max-tab:justify-center max-mobile:gap-8 max-mobile:px-4"
    >
      <div className="flex flex-col gap-8 max-w-[640px] max-heroSection:gap-6 max-mobile:gap-4 max-mobile:min-w-[280px]">
        <h1 className="heading1 max-mobile:max-w-[280px] max-mobile:mx-auto">
          We Provide You <span className="text-coral-red">Super Quality</span>{' '}
          Shoe
        </h1>
        <h3 className="subHeading flex flex-col gap-1">
          <span>
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </span>{' '}
          <span>
            Our dedication to detail and excellence ensures your satisfaction.
          </span>
        </h3>
        <Button
          text={'View Details'}
          needbtn={false}
          bgInput="bg-coral-red max-tab:mx-auto"
        />
      </div>
      <img
        src={shoe8}
        alt="image"
        className="max-w-[520px] max-mobile:w-[80vw] max-mobile:max-w-[420px]"
      />
    </div>
  );
};

export default Quality;
