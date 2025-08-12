import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6"; // Optional for X/Twitter
import '@fontsource/inter-tight'; 

export default function Footer() {
  return (
    <footer className="bg-[#e6f0fa] mt-18 font-interTight">
    
      {/* Footer Content */}
      <div className="bg-white text-[#21295c] px-6 py-8 flex flex-col items-center md:items-start border-t border-[#21295c]/60">
        <div className="flex flex-col md:flex-row md:justify-around w-full gap-6 mb-4">
          {/* Address */}
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-xl" />
            <p className="text-sm">
              <strong>Our Address:</strong>
              <br />
              3 Amiad Street, Tel Aviv<br />
              Yafa, 6108401 Israel
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-xl" />
            <p className="text-sm">
              <strong>Call Us:</strong> 054-624-1163
              <br />
              <strong>Fax/Call:</strong> 03-6814052
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-xl" />
            <p className="text-sm">
              <strong>Email Us at:</strong>
              <br />
              <a href="mailto:layla@housethree.co.il" className="underline">
                layla@housethree.co.il
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-green-600 p-2 rounded-full hover:bg-green-700">
              <FaInstagram />
            </a>
            <a href="#" className="bg-black p-2 rounded-full hover:bg-gray-800">
              <FaSquareXTwitter />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="w-full  flex justify-center border-t border-[#21295c]/15 pt-4 text-sm">
          <p>© 2020 All Copyrights Reserved To House Number 3</p>
          
        </div>
      </div>
    </footer>
  );
}
