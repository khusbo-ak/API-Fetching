"use client";
import Album from "@/modules/album";
import Comments from "@/modules/comments";
import Posts from "@/modules/posts";
import Todos from "@/modules/todos";
import Users from "@/modules/users";
import React from "react";

const AlbumPage = () => {
  return (
    <div className="bg-white text-black min-h-screen ">
      <Album />
      <Posts />
      <Comments />
      <Todos />
      <Users />
    </div>
  );
};
export default AlbumPage;
