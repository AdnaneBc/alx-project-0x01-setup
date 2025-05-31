import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
      <h2 className="text-xl font-bold text-blue-700">{user.name}</h2>
      <p className="text-gray-500">@{user.username}</p>
      <p className="text-sm text-gray-600 mt-1">{user.email}</p>
      <p className="text-sm text-gray-600">📞 {user.phone}</p>
      <a
        href={`https://${user.website}`}
        target="_blank"
        rel="noreferrer"
        className="text-sm text-blue-500 underline"
      >
        🌐 {user.website}
      </a>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700 text-sm">Company</h3>
        <p className="text-gray-600">{user.company.name}</p>
        <p className="text-gray-400 text-sm italic">
          {user.company.catchPhrase}
        </p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700 text-sm">Address</h3>
        <p className="text-gray-600">
          {user.address.street}, {user.address.suite}, {user.address.city}
        </p>
        <p className="text-xs text-gray-400">ZIP: {user.address.zipcode}</p>
      </div>
    </div>
  );
};

export default UserCard;
