import React, { useState } from 'react';

import Pagination from './Pagination';

const Blog = () => {
  const allPosts = [
    {
      id: 0,
      title: 'No blog content yet',
      category: '',
      description: '',
      image: '/images/blog/placeholder.jpg',
      author: {
        name: 'Placeholder',
        image: '/images/person/placeholder.jpg',
        date: '',
        readTime: '',
      },
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3; // Number of posts to show per page
  const totalPages = Math.ceil(allPosts.length / postsPerPage);

  const currentPosts = allPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  return (
    <div className="w-full p-12 bg-white">
      <div className="flex items-end justify-between mb-12 header">
        <div className="title">
          <p className="text-center mb-4 text-4xl font-bold text-gray-800">
            Lastest articles
          </p>
          <p className="text-2xl font-light text-gray-400">
            All article are verified by 2 experts and valdiate by the CTO
          </p>
        </div>
        <div className="text-end">
          <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
            <div className=" relative ">
              <input
                type="text"
                id='"form-subscribe-Search'
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Enter a title"
              />
            </div>
            <button
              className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="m-auto overflow-hidden rounded-lg shadow-lg"
          >
            <a href="#" className="block w-full h-full">
              <img
                alt="blog photo"
                src={post.image}
                className="object-cover w-full max-h-40"
              />
              <div className="w-full p-4 bg-white dark:bg-gray-800">
                <p className="font-medium text-indigo-500 text-md">
                  {post.category}
                </p>
                <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                  {post.title}
                </p>
                <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                  {post.description}
                </p>
                <div className="flex items-center mt-4">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src={post.author.image}
                      className="mx-auto object-cover rounded-full h-10 w-10 "
                    />
                  </a>
                  <div className="flex flex-col justify-between ml-4 text-sm">
                    <p className="text-gray-800 dark:text-white">
                      {post.author.name}
                    </p>
                    <p className="text-gray-400 dark:text-gray-300">
                      {post.author.date} - {post.author.readTime}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Blog;
