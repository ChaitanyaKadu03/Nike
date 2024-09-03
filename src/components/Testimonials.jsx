import { reviews } from '../constants/constants';
import { star } from '../assets/icons/index';

const Testimonials = () => {
  return (
    <div className="padding flex flex-col text-center items-center gap-12 bg-pale-blue max-heroSection:px-8 max-tab:gap-16 max-mobile:gap-12 max-mobile:px-4">
      <div className="flex flex-col gap-8 max-mobile:gap-4">
        <h1 className="heading1">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h1>
        <h3 className="subHeading mobile:w-[560px] mx-auto max-mobile:w-80vw">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </h3>
      </div>
      <div className="flex gap-32 max-tab:flex-wrap max-tab:justify-center max-tab:gap-12">
        {reviews.map((res) => {
          return (
            <div key={res.id} className="flex flex-col items-center gap-4">
              <img
                src={res.imgURL}
                alt="image"
                className="h-[120px] w-[120px] rounded-full max-mobile:h-[80px] max-mobile:w-[80px]"
              />
              <p className="subHeading mobile:w-[400px] max-mobile:w-[80vw]">
                ({res.feedback})
              </p>
              <div className="flex items-center gap-2">
                <img src={star} alt="icon" />
                <p className="text-slate-500 text-xl font-medium max-mobile:text-lg">
                  ({res.rating})
                </p>
              </div>
              <p className="heading2">{res.customerName}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
