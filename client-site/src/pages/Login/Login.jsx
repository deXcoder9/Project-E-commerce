import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { LiaSpinnerSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, googleLogin, loading, setLoading } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setLoading(true);
      await loginUser(email, password);
      toast.success("Login Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      await googleLogin();
      navigate("/");
      toast.success("Login Successfully");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="flex mt-2 md:mt-5 justify-center items-center">
      <div className="flex flex-col w-full max-w-md box-border rounded-md py-6 px-10 bg-gray-100 text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="text-3xl mt-2 font-bold">Login</h1>
        </div>
        <form
          onSubmit={handleLogin}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#2461E9] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                required
                placeholder="Password `"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#2461E9] bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              disabled={loading}
              type="submit"
              className="bg-[#00cc66] hover:bg-[#1ec5c5] disabled:cursor-not-allowed cursor-pointer w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <LiaSpinnerSolid className="animate-spin m-auto"></LiaSpinnerSolid>
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </form>
        <div className="flex justify-end mt-1">
          <button className="text-xs hover:underline hover:text-[#2461E9] text-gray-400">
            Forgot password?
          </button>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-400"></div>
          <p className="px-3 text-sm ">Or</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-400"></div>
        </div>
        <button
          disabled={loading}
          onClick={handleGoogleSignIn}
          className="flex disabled:cursor-not-allowed justify-center items-center space-x-2 border border-gray-400 hover:border-[#2461E9] my-4 p-2 rounded-lg"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </button>
        <p className="px-6 text-sm text-center text-gray-400">
          Don&apos;t have an account yet?{" "}
          <Link
            to="/register"
            className="hover:underline hover:text-[#2461E9] text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
