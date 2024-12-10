import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "../../redux/slices/user-slice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const users = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleDelete = (userId) => {
    console.log(userId);
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmDelete) {
      dispatch(deleteUser(userId));
    }
  };

  const handleEditUser = (userId) => {
    navigate(`/register?q=${userId}`);
  }

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleAddUser = () => {
  //   if (formData.name && formData.username && formData.password) {
  //     const newUserData = {
  //       id: uuidv4(),
  //       name: formData.name,
  //       username: formData.username,
  //       password: formData.password,
  //     };
  //     dispatch(addUser(newUserData));
  //     setFormData({ name: "", username: "", password: "" }); // Formani tozalash
  //   } else {
  //     alert("All fields are required!");
  //   }
  // };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        Admin Panel - User List
      </h2>
      {Array.isArray(users) && users.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="flex flex-col items-center p-6">
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {user.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Username: {user.username}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Password: {user.password}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  ID: {user.id}
                </span>
                <div className="flex justify-between items-center w-full mt-4">
                  <button
                    onClick={() => handleEditUser(user.id)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default Admin;
