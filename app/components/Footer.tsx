import React from 'react';
import { BsTiktok, BsTwitter } from 'react-icons/bs';
import { SiLinkedin } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="p-3 flex mt-1xl bg-white">
      <div className="flex flex-col items-center">
        <div className="w-20">
          <img
            src="/assets/icon/fyliablackicon.png"
            alt="Votre logo"
            className="w-full"
          />
        </div>
        <div className="mt-6 flex ">
          <BsTwitter className="mr-1 text-1xl lg:text-2xl" />
          <SiLinkedin className="mr-1 text-1xl lg:text-2xl" />
          <BsYoutube className="mr-1 text-1xl lg:text-2xl" />
          <FaFacebookF className="mr-1 text-1xl lg:text-2xl" />
          <BsTiktok className="mr-1 text-1xl lg:text-2xl" />
        </div>
      </div>
      <div className="flex">
        <div id="footersolutioncontent" className="footer-section-columns">
          <h2 className="text-white">Solution</h2>
          <p>A propos</p>
          <p>Fylia, c'est quoi ?</p>
          <p>Album</p>
        </div>
        <div className="footer-section-columns">
          <h2 className="text-black">Contact</h2>
          <p className="text-black">moncontact@fylia.fr</p>
          <p className="text-black">dorian.boatti@fylia.fr</p>
          <p className="text-black">luc.malfatti@fylia.fr</p>
          <p className="text-black">valentin.jeannest@fylia.fr</p>
        </div>
        <div className="footer-section-columns">
          <h2 className="text-black">Sécurité</h2>
          <p className="text-black">© All right reserved by Fylia</p>
          <span className="text-black cursor-pointer">Termes & Conditions</span>
          <span className="text-black cursor-pointer">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
