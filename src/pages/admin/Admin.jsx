import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../redux/slices/user-slice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Admin = () => {
  const users = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState({});

  const handleDelete = (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      dispatch(deleteUser(userId));
    }
  };

  const handleEditUser = (userId) => {
    navigate(`/register?q=${userId}`);
  };

  const togglePasswordVisibility = (userId) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [userId]: !prevState[userId],
    }));
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen p-5 dark:bg-gray-900 dark:text-white bg-gray-100">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        Admin Panel - User List
      </h2>
      <div className="flex justify-between items-center mb-6 text-blue-700">
        <input
          type="text"
          placeholder="Search users..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-1/3 p-2 border rounded-lg focus:ring focus:ring-blue-300"
        />
      </div>
      {Array.isArray(filteredUsers) && filteredUsers.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredUsers.map((user) => (
            <motion.div
              key={user.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full max-w-sm bg-gradient-to-br from-blue-100 to-blue-200 border rounded-lg shadow-lg p-6"
            >
              <div className="flex flex-col items-center">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
                  alt="User Avatar"
                />
                <h5 className="mb-1 text-xl font-bold text-gray-900">
                  {user.name}
                </h5>
                <span className="text-sm text-gray-700 mt-1">
                  Username: {user.username}
                </span>
                <span className="text-sm text-gray-500 mt-1">
                  Password:{" "}
                  <span
                    onClick={() => togglePasswordVisibility(user.id)}
                    className="cursor-pointer text-blue-500 hover:underline"
                  >
                    {passwordVisibility[user.id] ? user.password : "******"}
                  </span>
                </span>
                <span className="text-sm text-gray-500 mt-1">
                  Id: {user.id}
                </span>
                <div className="flex mt-4 space-x-3">
                  <button
                    onClick={() => handleEditUser(user.id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default Admin;
