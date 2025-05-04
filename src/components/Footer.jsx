import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="h-80 w-full py-8 bg-black text-white">
      <div className="mx-12 m-auto">
        <div className="mb-12">Question? call 9876543210</div>

        <ul className="grid grid-cols-4">
          <li className="mb-4">
            <Link to="/faq">FAQs</Link>
          </li>
          <li className="mb-4">
            <Link to="/helpCentre">Help centre</Link>
          </li>
          <li className="mb-4">
            <Link to="/termOfUse">Term of use</Link>
          </li>
          <li className="mb-4">
            <Link to="/faq">FAQs</Link>
          </li>
          <li className="mb-4">
            <Link to="/helpCentre">Help centre</Link>
          </li>
          <li className="mb-4">
            <Link to="/termOfUse">Term of use</Link>
          </li>
          <li className="mb-4">
            <Link to="/faq">FAQs</Link>
          </li>
          <li className="mb-4">
            <Link to="/helpCentre">Help centre</Link>
          </li>
          <li className="mb-4">
            <Link to="/termOfUse">Term of use</Link>
          </li>
          <li className="mb-4">
            <Link to="/contactUs">Contact us</Link>
          </li>
          <li className="mb-4">
            <Link to="/privacy">Privacy</Link>
          </li>
          <li className="mb-4">
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
