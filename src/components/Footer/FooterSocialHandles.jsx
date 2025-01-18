import React from "react";
import { FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";
import TermAndCondition from "./FooterT&C.jsx";
import Refund from "./FooterRefund.jsx";

const FooterSocialHandles = () => {
  const socialLinks = [
    {
      id: 1,
      icon: (
        <FaFacebook className="cursor-pointer hover:text-primary hover:scale-105 duration-200 text-blue-600" />
      ),
      link: "https://www.facebook.com/people/Expert-Educational-Consultancy-Estd1995/100067182972359/?mibextid=ZbWKwL",
    },
    {
      id: 2,
      icon: (
        <FaInstagram className="cursor-pointer hover:text-primary hover:scale-105 duration-200 text-pink-500" />
      ),
      link: "https://www.instagram.com/experteducationalconsultancy/?hl=en",
    },
    {
      id: 3,
      icon: (
        <FaTelegram className="cursor-pointer hover:text-primary hover:scale-105 duration-200 text-blue-500" />
      ),
      link: "https://t.me/ExpertNEETUG",
    },
  ];

  return (
    <div className="flex flex-col space-y-6 py-4">
      {/* Heading */}
      <h2 className="text-lg font-bold text-gray-800">
        Contact us via our Socials
      </h2>

      {/* Social Links */}
      <div className="flex space-x-6">
        {socialLinks.map((social) => (
          <a
            href={social.link}
            key={social.id}
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Terms & Conditions */}
      <div className="pt-4">
        <TermAndCondition />
      </div>
      {/* Terms & Conditions */}
      <div className="pt-4">
        <Refund></Refund>
      </div>
    </div>
  );
};

export default FooterSocialHandles;
