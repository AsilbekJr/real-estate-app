import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/reduxHook";

const Header = () => {
  const { currentUser } = useAppSelector((state) => state.user);
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Shohona</span>
            <span className="text-slate-700">Koshona</span>
          </h1>
        </Link>
        <form className="bg-slate-100 rounded-lg p-3 flex items-center">
          <input
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            type="text"
            placeholder="Search"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About{" "}
            </li>
          </Link>
          {currentUser ? (
            <Link to="profile">
              <img
                src={currentUser.avatar}
                alt="avatar"
                className="rounded-full w-7 h-7 object-cover"
              />
            </Link>
          ) : (
            <Link to="sign-in">
              <li className="hidden sm:inline text-slate-700 hover:underline">
                Sign In
              </li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
