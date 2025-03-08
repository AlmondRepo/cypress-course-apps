import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h1 id="settings-title" className="text-3xl font-bold text-center text-gray-700 mb-4 settings-title">
          Settings
        </h1>
        <p id="settings-text" className="text-gray-600 text-center mb-6 settings-text">
          Modify your preferences here.
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition w-full back-to-dashboard-settings"
          id="back-to-dashboard-settings"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}
