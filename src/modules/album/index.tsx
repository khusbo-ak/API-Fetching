"use client";
import React, { useEffect, useState } from "react";

const Album = () => {
  const [albums, setAlbums] = useState([]);
  console.log("Albums:", albums);
  async function getData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      console.log(data);
      setAlbums(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className="bg-blue-900 text-white px-2 shadow-md hover:bg-blue-500">
      <button onClick={getData}>View Albums</button>
      {albums.length > 0 && (
        <div className="grid grid-cols-4 gap-4 p-4 bg-white text-black">
          {albums.map((album: any) => (
            <div className="bg-slate-800 text-white border" key={album.id}>
              <p>{album.title}</p>
              <img src={album.thumbnailUrl} alt={album.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Album;
