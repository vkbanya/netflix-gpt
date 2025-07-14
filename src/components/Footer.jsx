import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="h-80 w-full py-8 bg-black text-white">
      <div className="mx-12 m-auto">
        <div className="mb-12">Question? call 9876543210</div>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link to="/helpCentre">Help centre</Link>
          </li>
          <li>
            <Link to="/termOfUse">Term of use</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link to="/helpCentre">Help centre</Link>
          </li>
          <li>
            <Link to="/termOfUse">Term of use</Link>
          </li>
          <li>
            <Link to="/faq">FAQs</Link>
          </li>
          <li>
            <Link to="/helpCentre">Help centre</Link>
          </li>
          <li>
            <Link to="/termOfUse">Term of use</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact us</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
