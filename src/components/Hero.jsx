import Button from './sub-components/Button';
import { shoes, statistics } from '../constants/constants';
import { useState } from 'react';
import { useEffect } from 'react';
import { memo } from 'react';

const Hero = () => {
  return (
    <div className="max-mobile:relative flex flex-row justify-between heroSection:pl-16 max-heroSection:py-8 cursor-context-menu max-w-[1440px] max-heroSection:flex-col max-heroSection:w-full max-heroSection:items-center max-heroSection:text-center mx-auto ">
      <div className="flex flex-col gap-8 z-10 max-heroSection:items-center max-heroSection:pb-12 max-mobile:gap-6 max-tab:px-8 max-mobile:px-4 max-tab:w-full max-mobile:w-full">
        <p className="text-coral-red text-xl max-mobile:text-lg">
          Our Summer collections
        </p>
        <h1 className="text-8xl font-bold m-0 max-mobile:text-4xl">
          <span>The New</span>
          <br />
          <span className="text-coral-red">Nike</span> Shoes
        </h1>
        <h3 className="text-xl text-slate-500 w-[440px] max-mobile:text-sm max-mobile:w-full max-mobile:max-w-[420px]">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </h3>
        <Button text="Shop now" needbtn={true} bgInput="bg-coral-red" />
        <div className="flex gap-8  max-heroSection:justify-center max-mobile:items-center max-mobile:gap-2">
          {statistics.map((res) => {
            return <StatisticsCard res={res} key={res.id} />;
          })}
        </div>
      </div>
      <ImageDisplay />
    </div>
  );
};

const StatisticsCard = memo(({ res }) => {
  const [count, setcount] = useState(res.value - 4);
  const [maxCount, setmaxCount] = useState(res.value);

  useEffect(() => {
    if (count < maxCount) {
      const timer = setTimeout(() => setcount(count + 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [count, maxCount]);

  return (
    <ul className="flex flex-col w-[120px] max-mobile:w-[80px]">
      <li className="text-4xl font-medium max-mobile:text-2xl">
        {count}
        {count == maxCount ? res.suffix : null}
      </li>
      <li className="text-slate-500 max-mobile:text-sm">{res.label}</li>
    </ul>
  );
});

const ImageDisplay = memo(() => {
  const [currentShoe, setCurrentShoe] = useState(1);
  return (
    <div className="bg-hero bg-cover bg-center heroSection:relative right-0 top-[0] z-0 h-fit flex flex-col items-center gap-8 heroSection:pr-16 w-[50%] py-[6%] max-heroSection:w-full max-heroSection:gap-12 max-mobile:px-4  max-mobile:py-8  max-mobile:gap-4">
      <img
        alt="image"
        src={shoes[currentShoe - 1].bigShoe}
        className="h-fit w-[72%] max-mobile:w-[72vw]"
      />
      <div className="flex gap-4 max-mobile:gap-2">
        {shoes.map((props) => (
          <ImageCardDiv
            props={props}
            key={props.bigShoe}
            currentShoe={currentShoe}
            setCurrentShoe={setCurrentShoe}
          />
        ))}
      </div>
    </div>
  );
});

const ImageCardDiv = memo(({ props, currentShoe, setCurrentShoe }) => {
  return (
    <img
      src={props.thumbnail}
      alt="image"
      className={`h-[120px] w-fit p-4 rounded-2xl cursor-pointer bg-card bg-cover bg-center ${
        currentShoe == props.id ? 'border-2 border-orange-700' : null
      } max-mobile:h-[80px] max-mobile:p-1 `}
      onClick={() => {
        setCurrentShoe(props.id);
      }}
    />
  );
});

export default Hero;
