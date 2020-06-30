import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import LabelText from "../components/LabelText";
import SplitSection from "../components/SplitSection";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

//Importing Features Img
import outlet from "../img/outlet.png";
import discount from "../img/discount.png";
import reward from "../img/reward.png";
import saving from "../img/saving.png";

//Importing Carousel
import ImageCarousel from "../components/carousel";

//Explore Images
import shops from "../img/explore/1.png";
import amazingall from "../img/explore/2.png";
import dontMiss from "../img/explore/3.png";

//Enroll Section button images
import mobile from "../img/mobile.png";
import playstore from "../img/playstore.png";
import appstore from "../img/appstore.png";

//Explore content
import {
  outletContent,
  audienceContent,
  dontMissContent,
} from "../components/exploreContent";

//Enroll Image
import enroll from "../img/carousel/4.png";

//Register Image
import bussiness from "../img/grow-your-business.png";

const Homepage = () => {
  return (
    <div className="main-container fadeIn">
      <Header />
      <section className="carousel-container w-full sm:h-72 md:h-80 lg:h-96 h-40">
        <ImageCarousel />
      </section>
      <section id="features" className="pt-8 pb-0">
        <div className="container mx-auto text-center">
          <h2 className="font-mono text-3xl lg:text-5xl font-extrabold italic ">
            Why LFS Card !
          </h2>
          <h2
            className="text-3xl tracking-wider font-semibold"
            data-aos={"fade-up"}
            data-aos-duration="500"
          >
            Our Features
          </h2>
          <div className="flex lg:flex-row md:flex-row flex-wrap flex-col sm:-mx-3 mt-4">
            <div
              className="lg:flex-1 flex-0 md:w-1/2 px-3"
              data-aos={"fade-up"}
              data-aos-duration="1000"
            >
              <Card className="mb-8 h-full">
                <p className="font-semibold text-xl">Top Outlets / Brands</p>
                <img className="m-auto mt-4 h-40" src={outlet} alt="outlets" />
                <p className="mt-4">
                  <p className="mt-4">
                    We’ve teamed up with amazing outlets to keep the saving and
                    more .
                  </p>
                </p>
              </Card>
            </div>

            <div
              className="lg:flex-1 flex-0 md:w-1/2 px-3"
              data-aos={"fade-up"}
              data-aos-duration="1000"
            >
              <Card className="mb-8 h-full">
                <p className="font-semibold text-xl">
                  Instant Discount and Offers
                </p>
                <img
                  className="m-auto mt-4 h-32"
                  src={discount}
                  alt="discount"
                />
                <p className="mt-4">Members save from LFS Card Offers .</p>
              </Card>
            </div>

            <div
              className="lg:flex-1 flex-0 md:w-1/2 md:mt-6 lg:mt-0 px-3"
              data-aos={"fade-up"}
              data-aos-duration="1000"
            >
              <Card className="mb-8 h-full">
                <p className="font-semibold text-xl">
                  Rewards and Gift Vouchers
                </p>
                <img className="m-auto mt-4 h-32" src={reward} alt="reward" />
                <p className="mt-4">
                  Shop anywhere with us , enjoy our exclusive giveaway and
                  rewards .
                </p>
              </Card>
            </div>

            <div
              className="lg:flex-1 flex-0 md:w-1/2 md:mt-6 lg:mt-0 px-3"
              data-aos={"fade-up"}
              data-aos-duration="1000"
            >
              <Card className="mb-8 h-full">
                <p className="font-semibold text-xl">
                  <span>Saving More </span>
                  <br />
                  <span>Anytime, Anywhere</span>
                </p>
                <img className="m-auto mt-4 h-32" src={saving} alt="saving" />
                <p className="mt-4">
                  Visit our outlets again and again to save more .
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section id="explore" className="mt-0 pt-16">
        <div
          className="text-4xl text-center font-extrabold tracking-wider"
          data-aos={"zoom-in"}
        >
          Explore LFS Card
        </div>
        <SplitSection
          reverseOrder
          primarySlot={
            <div
              className="bg-blue-300 text-gray-700 rounded-l-lg p-4 lg:pr-32 xl:pr-48"
              data-aos={"zoom-in-right"}
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold leading-tight underline">
                Our Categories
              </h3>
              <p className="mt-8 text-sm md:text-xl lg:text-xl xl:text-xl font-light leading-relaxed whitespace-pre-wrap">
                {outletContent}
              </p>
            </div>
          }
          imgSlot={shops}
          imgParams="lg:mr-40 lg:h-72 lg:w-2/5"
          aos="zoom-in-left"
        />
        <SplitSection
          primarySlot={
            <div
              className="bg-blue-300 text-gray-700 rounded-r-lg p-4 lg:pl-32 xl:pl-48"
              data-aos={"zoom-in-left"}
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold leading-tight underline">
                Amazing All
              </h3>
              <p className="mt-8 text-sm md:text-xl lg:text-xl xl:text-xl font-light leading-relaxed whitespace-pre-wrap">
                {audienceContent}
              </p>
            </div>
          }
          imgSlot={amazingall}
          imgParams="lg:ml-64 lg:h-72 lg:w-2/5"
          aos="zoom-in-right"
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div
              className="bg-blue-300 text-gray-700 rounded-l-lg p-4 lg:pr-32 xl:pr-48"
              data-aos={"zoom-in-right"}
            >
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold leading-tight underline">
                Don't Miss Out
              </h3>
              <p className="mt-8 text-sm md:text-xl lg:text-xl xl:text-xl font-light leading-relaxed whitespace-pre-wrap">
                {dontMissContent}
              </p>
            </div>
          }
          imgSlot={dontMiss}
          imgParams="lg:mr-40 lg:h-80 lg:w-2/5"
          aos="zoom-in-left"
        />
      </section>
      <section id="enroll" className="py-20 lg:pt-32">
        <div className="container mx-auto text-center">
          <LabelText className="text-gray-600 text-xl sm:text-2xl lg:text-4xl font-extrabold">
            Enroll Now !
          </LabelText>
          <div className="flex flex-row mt-8 lg:px-24 justify-center">
            <img
              src={enroll}
              className="opacity-50"
              alt="enroll"
              data-aos={"flip-right"}
            />
            <div className="button-container h-16 sm:pt-2 w-70 absolute self-end">
              <Button
                className="mt-16 sm:mt-12 bg-blue-600 text-xs sm:text-lg md:text-xl lg:text-2xl text-white sm:text-blue-400 transition duration-300 ease-in-out sm:bg-transparent hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-95 rounded-full border border-blue-500"
                override
                size="base"
                clickFunction={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLScP5NckkgIu-HgmPBl79INrUq9Pyv_yz6pvnrT4nkYN18lCJw/viewform?usp=sf_link"
                  )
                }
              >
                <span className="font-black">Get LFS Card Today</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="container h-72 mt-40 mx-auto bg-blue-600 flex flex-col-reverse md:flex-row rounded-lg">
        <div className="ml-4 sm:ml-16 sm:-mt-4 md:mt-8 w-4/5 text-white">
          <span className="text-xl md:text-2xl lg:text-4xl xl:text-5xl font-mono font-extrabold">
            Get the LFS Mobile App
          </span>
          <ul
            className="list-disc sm:text-sm lg:text-xl ml-8"
            data-aos={"fade-right"}
          >
            <li>Our Services in your pocket</li>
            <li>Download Our LFS App now</li>
            <li>Available in PlayStore and AppStore</li>
          </ul>
          <div className="mt-4 p-4 flex flex-row">
            <div
              className="playstore self-center w-32 sm:w-40"
              data-aos={"fade-up"}
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.lwg.lfs&hl=en"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={playstore} alt="playstore" />
              </a>
            </div>
            <div
              className="appstore self-center ml-8 w-32 sm:w-40"
              data-aos={"fade-up"}
            >
              <a
                href="https://www.apple.com/ios/app-store/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={appstore} alt="appstore" />
              </a>
            </div>
          </div>
        </div>
        <div
          className="container self-center h-64 w-40 abosolute md:right-0 sm:h-72 sm:w-64 md:mb-8 md:mr-16 md:h-80 lg:h-88 md:w-96 md:self-end"
          data-aos={"fade-down"}
        >
          <img src={mobile} className="h-full w-full" alt="mobile" />
        </div>
      </section>
      <section
        id="register"
        className="container mt-40 py-16 lg:py-32 bg-gray-400 mx-auto text-center rounded-lg"
        style={{
          backgroundImage: `url(${bussiness})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 89%"
        }}
      >
        <h3 className="text-xl text-white sm:text-3xl lg:text-5xl font-extrabold">
          Are you're a Merchant ?
        </h3>
        <p className="text-sm text-white mt-2 lg:mt-8 md:text-base lg:text-xl font-light">
          Grow Your Bussiness
        </p>
        <p className="mt-8 flex justify-center">
          <Button
            size="lg"
            clickFunction={() =>
              window.open("https://forms.gle/j4JqJaXj1wN6z7f7A")
            }
          >
            Register Your Details
          </Button>
        </p>
        {/* <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div> */}
      </section>
      <Footer />
    </div>
  );
};

export default Homepage;
