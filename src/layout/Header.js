import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Home, Info, Briefcase, CreditCard, HelpCircle, FileText, Mail, Menu } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-800">
              Your Logo
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="flex items-center space-x-2 text-base font-medium text-gray-500 hover:text-gray-900">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link href="/about" className="flex items-center space-x-2 text-base font-medium text-gray-500 hover:text-gray-900">
              <Info size={20} />
              <span>About</span>
            </Link>
            <Link href="/services" className="flex items-center space-x-2 text-base font-medium text-gray-500 hover:text-gray-900">
              <Briefcase size={20} />
              <span>Services</span>
            </Link>
            <Link href="/plans" className="flex items-center space-x-2 text-base font-medium text-gray-500 hover:text-gray-900">
              <CreditCard size={20} />
              <span>Plans</span>
            </Link>
            <Link href="/faq" className="flex items-center space-x-2 text-base font-medium text-gray-500 hover:text-gray-900">
              <HelpCircle size={20} />
              <span>FAQ</span>
            </Link>
            <Link href="/legals" className="flex items-center space-x-2 text-base font-medium text-gray-500 hover:text-gray-900">
              <FileText size={20} />
              <span>Legals</span>
            </Link>
            <Link href="/contact" className="flex items-center space-x-2 text-base font-medium text-gray-500 hover:text-gray-900">
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
  )
}

export default Header

