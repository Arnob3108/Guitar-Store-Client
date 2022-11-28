import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import bg from "../../Assets/music.jpg";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../hooks/useToken";
import SmallLoader from "../../Components/Loader/SmallLoader";

const Register = () => {
  const { createUser, updateUser, setLoading, googleProvider, loading } =
    useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  // const [createdGoogleUserEmail, setCreatedGoogleUserEmail] = useState("");
  console.log(createdUserEmail);

  const [token] = useToken(createdUserEmail);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleRegister = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("Welcome to Guitar Store");
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.position);
            toast.success("Profile Updated!!");
          })
          .catch((e) => console.log(e));
      })
      .catch((error) => console.error(error))
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
        saveGoogleuser(user?.displayName, user?.email);
        // navigate(from, { replace: true });
        toast.success("successfully login");
      })
      .catch((error) => toast.error(error.message));
  };

  const saveGoogleuser = (name, email, position = "Buyer") => {
    const user = { name, email, position };
    fetch(`https://product-resale-server-arnob3108.vercel.app/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          console.log(data);
          getUserToken(email);
        }
      });
  };
  const getUserToken = (email) => {
    fetch(`https://product-resale-server-phi.vercel.app/jwt?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          localStorage.setItem("accessToken", data.accessToken);
          navigate(from, { replace: true });
        }
      });
  };

  const saveUser = (name, email, position = "Buyer") => {
    const user = { name, email, position };
    fetch("https://product-resale-server-phi.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCreatedUserEmail(email);
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
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="500"
        className="h-[800px] flex justify-center items-center"
      >
        <div className="w-96 p-7 bg-white/95 lg:bg-white/80 shadow-2xl rounded-xl">
          <h1 className="text-xl text-center font-bold">Registration</h1>
          <form className="grid gap-2" onSubmit={handleSubmit(handleRegister)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                className="input input-bordered w-full max-w-xs"
                {...register("name", { required: "Name is required" })}
                placeholder="Your Name"
                type="text"
              />
              {errors.name && (
                <p className="text-sm font-medium text-red-500" role="alert">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <select
              className="input input-bordered w-full max-w-xs"
              {...register("position", { required: true })}
            >
              <option value="Buyer">Buyer</option>
              <option value="Seller">Seller</option>
            </select>
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
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
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

            <button className="btn btn-accent w-full">
              {loading ? <SmallLoader></SmallLoader> : "Sign Up"}
            </button>
          </form>
          <p className="text-center font-medium text-sm pt-5">
            Allready have an Account?{" "}
            <Link className="text-secondary  font-bold" to="/login">
              Login Now.
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-accent btn-outline w-full"
          >
            {loading ? <SmallLoader></SmallLoader> : "Continue With Google"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
