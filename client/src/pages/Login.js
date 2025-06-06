import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useSnackbar } from "notistack";
import axios from "axios";
import Loading from "../components/loading";
import { Router, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const {
    user: { user },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user !== null) {
      Router.push("/");
    }
  }, [user]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
  //        email,
  //       password,
  //     })
  //     .then((data) => {
  //       setLoading(false);
  //       setEmail("");
  //       setPassword("");
  //       window.localStorage.setItem("user", JSON.stringify(data.data.user));
  //       window.localStorage.setItem("token", JSON.stringify(data.data.token));
  //       dispatch(userLogin(data.data.user));
  //       enqueueSnackbar(data.data.message, {
  //         variant: "success",
  //         autoHideDuration: 3000,
  //       });
  //       Router.push("/foods");
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       enqueueSnackbar(err.response.data.message, {
  //         variant: "error",
  //         autoHideDuration: 3000,
  //       });
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/login", { email, password });
      console.log("Login success:", res.data);
    } catch (err) {
      if (err.response) {
        console.error("Login error response:", err.response.data);
        alert(err.response.data.message);
      } else {
        console.error("Unexpected error:", err.message);
      }
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="max-w-6xl mx-auto min-h-[85vh] grid md:grid-cols-2">
            <div className="hidden md:flex h-full  justify-center items-center">
              <img
                src="https://res.cloudinary.com/jamesmarycloud/image/upload/v1653199653/login-page_a0ovkz.png"
                className="h-[400px]"
              />
            </div>
            <div className="h-full flex justify-center items-center flex-col">
              <h1 className="text-3xl tracking-wider font-bold text-green-600 mb-5">
                LOGIN
              </h1>
              <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 font-semibold outline-none rounded-lg bg-transparent w-64 text-center placeholder:text-sm border-2 border-green-400"
                  type="email"
                  placeholder="Your Email address"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 font-semibold outline-none rounded-lg bg-transparent w-64 text-center placeholder:text-sm border-2 border-green-400"
                  type="password"
                  placeholder="Your Password"
                />
                <input
                  className="bg-green-400 text-white hover:bg-green-100 hover:text-green-600 tracking-widest transition duration-300 ease-in-out font-bold p-3 rounded-lg cursor-pointer "
                  type="submit"
                  value={"Login"}
                />
              </form>
              <p className="mt-3">
                Not have an account?
                <Link
                  to="/register"
                  className="text-green-500 font-semibold ml-2"
                >
                  Register Now
                </Link>
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
