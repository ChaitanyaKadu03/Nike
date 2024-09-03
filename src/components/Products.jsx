import { useRef, useState } from 'react';
import { products } from '../constants/constants';
import Button from './sub-components/Button';
import ShoeCard from './sub-components/ShoeCard';

const Products = () => {
  let productsDiv = useRef();
  const [showlAll, setshowlAll] = useState(() => {
    return window.innerWidth < 640 ? false : true;
  });

  return (
    <div
      className="padding flex flex-col gap-16 w-full max-w-[1440px] mx-auto max-heroSection:px-8 max-tab:gap-12 max-tab:py-12 max-mobile:px-4"
      ref={productsDiv}
    >
      <div className="flex flex-col gap-4 w-[720px] max-tab:text-center max-tab:items-center max-tab:my-auto max-tab:w-full">
        <h1 className="heading1">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <h3 className="subHeading max-tab:max-w-[80%]">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </h3>
      </div>
      <div className="tab:flex gap-8 justify-between max-heroSection:gap-12 max-tab:grid max-tab:w-full max-tab:grid-cols-2 max-mobile:flex max-mobile:flex-col max-mobile:items-center">
        {products.map((res) => {
          if (!showlAll) {
            if (res.id == 1 || res.id == 2) {
              return <ShoeCard props={res} key={res.id} />;
            }
          } else {
            return <ShoeCard props={res} key={res.id} />;
          }
        })}
        <Button
          text={showlAll ? 'Show Less' : 'Show More'}
          needbtn={false}
          bgInput="bg-coral-red"
          className=""
          needClick={true}
          clickStates={{ showlAll, setshowlAll }}
        />
      </div>
    </div>
  );
};

export default Products;
