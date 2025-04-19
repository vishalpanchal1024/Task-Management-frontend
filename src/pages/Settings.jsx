import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const SettingsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-10 text-gray-200 dark:text-white">
      {/* Theme Toggle */}
      <div className="flex justify-end">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="text-xl p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-md"
        >
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Basic Information */}
      <section className="bg-white dark:bg-blue-500/30 p-8 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
        <div className="flex items-center space-x-4 mb-6">
          <img src="https://via.placeholder.com/80" alt="Profile" className="rounded-full w-20 h-20 border-4 border-green-500" />
          <p className="text-sm text-gray-500 dark:text-gray-400">This will be displayed on your profile.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Name" className="input-style" />
          <input type="email" placeholder="Email Address" className="input-style" />
          <input type="text" placeholder="Gender" className="input-style" />
          <input type="date" placeholder="Date of Birth" className="input-style" />
          <input type="text" placeholder="Department" className="input-style" />
          <input type="text" placeholder="Location" className="input-style" />
        </div>
        <button className="btn mt-6">Update</button>
      </section>

      {/* Password & Security */}
      <section className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Password & Security</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="password" placeholder="Enter Current Password" className="input-style" />
          <input type="password" placeholder="Enter New Password" className="input-style" />
          <input type="password" placeholder="Confirm new Password" className="input-style md:col-span-2" />
        </div>
        <button className="btn mt-6">Update</button>
      </section>

      {/* Delete Account */}
      <section className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Delete your account</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">When you delete your account, you lose access to all of your data. This action cannot be undone.</p>
        <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-xl">Delete</button>
      </section>
    </div>
  );
};

export default SettingsPage;