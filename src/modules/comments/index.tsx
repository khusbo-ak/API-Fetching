"use client";
import React, { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  async function getData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      console.log(data);
      setComments(data);
    } catch (error) {
      console.error("Errors:", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-purple-400 text-white px-2 shadow-md hover:bg-purple-300">
      {/* <button onClick={getData}> View Comments</button> */}

      {comments.length > 0 &&
        comments.map((comments: any) => (
          <div
            key={comments.id}
            className="bg-white text-black m-4 p-4 border shadow-md"
          >
            <h2 className="font-bold text-lg mb-2">{comments.name}</h2>
            <p>{comments.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Comments;
