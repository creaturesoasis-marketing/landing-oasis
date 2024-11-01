import React from 'react';
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Contact Us</h1>
      <p className="mb-8 text-gray-600 text-center">
        We’d love to hear from you! Here’s how you can reach us:
      </p>

      <div className="flex flex-col md:flex-row w-full md:w-2/3 space-y-6 md:space-y-0 md:space-x-6">
        {/* Contact Information Box */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex-1 text-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch</h2>
          <p className="flex items-center justify-center mb-2 text-gray-600">
            <FaPhone className="mr-2 text-gray-800" />
            Phone: +971 55 552 6796
          </p>
          <p className="flex items-center justify-center mb-2 text-gray-600">
            <FaEnvelope className="mr-2 text-gray-800" />
            Email: <a href="mailto:info@creaturesoasis.com" className="text-blue-500">info@creaturesoasis.com</a>
          </p>
        </div>

        {/* Social Media Links Box */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex-1 text-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Follow Us</h2>
          <p className="flex items-center justify-center mb-2 text-gray-600">
            <FaFacebook className="mr-2 text-gray-800" />
            <a href="https://facebook.com/CreaturesOasisPetshop" target="_blank" rel="noopener noreferrer" className="text-blue-500">Facebook</a>
          </p>

          <p className="flex items-center justify-center mb-2 text-gray-600">
            <FaInstagram className="mr-2 text-gray-800" />
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-500">Instagram</a>
          </p>
          <p className="flex items-center justify-center mb-2 text-gray-600 ">
            <FaTwitter className="mr-2 text-gray-800" />
            <a href="https://twitter.com/creaturesoasis" target="_blank" rel="noopener noreferrer" className=" text-gray-400 cursor-not-allowed pointer-events-none">Twitter</a>
          </p>
          
        </div>
      </div>

      {/* Store Link Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 mt-6 w-full md:w-2/3 text-center">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Visit Our Store</h2>
        <p className="text-gray-600 mb-4">
          Explore our wide range of products to keep your pets happy and healthy!
        </p>
        <a 
          href="https://creaturesoasis.com/store" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Go to Store
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
