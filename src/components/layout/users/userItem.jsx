import React from "react";
import { Link } from "react-router-dom";
const User = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card shadow-md compact side bg-base-100">
      <div className="flex flex-row card-body space-x-4">
        <div className="avatar">
          {" "}
          <div className="shadow w-14 h-14 rounded-full">
            <img
              src={avatar_url}
              alt="Profile"
              srcset=""
              className="w-20 h-20"
            />
          </div>
        </div>
        <div>
          <h3 className="card-title">{login}</h3>
          <Link className="text-base-content text-opacity-40 hover:text-opacity-90" to={`users/${login}`}>
            visit profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
