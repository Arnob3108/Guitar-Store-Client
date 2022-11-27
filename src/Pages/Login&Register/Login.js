import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bg from "../../Assets/notes.jpg";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { signIn, setLoading, googleProvider } = useContext(AuthContext);

  const [error, setError] = useState("");

  // const [loginUserEmail, setLoginUserEmail] = useState("");
  // const [token] = useToken(loginUserEmail);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // if (token) {
  //   navigate(from, { replace: true });
  // }

  const handleLogin = (data) => {
    console.log(data);
    setError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login successfull");
        setLoading(true);
        getUserToken(data.email);
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

  const googleSignInProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    googleProvider(googleSignInProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // navigate(from, { replace: true });
        toast.success("successfully login");
      })
      .catch((error) => toast.error(error.message));
  };

  const getUserToken = (email) => {
    fetch(`http://localhost:5000/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          navigate(from, { replace: true });
        }
      });
  };

  return (
    <div
      className=" bg-cover"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div
        data-aos="fade-down"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="500"
        className="h-[800px] flex justify-center items-center"
      >
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
            New to Guiter Shop?{" "}
            <Link className="text-secondary  font-bold" to="/registration">
              Create New Account.
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-accent btn-outline w-full"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
