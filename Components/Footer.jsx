import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-20">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">About Creatures Oasis</h2>
            <p>
              At Creatures Oasis, we are committed to providing high-quality and
              nutritious products for your beloved pets. Our dedication to
              excellence has made us a trusted name in the pet care industry.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/offers" className="text-gray-400 hover:text-white">
                  Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF
                  className="text-gray-400 hover:text-white"
                  size={24}
                />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="text-gray-400 hover:text-white"
                  size={24}
                />
              </Link>
              <Link
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  className="text-gray-400 hover:text-white"
                  size={24}
                />
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn
                  className="text-gray-400 hover:text-white"
                  size={24}
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Creatures Oasis. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
