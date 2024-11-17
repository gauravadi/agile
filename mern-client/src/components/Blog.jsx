import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Top 10 Books to Read This Year',
      excerpt: 'Discover the best books that should be on your reading list this year...',
      image: 'https://via.placeholder.com/600x300',
      link: '/blog/top-10-books',
    },
    {
      id: 2,
      title: 'The Benefits of Selling Pre-Owned Books',
      excerpt: 'Learn why selling your used books is both eco-friendly and profitable...',
      image: 'https://via.placeholder.com/600x300',
      link: '/blog/benefits-of-selling-books',
    },
    {
      id: 3,
      title: 'How to Find Rare Books in Online Inventories',
      excerpt: 'Tips and tricks for uncovering hidden gems in online book inventories...',
      image: 'https://via.placeholder.com/600x300',
      link: '/blog/rare-books-guide',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
          Welcome to Our Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-md overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-2xl font-semibold text-blue-700">
                  {post.title}
                </h2>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                <Link
                  to={post.link}
                  className="block text-blue-500 underline mt-4"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
