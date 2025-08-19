import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/mtl-logo-no-bg.png" 
                alt="Mombasa Tourism Innovation Lab Logo" 
                className="h-24 w-auto"
              />
              <p className="text-blue-100 mb-7 max-w-md text-base">
                Rejuvenating and diversifying Kenya's largest coastal tourism
                destination through innovation and community engagement.
              </p>
            </div>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="bg-white/10 hover:bg-primary/80 rounded-full p-2 transition-colors border border-white/10 shadow-md"
              >
                <Facebook size={22} className="text-white" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="bg-white/10 hover:bg-primary/80 rounded-full p-2 transition-colors border border-white/10 shadow-md"
              >
                <Twitter size={22} className="text-white" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="bg-white/10 hover:bg-primary/80 rounded-full p-2 transition-colors border border-white/10 shadow-md"
              >
                <Instagram size={22} className="text-white" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="bg-white/10 hover:bg-primary/80 rounded-full p-2 transition-colors border border-white/10 shadow-md"
              >
                <Linkedin size={22} className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-blue-100 hover:text-primary font-medium transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-blue-100 hover:text-primary font-medium transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/innovators"
                  className="text-blue-100 hover:text-primary font-medium transition-colors duration-200"
                >
                  Innovators
                </Link>
              </li>
              <li>
                <Link
                  to="/impacts"
                  className="text-blue-100 hover:text-primary font-medium transition-colors duration-200"
                >
                  Impacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold text-white mb-4 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-blue-100">
                <MapPin size={18} className="mr-3 text-primary" />
                <span className="text-base">Mombasa, Kenya</span>
              </li>
              <li className="flex items-center text-blue-100">
                <Phone size={18} className="mr-3 text-primary" />
                <span className="text-base">+254 729 005 789</span>
              </li>
              <li className="flex items-center text-blue-100">
                <Mail size={18} className="mr-3 text-primary" />
                <span className="text-base">info@mombasatourismlab.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-blue-200 text-sm tracking-wide">
            © 2025 Mombasa Tourism Innovation Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
