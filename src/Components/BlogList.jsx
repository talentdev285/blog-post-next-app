// import React from "react";
// import Link from "next/link";
// import blogData from "../app/data/blogData.json";

// const BlogList = () => {
//   return (
//     <div className="flex flex-wrap justify-center">
//       {blogData.map((post) => (
//         <div
//           key={post.id}
//           className="bg-white rounded-md shadow-md p-4 m-4 w-80"
//         >
//           <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
//           <p className="text-gray-600 mb-4">{post.date}</p>
//           <p className="text-gray-800">{post.content.substring(0, 100)}...</p>
//           <Link className="text-blue-500 mt-2 block" href={`/post/${post.id}`}>
//             Read More
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BlogList;
"use client";
import React from "react";
import Link from "next/link";

import Link from "next/link";
import blogData from "../data/blogData.json";

const Blog = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Blog Posts</h1>
      <ul>
        {blogData.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              <a className="text-blue-500">{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
