'use client';
import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function App() {
  return (
    <footer className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
        {/* Contact Text */}
        <div className="mr-12 hidden lg:block">
          <span>Contáctanos en nuestras redes sociales:</span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
}
