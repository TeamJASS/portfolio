import { Link } from 'react-router-dom';
import { EnvelopeIcon, EyeSlashIcon } from '@heroicons/react/16/solid';
import { useForm } from "react-hook-form";

const Login = () => {
  const {       , handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.7)),url('./assets/images/pexels.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="leading-9 border border-white bg-white bg-opacity-10 border-opacity-30 backdrop-blur-md rounded-lg p-8 md:p-16 shadow-lg w-full max-w-md mx-4">
        <h1 className="font-bold text-3xl md:text-4xl text-center text-white">
          Welcome Back!
        </h1>
        <p className="text-sm md:text-base text-gray-300 text-center mb-6">
          Login to your dashboard
        </p>

        <fieldset>
          <form action="" className="flex flex-col gap-y-4 " onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center gap-x-3 py-2 px-3 border border-white rounded-md">
              <EnvelopeIcon className="h-6 w-6 text-white" />
              <input
                className="outline-none bg-transparent flex-1 text-white"
                type="text"
                placeholder="Email"
                {
                  ...register("Email", {required: "Email is required"})
                }
              />
              {errors.Email && (<p className='text-red-600'>{errors.Email.message}</p>)}
            </div>

            <div className="flex items-center gap-x-3 py-2 px-3 border border-white rounded-md">
              <EyeSlashIcon className="h-6 w-6 text-white" />
              <input
                className="outline-none bg-transparent flex-1 text-white"
                type="password"
                placeholder="Password"
                {
                  ...register("password", {required: "Password is required", minLenght: 6})
                }
              />
              {errors.Password && (<p className='text-red-600'>{errors.Password.message}</p>)}
            </div>

            <div className="flex items-center justify-between text-white mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="hover:underline">
                Forgot password?
              </a>
            </div>

            <button className="bg-white py-3 px-6 rounded-tl-lg rounded-br-lg text-gray-800 font-semibold hover:bg-gray-200 transition">
              Login
            </button>

            <div className="flex items-center justify-center mt-4 text-white">
              <p>Don't have an account?</p>
              <Link to="/login" className="ml-2 underline">
                Log In
              </Link>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
