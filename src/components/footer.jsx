import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // X (Twitter) icon
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-16 bg-white mx-12 flex-auto">
      {/* Top Section: About Us + Contact */}
      <div className="px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-200/20 ">
        {/* About Us Section */}
        <div>
          <h2 className="text-lg text-[#21295c] font-bold mb-2 font-serif">About Us</h2>
          <p className="text-black-600 text-base leading-relaxed mb-3 font-serif">
            We are a modern Job Board platform designed to connect job seekers with the right opportunities.  
            From startups to global companies, our platform helps organizations find the talent they need while  
            giving professionals access to a wide range of job listings in various industries.
          </p>

          <h3 className="text-md text-[#21295c] font-bold mt-4 mb-1 font-serif">Our Mission</h3>
          <p className="text-black-600 text-base leading-relaxed mb-3 font-serif">
            To simplify the job search process by providing a user-friendly platform  
            where candidates can easily discover, apply, and track opportunities that match  
            their skills and career goals.
          </p>
        </div>

        {/* Contact Section */}
        <div className="">
          <h2 className="text-lg text-[#21295c] font-bold mb-2 font-serif">Contact</h2>
          <ul className="text-gray-600 text-sm space-y-3">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-green-500" />
              <span>support@jobboard.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />
              <span>123 Main Street, New York, NY</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Social Icons + Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 text-gray-700 border-t border-gray-500/20">
        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-blue-600"><FaFacebookF size={18} /></a>
          <a href="#" className="hover:text-black"><FaXTwitter size={18} /></a>
          <a href="#" className="hover:text-pink-500"><FaInstagram size={18} /></a>
          <a href="#" className="hover:text-blue-700"><FaLinkedinIn size={18} /></a>
          <a href="#" className="hover:text-red-500"><FaPinterestP size={18} /></a>
        </div>

        {/* Copyright & Badge */}
        <div className="flex items-center gap-2 mt-3 md:mt-0 text-sm">
          <span>© 2025</span>
        </div>
      </div>
    </footer>
  );
}
