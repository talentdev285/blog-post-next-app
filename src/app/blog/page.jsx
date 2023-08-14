"use client";

import Link from "next/link";
import blogData from "../data/blogData.json";

const Blog = () => {
  return (
    <div>
      <h1 className="text-white text-3xl font-semibold mb-4">Blog Posts</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogData.map((post) => (
          <li key={post.id} className="bg-white rounded-md shadow-md p-4">
            <Link className="text-blue-500" href={`/post/${post.id}`} passHref>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
