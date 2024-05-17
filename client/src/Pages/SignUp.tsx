import { Link } from "react-router-dom";

const SignOut = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign up</h1>
      <form className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          Sign up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account</p>
        <Link to={"/sign-in"} className="text-blue-700">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignOut;
