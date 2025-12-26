import React from 'react';
import { User, Calendar, ArrowUpRight } from 'lucide-react';

const BlogCard = ({ title, date, image }) => {
  return (
    <div className="group cursor-pointer">
      <div className="mb-6">
        <h3 className="text-white text-2xl font-bold leading-tight mb-4 group-hover:opacity-80 transition-opacity duration-300">
          {title}
        </h3>
        <div className="border-b border-white/10 "></div>
        <div className="flex items-center gap-4 text-gray-400 text-xs uppercase tracking-wider mt-5">
          <div className="flex items-center gap-2">
            <User className="w-3.5 h-3.5" />
            <span>By Admin</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-amber-700"></div>
          <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>{date}</span>
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 "
        />
      </div>
    </div>
  );
};

const LatestNews = () => {
  const blogs = [
    {
      title: "Differences Between a Three-Stone Ring and a Solitaire Ring",
      date: "April 6, 2023",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&h=600&fit=crop"
    },
    {
      title: "10 Surprising Facts You Didn't Know About LAB GROWN",
      date: "April 6, 2023",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop"
    },
    {
      title: "Perfectly Designed Diamond Jewelry For Working Moms",
      date: "April 6, 2023",
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="bg-[#1A1A1A] min-h-fit py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex items-start justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-gray-700 rounded-full mb-6">
              <span className="text-gray-300 text-xs uppercase tracking-widest font-medium">
                Our Blogs
              </span>
            </div>
            <h1 className="text-white text-7xl font-bold">
              Latest News
            </h1>
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <BlogCard 
              key={index}
              title={blog.title}
              date={blog.date}
              image={blog.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;