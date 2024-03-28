import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF, FaGithub } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import Modal from "./Modal";
import { AuthContext } from "../contexts/AuthProvider";
import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signUpWithGmail, createUser, login, updateUserProfile } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/user";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(data.email, data.photoURL).then(() => {
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axios
            .post("http://localhost:5000/api/user", userInfo)
            .then((response) => {
              alert("Account created Successfull!");
              document.getElementById("my_modal_5").close();
              navigate(from, { replace: true });
            });
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleregister = () => {
    signUpWithGmail().then((result) => {
      const user = result.user;
      const userInfo = {
        name: result?.user?.displayName,
        email: result?.user?.email, 
      };
      axios
        .post("http://localhost:5000/api/user", userInfo)
        .then((response) => {
          alert("Account created Successfull!");
          document.getElementById("my_modal_5").close();
          navigate("/user");
        });
    }).catch((error) =>console.log(error));
  };
  return (
    <div data-theme="light">
      <div className="max-w-md bg-white shadow w-full mx-auto flex items-center justify-center my-20">
        <div className="modal-action flex flex-col justify-center mt-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body"
            method="dialog"
          >
            <h3 className="font-bold text-lg text-black flex justify-center">
              Create an Account!
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered text-black"
                required
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered text-black"
                required
                {...register("password")}
              />
              <label className="label mt-1">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Signup"
                className="btn bg-blue text-white"
              />
            </div>
            <p className="text-black text-center my-2">
              Have an account?
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="underline text-blue ml-1"
              >
                Login
              </button>
            </p>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black"
            >
              ✕
            </Link>
          </form>

          <div className="text-center space-x-3 mb-5">
            <button
              className="btn btn-circle hover:bg-blue hover:text-white"
              onClick={handleregister}
            >
              <FaGoogle />
            </button>
            <button className="btn btn-circle hover:bg-blue hover:text-white">
              <FaFacebookF />
            </button>
            <button className="btn btn-circle hover:bg-blue hover:text-white">
              <FaGithub />
            </button>
          </div>
        </div>
        <Modal />
      </div>
    </div>
  );
};

export default Signup;
