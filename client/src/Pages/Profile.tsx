import { useAppSelector } from "../redux/reduxHook";

const Profile = () => {
  const { currentUser } = useAppSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          className="rounded-full cursor-pointer w-24 h-24 object-cover self-center mt-2"
          src={currentUser?.avatar}
          alt="profile"
        />
        <input
          type="text"
          placeholder="username"
          className="border rounded-lg p-3"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border rounded-lg p-3"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border rounded-lg p-3"
          id="password"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-80 uppercase">
          update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out account</span>
      </div>
    </div>
  );
};

export default Profile;
