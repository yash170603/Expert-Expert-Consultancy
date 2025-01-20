import React from "react";
import { FaEnvelope, FaPhoneAlt, FaBuilding } from "react-icons/fa";

const FooterReachUs = () => {
  const ReachUs = [
    {
      id: 1,
      icon: (
        <FaEnvelope className="cursor-pointer hover:text-blue-600 hover:scale-105 duration-200 text-red-500" />
      ),
      link: "mailto:info@expertedu.com",
      text: "info@expertedu.com",
    },
    {
      id: 2,
      icon: (
        <FaPhoneAlt className="cursor-pointer hover:text-blue-600 hover:scale-105 duration-200 text-green-500" />
      ),
      link: "tel:9313555010",
      text: "Call Us",
    },
    {
      id: 3,
      icon: (
        <FaBuilding className="cursor-pointer hover:text-blue-600 hover:scale-105 duration-200 text-yellow-500 text-3xl" />
      ),
      link: "https://www.google.com/maps/place/Expert+Educational+Consultancy+Estd.+1995/@28.712546,77.1371463,17z/data=!3m1!4b1!4m6!3m5!1s0x390d017caca5521d:0xfab588b644feabdd!8m2!3d28.712546!4d77.1371463!16s%2Fg%2F1tf34b9f?entry=ttu&g_ep=EgoyMDI1MDExNC4wIKXMDSoASAFQAw%3D%3D",
      text: "104, Aditya Complex 2, D-Block, Central Market, Prashant Vihar, Delhi-110085",
    },
  ];

  return (
    <div className="flex flex-col space-y-6 py-3">
      {/* Heading */}
      <h2 className="text-2xl font-bold">Reach Us</h2>
      <h3 className="text-sm font-medium">Contact our Support Team</h3>

      {/* Contact Links */}
      <div className="space-y-4">
        {ReachUs.map((item) => (
          <a
            href={item.link}
            key={item.id} // Ensure that each item has a unique key
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-dark2 hover:text-primary"
          >
            {item.icon}
            <span className="font-medium">{item.text}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterReachUs;
