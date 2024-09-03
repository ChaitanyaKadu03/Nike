import { headerLogo } from '../assets/images/index';
import { hamburger } from '../assets/icons/index';
import { navLinks } from '../constants/constants';
import { useRef, useState } from 'react';

const Nav = () => {
  const hamburgerBtn = useRef();
  const [hamClick, setHamClick] = useState(false);

  return (
    <div className="h-fit w-full sticky top-0 z-50 ">
      <div className="relative flex flex-row justify-between items-center padding-x max-w-[1440px] py-8 max-tab:py-6 max-tab:px-8 z-50 max-mobile:px-4 max-mobile:py-4 mx-auto bg-white">
        <a href="/">
          <img src={headerLogo} className="w-[130px] h-30px" />
        </a>
        <ul className="flex flex-row gap-8 max-lg:hidden">
          {navLinks.map((res) => {
            return (
              <li
                key={res.label}
                className="cursor-pointer w-fit px-2 font-medium text-slate-500 hover:text-slate-700 text-lg"
              >
                <a href={res.href}>{res.label}</a>
              </li>
            );
          })}
        </ul>
        <a
          href="#"
          className="cursor-pointer w-fit px-2 font-medium text-slate-600 hover:text-slate-800 text-lg max-lg:hidden"
        >
          Sign in /Explore Now
        </a>
        <img
          src={hamburger}
          alt="icon"
          height="24px"
          width="24px"
          className="lg:hidden cursor-pointer"
          onClick={() => {
            setHamClick((res) => !res);
          }}
        />
      </div>
      <ul
        className={`mobile:hidden fixed  bg-[#ff6352ea] z-50 w-full h-fit flex flex-col gap-4 py-12 px-8 mx-auto max-mobile:items-center max-mobile:gap-8 ${
          hamClick ? '' : 'hidden'
        }`}
      >
        {navLinks.map((res) => {
          return (
            <li
              key={res.label}
              className="cursor-pointer w-fit px-2  hover:text-slate-600 max-mobile:text-xl max-mobile:font-semibold max-mobile:text-white"
              onClick={() => {
                setHamClick((res) => !res);
              }}
            >
              <a href={res.href}>{res.label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
