import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../../redux/slices/user-slice"; // Corrected import
import { Link, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const users = useSelector((s) => s.user.value); // Foydalanuvchilarni olish
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const paramsId = useLocation().search.split("=")[1]; // URL'dan `id` olish

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });

  useEffect(() => {
    if (paramsId) {
      const userToEdit = users.find((user) => user.id === Number(paramsId));
      if (userToEdit) {
        setFormData(userToEdit); // Tahrirlash uchun mavjud foydalanuvchi ma'lumotlarini o'rnatish
      }
    }
  }, [paramsId, users]);

  const handleChange = (e) => {
    const {value, name} = e.target;
    setFormData({ ...formData, [name]:value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (paramsId) {
        // Tahrirlash rejimi
        const duplicateUser = users.find(
          (item) =>
            item.username === formData.username && item.id !== Number(paramsId)
        );

        if (duplicateUser) {
          return alert("Username already exists for another user");
        }

        await dispatch(updateUser({ ...formData, id: Number(paramsId) }));
        alert("User updated successfully!");
      } else {
        // Yangi foydalanuvchi qo'shish rejimi
        if (
          users.findIndex((item) => item.username === formData.username) >= 0
        ) {
          return alert("Username already exists");
        }

        await dispatch(addUser({ ...formData, id: new Date().getTime() }));
        alert("User registered successfully!");
      }
      navigate("/login"); // Login sahifasiga yo'naltirish
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          {paramsId ? "Edit User" : "Register"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              name="name"
              id="name"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-600"
            >
              Username
            </label>
            <input
              name="username"
              id="username"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Choose a username"
              value={formData.username}
              onChange={handleChange}
              autoComplete="username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              name="password"
              id="password"
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {paramsId ? "Update User" : "Register"}
          </button>
          <p className="text-center text-gray-500 mt-2">
            {paramsId ? (
              <Link
                to="/register"
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Create New User
              </Link>
            ) : (
              <>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-blue-500 hover:underline focus:outline-none"
                >
                  Login
                </Link>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
