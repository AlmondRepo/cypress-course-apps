import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("user");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSignup = () => {
    if (email && password && termsAccepted) {
      alert("Signup successful!");
    } else {
      alert("Please fill all fields and accept terms.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">Sign Up</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full border p-3 rounded-md mb-3 focus:ring-2 focus:ring-blue-400 enter-email"
          id="enter-email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full border p-3 rounded-md mb-3 focus:ring-2 focus:ring-blue-400 enter-password"
          id="enter-password"
        />
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="w-full border p-3 rounded-md mb-3 focus:ring-2 focus:ring-blue-400 select-user"
          id="select-user"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="w-5 h-5 accent-blue-500 accept"
            id="accept"
          />
          <span className="text-gray-700">Accept Terms and Conditions</span>
        </div>
        <button
          onClick={handleSignup}
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition submit-form"
          id="submit-form"
        >
          Signup
        </button>
      </div>
    </div>
  );
}
