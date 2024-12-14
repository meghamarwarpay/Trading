import Link from "next/link";
import img from "../assets/images/logo1.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex justify-between items-center space-x-8">
          {/* Left Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              <Image src={img} height={30} width={90} alt="Logo" />
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              © {new Date().getFullYear()} Impactpeak. All rights reserved.
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div className="flex-shrink-0 text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/plan" className="text-gray-400 hover:text-white">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Section - Working Hours and Contact */}
          <div className="flex-shrink-0 text-center">
            <h3 className="text-lg font-semibold mb-4">Working Hours</h3>
            <ul className="text-gray-400">
              <li>9 AM - 4 PM, Monday</li>
              <li>9 AM - 4 PM, Tuesday</li>
              <li>9 AM - 4 PM, Wednesday</li>
              <li>9 AM - 4 PM, Thursday</li>
              <li>9 AM - 4 PM, Friday</li>
            </ul>
          </div>

          <div className="flex-shrink-0 text-center">
            <h3 className="text-lg font-semibold mt-6 mb-4">Contact Us</h3>
            <ul className="text-gray-400">
              <li>
                Floor No.: A-12 2nd Floor,
                <br/> Shree Kanhaiya Mansion,
                <br/> Vaishali
                Nagar,
                <br/> Jaipur,Rajasthan 302021
              </li>
              <li>Phone: +91-7727067599</li>
              <li>
                Email:{" "}
                <a
                  href="impactpeakpvtltd@gmail.com"
                  className="hover:text-white"
                >
                  impactpeakpvtltd@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
