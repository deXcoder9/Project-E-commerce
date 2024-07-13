import { useForm } from "react-hook-form";
import { LiaEye, LiaEyeSlash, LiaSpinnerSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useState } from "react";

const Register = () => {
  const { registerUser, googleLogin, loading, updateProfileInfo, setLoading } =
    useAuth();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const result = await registerUser(data.email, data.password);
      await updateProfileInfo(
        data.name,
        "https://i.ibb.co/PNbNQHp/freelancer-mostofa.jpg"
      );
      console.log(result);
      toast.success("Register Successfully");
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

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };
  return (
    <div className="flex mt-2 md:mt-5  w-full overflow-hidden justify-center items-center">
      <div className="flex flex-col w-full max-w-md box-border rounded-md py-6 px-10  bg-gray-100 text-gray-800">
        <div className="mb-6 text-center">
          <h1 className="text-3xl mt-2 font-bold">Sign Up</h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#2461E9] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.name && (
                <small className="text-red-500">This field is required</small>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#2461E9] bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              {errors.email && (
                <small className="text-red-500">This field is required</small>
              )}
            </div>

            <div>
              <label htmlFor="image" className="block mb-2 text-sm">
                Select Profile
              </label>
              <input
                {...register("photo", { required: true })}
                type="file"
                accept="image/*"
              />{" "}
              <br />
              {errors.photo && (
                <small className="text-red-500">This field is required</small>
              )}
            </div>

            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/,
                  })}
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#2461E9] bg-gray-200 text-gray-900"
                />
                <div onClick={handleShowPassword} className="cursor-pointer">
                  {showPass ? (
                    <LiaEyeSlash
                      size={25}
                      className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2"
                    ></LiaEyeSlash>
                  ) : (
                    <LiaEye
                      size={25}
                      className="absolute top-1/2 right-0 transform -translate-x-1/2 -translate-y-1/2"
                    ></LiaEye>
                  )}
                </div>
              </div>
              {errors.password?.type === "required" && (
                <small className="text-red-500">This field is required</small>
              )}
              {errors.password?.type === "minLength" && (
                <small className="text-red-500">
                  Password must be at least 6 characters
                </small>
              )}
              {errors.password?.type === "pattern" && (
                <small className="text-red-500">
                  Password must be one uppercase & special character
                </small>
              )}
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
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-400"></div>
          <p className="px-3 text-sm ">Or</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-400"></div>
        </div>
        <button
          disabled={loading}
          onClick={handleGoogleSignIn}
          className="flex disabled:cursor-not-allowed justify-center items-center space-x-2 border border-gray-400 hover:border-[#2461E9] my-4 p-2 rounded-lg  cursor-pointer"
        >
          <FcGoogle size={32} />
        </button>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-[#2461E9] text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
