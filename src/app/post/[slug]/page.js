"use client";
import blogData from "../../data/blogData.json";

const Post = ({ params }) => {
  const post = blogData.find((post) => post.id === parseInt(params.slug));

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <div className="bg-white rounded-md shadow-md p-8 m-4">
      <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <p className="text-gray-800">{post.content}</p>
    </div>
  );
};

export default Post;
