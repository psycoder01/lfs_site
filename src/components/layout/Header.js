import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Button from '../Button';
import logopetals from '../../img/logopetals.png';

const Header = () => (
  <header className="sticky top-0 z-10 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl font-bold text-blue-600">
        <div className="w-12 mr-3">
          <img src={logopetals} alt="logo"/>
        </div>
        LFS Card
      </div>
      <div className="flex mt-4 text-blue-600 sm:mt-0">
        <AnchorLink className="px-4" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4" href="#explore">
          Explore
        </AnchorLink>
        <AnchorLink className="px-4" href="#enroll">
          Enroll
        </AnchorLink>
        <AnchorLink className="px-4" href="#connect">
          Connect
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm" clickFunction={()=> alert("Coming Soon!")}>Log In</Button>
      </div>
    </div>
  </header>
);

export default Header;