import { Link, useNavigate } from "react-router-dom";
import hero from "../../assets/images/signin.png";
import googlelogo from "../../assets/images/googlelogo.svg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { LoadingSpinner } from "../../components/Feedbacks";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    if (user && user.role === "user") {
      navigate("/dashboard");
    }
  }, []);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.username.length < 2) {
      isValid = false;
      newErrors.username = "Username must be at least 2 characters long";
    }

    if (formData.password.length < 6) {
      isValid = false;
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return isValid;
  };

  // const LoginForm = () => {
  //   const {
  //     register,

  //     formState: { erors },
  //   } = useForm();

  //   const onSubmit = async (data) => {
  //     console.log(data);
  //     try {
  //       const res = await apiLogin({
  //         userName: data.username,
  //         password: data.password,
  //       });
  //       console.log("Response:", res.data);

  //       console.log("Second: I got called");
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);
      const userInfo = {
        firstName: formData.username,
        lastName: "",
        username: formData.username,
        email: formData.username,
        role: "user",
        profile: {
          profilePicture:
            "https://images.unsplash.com/photo-1621732560007-ac654b4b3b6a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      };
      dispatch({
        type: "LOGGED_IN_USER",
        payload: userInfo,
      });
      window.localStorage.setItem("portiUser", JSON.stringify(userInfo));
      toast.success("Sign in successful");
      navigate("/dashboard");
      setLoading(false);
    } catch (error) {
      toast.error("Sign in failed");
      setLoading(false);
    }
  };

  const handleLoginWithGoogle = async () => {
    // Google login logic here
  };

  return (
    <div className="grid grid-cols-5 h-screen">
      <div className="col-span-5 md:col-span-3 flex flex-col justify-center items-center p-5 gap-4 bg-[#F8F8FA]">
        <h1 className="text-xl font-bold mb-2">
          Porti<span className="text-blue-500">Builder</span>
        </h1>
        <h2 className="text-4xl font-bold mb-6">Sign In</h2>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4 max-w-lg"
        >
          <div className="mb-4 ">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="username"
            >
              USER NAME
            </label>
            <input
              className={`shadow appearance-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.username ? "border-red-500" : ""
              }`}
              id="username"
              type="text"
              placeholder="User Name"
              onChange={handleChange}
              value={formData.username}
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">{errors.username}</p>
            )}
          </div>

          <div className="mb-4 relative">
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              PASSWORD
            </label>
            <input
              className={`shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errors.password ? "border-red-500" : ""
              }`}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
            />
            <span
              className="absolute right-3 top-10 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
          </div>

          <div className="flex items-center justify-center mb-4 w-1/2 mx-auto">
            <button
              className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                loading ? "bg-gray-300 hover:bg-gray-300" : ""
              }`}
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <LoadingSpinner height="25px" width="25px" />
              ) : (
                "Sign In"
              )}
            </button>
          </div>
          <div className="text-center mb-4">OR</div>
          <div className="flex items-center justify-center w-1/2 mx-auto">
            <button
              className="w-full flex justify-center gap-2 align-middle items-center hover:bg-red-700 hover:text-white text-gray-700 font-semibold py-2 px-4 border-2 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleLoginWithGoogle}
              disabled={loading}
            >
              <img src={googlelogo} alt="google-logo" />{" "}
              <p className="">Sign In with Google</p>
            </button>
          </div>
          <small className="text-center">
            New to PortiBuilder?{" "}
            <Link className="text-blue-600" to="/signup">
              Sign Up
            </Link>
          </small>
        </form>
      </div>
      <div
        className="hidden md:flex col-span-5 md:col-span-2 gap-4  flex-col justify-center items-center bg-cover bg-center p-8 relative"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h2 className="text-white text-4xl font-bold mb-4">Welcome Back</h2>
          <p className="text-white mb-6 text-md">
            To keep connected with us, enter your details to login your account
          </p>
          <Link
            to="/signup"
            className="text-white bg-gray-500 hover:bg-gray-700 px-6 py-4 rounded-lg"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
