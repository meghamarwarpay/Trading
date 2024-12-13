import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex justify-between items-center space-x-8">
          {/* Left Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              <img src="/your-logo.png" alt="Your Logo" className="w-32" />
            </Link>
            <p className="mt-2 text-sm text-gray-400">
              © {new Date().getFullYear()} Your Company. All rights reserved.
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
                <Link href="/pricing" className="text-gray-400 hover:text-white">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
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
              <li>Sheopur Road, Jaipur, 302033</li>
              <li>Phone: (+91) 9306596579</li>
              <li>Email: <a href="mailto:info@breakoutmantra.in" className="hover:text-white">info@breakoutmantra.in</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
