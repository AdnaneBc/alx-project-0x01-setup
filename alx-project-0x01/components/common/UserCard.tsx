import React from "react";
import { UserProps } from "@/interfaces"; // Ensure you're importing the type

const UserCard = ({ user }: { user: UserProps }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-blue-700">{user.name}</h2>
      <p className="text-gray-500">@{user.username}</p>
      <p className="mt-2 text-sm text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-600">📞 {user.phone}</p>
      <p className="text-sm text-gray-600">🌐 {user.website}</p>

      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-700">Company:</h3>
        <p className="text-gray-600">{user.company.name}</p>
        <p className="text-gray-400 italic">{user.company.catchPhrase}</p>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-700">Address:</h3>
        <p className="text-gray-600">
          {user.address.street}, {user.address.suite}, {user.address.city}
        </p>
        <p className="text-gray-400 text-xs">ZIP: {user.address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;
