"use client";

import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  async function getdata() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error("Errors:", error);
    }
  }
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div className="bg-yellow-500 text-white px-2 shadow-md hover:bg-yellow-400">
      {/* <button onClick={getdata}>View Users</button> */}
      {users.length > 0 &&
        users.map((users: any) => (
          <div
            key={users.id}
            className="bg-white text-black m-4 p-4 border shadow-md"
          >
            <h2>{users.name}</h2>
            <p>{users.email}</p>
          </div>
        ))}
    </div>
  );
};
export default Users;
