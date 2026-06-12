import Sidebar from "../components/Sidebar";

function Profile() {
  return (
    <div className="bg-[#F8F7FC] min-h-screen">
      <Sidebar />

      <div className="ml-64 p-8">

        <h1 className="text-4xl font-bold mb-8">
          Profile Settings
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-sm max-w-4xl">

          <div className="flex items-center gap-6 mb-8">

            <div className="
            w-24 h-24
            rounded-full
            bg-purple-600
            text-white
            flex
            items-center
            justify-center
            text-4xl
            font-bold
            ">
              I
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Isha
              </h2>

              <p className="text-gray-500">
                isha@example.com
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="border p-4 rounded-xl"
            />

            <input
              type="email"
              placeholder="Email"
              className="border p-4 rounded-xl"
            />

            <input
              type="password"
              placeholder="Current Password"
              className="border p-4 rounded-xl"
            />

            <input
              type="password"
              placeholder="New Password"
              className="border p-4 rounded-xl"
            />

          </div>

          <button
            className="
            mt-8
            bg-purple-600
            text-white
            px-8
            py-3
            rounded-xl
            "
          >
            Update Profile
          </button>

        </div>

      </div>
    </div>
  );
}

export default Profile;