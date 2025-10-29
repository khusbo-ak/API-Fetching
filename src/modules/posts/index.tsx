"use client";
import React, { useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  console.log("Posts:", posts);
  async function getdata() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="bg-pink-400 text-white px-2 shadow-md hover:bg-pink-300">
      <button onClick={getdata}>See Posts</button>
      {posts.length > 0 &&
        posts.map((post: any) => (
          <div
            key={post.id}
            className="bg-white text-black m-4 p-4 border shadow-md"
          >
            <h2 className="font-bold text-lg mb-2">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
    </div>
  );
};
export default Posts;
