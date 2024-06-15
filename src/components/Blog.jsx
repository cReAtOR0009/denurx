import React from "react";
import { Sectionwrapper } from "./hoc";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { blogs } from "../assets/text";

const Blog = () => {
  const BlogCard = ({ title, content, summary, image, date, author }) => {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-2 sm:p-6">
          <h3 className={`${styles.h3} mb-2`}>{title}</h3>
          <p className={`${styles.paragraph} text-[#939191] mb-4`}>
            {date} - {author}
          </p>
          <p className={`${styles.paragraph}  mb-4`}>{summary}</p>
          <Link to="#" className="text-primary-500 hover:underline">
            Read more
          </Link>
        </div>
      </div>
    );
  };
  return (
    <div className={`${""} relative mx-auto px-4`}>
      <h2 className={`${styles.h2}`}>Our Blog</h2>
      <div className={`blog grid gap-8 lg:grid-cols-2 xl:grid-cols-3`}>
        {blogs.map((blog, index) => (
          <BlogCard {...blog} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Sectionwrapper(Blog, "blog");
