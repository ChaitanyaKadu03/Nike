import { footerLinks, socialMedia } from '../constants/constants';
import { copyrightSign } from '../assets/icons/index';
import { footerLogo } from '../assets/images/index';

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="text-white  flex flex-col py-12 px-16 gap-16 max-w-[1440px] mx-auto max-heroSection:px-8 max-heroSection:gap-12">
        <div className="flex flex-row justify-between max-tab:flex-col max-tab:gap-12 max-mobile:gap-10">
          <div className="flex flex-col gap-8 max-mobile:gap-6">
            <img src={footerLogo} alt="logo" className="h-[48px] w-fit max-mobile:h-[32px]" />
            <p className="text-lg text-slate-300 w-[420px] max-heroSection:w-[370px] max-tab:w-[80vw] max-mobile:w-[100%]">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards.
            </p>
            <div className="flex gap-4 ">
              {socialMedia.map((res) => {
                return (
                  <img
                    src={res.src}
                    key={res.alt}
                    alt={res.alt}
                    className="bg-white p-2 rounded-full cursor-pointer"
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-row gap-12 max-heroSection:gap-4 max-tab:w-full max-tab:justify-between max-tab:flex-wrap max-mobile:gap-y-12 max-mobile:gap-x-4">
            {footerLinks.map((res) => {
              return (
                <ul className="flex flex-col gap-4 max-mobile:gap-3" key={res.title}>
                  <li className="text-2xl font-semibold mb-4 max-mobile:text-xl max-mobile:mb-2">{res.title}</li>
                  {res.links.map((data) => {
                    return (
                      <li className="text-xl max-mobile:text-sm" key={data.name}>
                        <a href={data.link}>{data.name}</a>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
        <div className="flex justify-between items-center max-mobile:flex-col gap-4">
          <div className="flex gap-2 w-fit items-center">
            <img src={copyrightSign} alt="copyrightx" className="w-6 h-6 max-mobile:w-4 max-mobile:h-4" />
            <p className="text-lg w-fit max-mobile:text-sm">Copyright. All rights reserved.</p>
          </div>
          <p className="text-lg max-mobile:text-sm">Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
