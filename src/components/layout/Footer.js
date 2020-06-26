import React from 'react';
import Popup from '../Popup';

import lfsteam from '../../img/lfsteam.png';
import Button from '../Button';

import { TermsAndConditions, PrivacyPolicy } from '../TCP';

//Importing footer icons
import fbIcon from '../../img/social/facebook.png';
import igIcon from '../../img/social/instagram.png';
import twIcon from '../../img/social/twitter.png';

const Footer = () => (
  <footer className="box-border bg-black mx-auto pb-0 px-3 mt-48 mb-0 text-gray-800">
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row pt-8">
      <img src={lfsteam} className="h-24 w-56 my-8" alt="lfs-team"/>
      <div class="w-3/5 sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-password"
        >
          Never Miss Updates and News from Us
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          placeholder="Enter Your Email"
        />
        <Button className="text-sm font-extrabold h-12" clickFunction={() => alert('Coming Soon!')}>
          SUBSCRIBE
        </Button>
      </div>
    </div>
    <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row -mx-3">
      <div className="flex-1 mt-16 text-white px-3">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5 font-mono">
          info.lfscard@gmail.com
          <br />
          Sarswatinagar-06 , Kathmandu
          <br/>
          +977 – 9886538260
        </p>
      </div>
      <div className="flex-1 mt-16 px-3">
        <h2 className="text-lg font-semibold text-white">Important Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <Popup
              name="Terms &amp; Conditions"
              title="Terms &amp; Conditions"
              content={TermsAndConditions}
            />
          </li>
          <li>
            <Popup name="Privacy Policy" title="Privacy Policy" content={PrivacyPolicy} />
          </li>
        </ul>
      </div>
      <div className="flex-1 mt-16 px-3">
        <h2 className="text-lg font-semibold text-white">Follow Us</h2>
        <ul className="mt-4 flex flex-row leading-loose">
          <li className="mx-2 mt-4 h-8 w-8">
            <a href="https://www.facebook.com" className="">
              <img src={fbIcon} className="w-full h-full" alt="facebook"/>
            </a>
          </li>
          <li className="mx-2 mt-4 h-8 w-8">
            <a href="https://www.instagram.com" className="">
              <img src={igIcon} className="w-full h-full" alt="instagram"/>
            </a>
          </li>
          <li className="mx-2 mt-4 h-8 w-8">
            <a href="https://www.facebook.com" className="">
              <img src={twIcon} className="w-full h-full" alt="twitter"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="text text-white text-center mt-8 text-sm font-extrabold md:text-base lg:text-lg xl:text-xl">
      LFS Group : LFS Card © 2020. All rights reserved .
    </div>
  </footer>
);

export default Footer;
