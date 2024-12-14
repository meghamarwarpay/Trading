"use client"; // Mark this file as a Client Component

import { usePathname } from "next/navigation"; // Updated import
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Home,
  Info,
  Briefcase,
  CreditCard,
  HelpCircle,
  FileText,
  Mail,
  Menu,
} from "lucide-react";
import img from "../assets/images/logo1.png";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname(); // Get current path

  const isActive = (path) => pathname === path;

  return (
    <header className="sticky top-0 shadow-md bg-white z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-30">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800 ">
              <Image src={img} height={30} width={90} alt="Logo" />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className={`flex items-center space-x-2 text-base no-underline font-medium ${
                isActive("/") ? "text-blue-900" : "text-gray-500"
              } hover:text-gray-900`}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link
              href="/about"
              className={`flex items-center space-x-2 text-base no-underline font-medium ${
                isActive("/about") ? "text-blue-900" : "text-gray-500"
              } hover:text-gray-900`}
            >
              <Info size={20} />
              <span>About</span>
            </Link>
            <Link
              href="/Services"
              className={`flex items-center space-x-2 text-base no-underline font-medium ${
                isActive("/Services") ? "text-blue-900" : "text-gray-500"
              } hover:text-gray-900`}
            >
              <Briefcase size={20} />
              <span>Services</span>
            </Link>
            <Link
              href="/plan"
              className={`flex items-center space-x-2 text-base no-underline font-medium ${
                isActive("/plan") ? "text-blue-900" : "text-gray-500"
              } hover:text-gray-900`}
            >
              <CreditCard size={20} />
              <span>Plans</span>
            </Link>
            <Link
              href="/faq"
              className={`flex items-center space-x-2 text-base no-underline font-medium ${
                isActive("/faq") ? "text-blue-900" : "text-gray-500"
              } hover:text-gray-900`}
            >
              <HelpCircle size={20} />
              <span>FAQ</span>
            </Link>
            <Link
              href="/legals"
              className={`flex items-center space-x-2 text-base no-underline font-medium ${
                isActive("/legals") ? "text-blue-900" : "text-gray-500"
              } hover:text-gray-900`}
            >
              <FileText size={20} />
              <span>Legals</span>
            </Link>
            <Link
              href="/contact"
              className={`flex items-center space-x-2 text-base no-underline font-medium ${
                isActive("/contact") ? "text-blue-900" : "text-gray-500"
              } hover:text-gray-900`}
            >
              <Mail size={20} />
              <span>Contact</span>
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline">Sign up</Button>
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
