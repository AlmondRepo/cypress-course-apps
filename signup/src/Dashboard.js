import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Dropdown from "./Dropdown"; // Importing dropdown

export default function Dashboard() {
  const navigate = useNavigate();

  // Simulated user details
  const [user] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    role: "User",
  });

  // Dropdown state
  const [selectedOption, setSelectedOption] = useState("");

  const handleLogout = () => {
    // alert("Logged out successfully!");
    navigate("/"); // Redirects to Signup page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h1 id="dashboard-title" className="text-3xl font-bold text-center text-gray-700 mb-4">
          Dashboard
        </h1>

        {/* Welcome Section */}
        <div className="text-center">
          <p id="welcome-text" className="text-gray-600 mb-2">
            Welcome back, <span className="font-semibold">{user.name}</span>!
          </p>
          <p id="user-email" className="text-gray-500">
            Email: {user.email}
          </p>
          <p id="user-role" className="text-gray-500 mb-4">
            Role: {user.role}
          </p>
        </div>

        {/* Dropdown Selection */}
        <div className="mb-4">
          <label htmlFor="dashboard-dropdown" className="block text-gray-700 font-medium mb-1">
            Select an Option:
          </label>
          <Dropdown
            options={[
              { label: "View Profile", value: "profile" },
              { label: "Settings", value: "settings" },
              { label: "Help", value: "help" },
              { label: "Reports", value: "reports" },
            ]}
            selectedValue={selectedOption}
            onChange={(value) => navigate(`/${value}`)}
          />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <button
            id="profile-btn"
            onClick={() => navigate("/profile")}
            className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
          >
            View Profile
          </button>
          <button
            id="settings-btn"
            onClick={() => navigate("/settings")}
            className="bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition"
          >
            Settings
          </button>
          <button
            id="help-btn"
            onClick={() => navigate("/help")}
            className="bg-yellow-500 text-white p-3 rounded-md hover:bg-yellow-600 transition"
          >
            Help
          </button>
          <button
            id="reports-btn"
            onClick={() => navigate("/reports")}
            className="bg-purple-500 text-white p-3 rounded-md hover:bg-purple-600 transition"
          >
            Reports
          </button>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          id="logout-btn"
          className="w-full bg-red-500 text-white p-3 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
