import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Settings() {
  const currentUser = JSON.parse(
    localStorage.getItem("user")
  );

  const [name, setName] = useState(
    currentUser?.name || ""
  );

  const [email, setEmail] = useState(
    currentUser?.email || ""
  );

  const [password, setPassword] =
    useState("");

  const [message, setMessage] =
    useState("");

  const handleSave = () => {
    const updatedUser = {
      ...currentUser,
      name,
      email,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );

    setMessage(
      "✅ Profile Updated Successfully"
    );
  };

  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        <h1 className="text-4xl font-bold mb-2">
          Settings
        </h1>

        <p className="text-gray-500 mb-8">
          Manage your account settings
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Profile Card */}

          <div className="bg-white p-8 rounded-3xl shadow">

            <div className="flex flex-col items-center">

              <div className="w-24 h-24 rounded-full bg-purple-600 text-white flex items-center justify-center text-4xl font-bold">
                {name.charAt(0).toUpperCase()}
              </div>

              <h2 className="text-2xl font-bold mt-4">
                {name}
              </h2>

              <p className="text-gray-500">
                {email}
              </p>

              <span className="mt-3 bg-purple-100 text-purple-700 px-4 py-1 rounded-full">
                {currentUser?.role}
              </span>

            </div>

          </div>

          {/* Form */}

          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow">

            <h2 className="text-2xl font-bold mb-6">
              Account Information
            </h2>

            <div className="space-y-5">

              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  className="w-full border rounded-xl p-3 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full border rounded-xl p-3 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  New Password
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Enter new password"
                  className="w-full border rounded-xl p-3 outline-none"
                />
              </div>

              <button
                onClick={handleSave}
                className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700"
              >
                Save Changes
              </button>

              {message && (
                <div className="bg-green-100 text-green-700 p-3 rounded-xl">
                  {message}
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Settings;