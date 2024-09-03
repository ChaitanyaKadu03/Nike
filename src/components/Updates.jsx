import { useEffect, useRef } from 'react';
import Button from './sub-components/Button';
import { useSetRecoilState } from 'recoil';
import { divPosition } from '../store/atoms';

const Updates = ({ id }) => {
  const setPosition = useSetRecoilState(divPosition(id));
  const theDivPosition = useRef();

  useEffect(() => {
    setPosition({
      top: theDivPosition.current.getBoundingClientRect().top + window.scrollY
    });
 
  }, []);

  return (
    <div
      ref={theDivPosition}
      className="padding flex justify-between max-heroSection:px-8 max-mobile:px-4 max-tab:flex-col max-tab:items-center max-tab:text-center max-tab:gap-12 max-mobile:gap-8 max-w-[1440px] mx-auto"
    >
      <h1 className="heading1 w-[540px]max-mobile:w-fill">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h1>
      <div className="flex items-center gap-4 bg-pale-blue rounded-full h-fit py-4 px-4 border-slate-400 border-2 w-fit max-heroSection:gap-0 max-mobile:flex-col max-mobile:bg-transparent max-mobile:border-0 max-mobile:gap-4">
        <input
          type="text"
          placeholder="subscribe@nike.india.com"
          className="w-[320px] h-full px-8 bg-transparent text-lg py-2 font-medium text-slate-700 focus:outline-none max-heroSection:w-[240px] max-heroSection:px-4 max-tab:min-w-[320px] max-tab:w-[40vw] max-mobile:border-2 max-mobile:rounded-full max-mobile:px-8 max-mobile:py-4"
          id="textField"
          name="email"
          autoComplete="true"
        />
        <Button
          text={'Subscribe'}
          needbtn={false}
          bgInput={'bg-coral-red'}
          widthNeed={true}
        />
      </div>
    </div>
  );
};

export default Updates;
