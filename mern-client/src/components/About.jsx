import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
          About Our Book Inventory System
        </h1>
        <p className="text-gray-700 leading-7 mb-6 text-justify">
          Welcome to the <span className="font-bold">Book Inventory System</span>, your one-stop destination for buying, selling, and managing books with ease! 
          Our platform is designed to cater to book enthusiasts, students, and sellers by providing a seamless experience to find and share books at the best prices.
        </p>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Browse a vast collection of books across various genres.</li>
          <li>Sell your pre-loved books to earn extra cash effortlessly.</li>
          <li>Manage your book listings with intuitive tools.</li>
          <li>Find the best deals on new and used books.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h2>
        <p className="text-gray-700 leading-7 mb-6 text-justify">
          At the Book Inventory System, our mission is to promote the love for books by creating a community-driven platform where people can connect, exchange knowledge, and make books more accessible to everyone.
        </p>
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Why Choose Us?</h2>
        <p className="text-gray-700 leading-7 text-justify">
          Whether you're looking to declutter your bookshelf or hunt for your next great read, our user-friendly interface and fair pricing system make it easy and enjoyable. 
          Join us today and become part of a thriving book-loving community!
        </p>
      </div>
    </div>
  );
};

export default About;
