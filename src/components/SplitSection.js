import React from "react";

const SplitSection = ({
  id,
  primarySlot,
  imgSlot,
  reverseOrder,
  imgParams,
  aos,
}) => (
  <section
    id={id}
    className="pt-8 lg:py-20 xl:py-20 mt-16 lg:mt-16 lg:mb-16 xl:mt-16 xl:mb-32"
  >
    <div
      className={`container mx-auto px-16 items-center w-full flex flex-col lg:flex-row ${
        !reverseOrder && `justify-end text-right`
      }`}
    >
      <div className={`lg:w-1/2 lg:ml-32`}>{primarySlot}</div>
      <div
        className={`lg:absolute w-72 h-62 lg:mt-40 mt-0 ${
          reverseOrder && `right-0`
        } ${!reverseOrder && `left-0`} ${imgParams}`}
        data-aos={aos}
      >
        <img src={imgSlot} className="w-full h-full" alt="explore-img" />
      </div>
    </div>
  </section>
);

export default SplitSection;
