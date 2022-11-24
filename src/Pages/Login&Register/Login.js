import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bg from "../../Assets/notes.jpg";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, setLoading } = useContext(AuthContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        setLoading(true);
        navigate(from, { replace: true });
        toast.success("Login successfull");
        console.log(user);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
        toast.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div
      className=" bg-cover"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="h-[800px] flex justify-center items-center">
        <div className="w-96 p-7 bg-white/90 shadow-2xl rounded-xl">
          <h1 className="text-xl text-center font-bold">Login</h1>
          <form className="grid gap-2" onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: "Email Address is required",
                })}
                placeholder="Your Email"
                type="email"
              />
              {errors.email && (
                <p className="text-sm font-medium text-red-500" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 character",
                  },
                })}
                placeholder="Your Password"
                type="password"
              />
              {errors.password && (
                <p className="text-sm font-medium text-red-500" role="alert">
                  {errors.password?.message}
                </p>
              )}
              <label className="label">
                <span className="label-text">Forget Password?</span>
              </label>
            </div>
            {error && (
              <p className="text-sm font-medium text-red-500">{error}</p>
            )}
            <input
              value="login"
              className="btn btn-accent w-full"
              type="submit"
            />
          </form>
          <p className="text-center font-medium text-sm pt-5">
            New to Doctor's Portal?{" "}
            <Link className="text-secondary  font-bold" to="/registration">
              Create New Account.
            </Link>
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-accent btn-outline w-full">
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
