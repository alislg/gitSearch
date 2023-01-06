import React, { useState } from "react";
import { useEffect } from "react";
import User from "./userItem";
const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState([true]);
  useEffect(() => {
    fetchUsers();
  }, []);
  // ${process.env.GITHUB_URL}
  const fetchUsers = async () => {
    const response = await fetch(`https://api.github.com/users`, {
      params: { access_token: "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" },
    });
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex items-center place-items-center text-center">
        Loading...
      </div>
    );
  }
};

export default UserResults;
