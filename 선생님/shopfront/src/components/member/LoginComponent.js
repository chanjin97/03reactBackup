import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginSlice, { login, loginPostAsync } from "../../slice/loginSlice";
import { useNavigate } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";
import KakaoLoginComponent from "./KakaoLoginComponent";

const initState = {
  email: "",
  pw: "",
};

function LoginComponent() {
  const [loginParam, setLoginParam] = useState({ ...initState });

  const { doLogin, moveToPath } = useCustomLogin();

  const loginState = useSelector((state) => state.loginSlice);
  console.log("emeil" + loginState.email);

  const handleChange = (e) => {
    loginParam[e.target.name] = e.target.value;
    console.log(loginParam);
    setLoginParam({ ...loginParam });
  };

  const handleClickLogin = (e) => {
    e.preventDefault();
    // dispatch(login(loginParam));

    // dispatch(loginPostAsync(loginParam))
    //   .unwrap()
    //   .then((data) => {
    //     console.log(data);

    //     if (data.error) {
    //       alert("이메일과 패스워드 불일치");
    //     } else {
    //       // alert("로그인성공");

    //       navigate({ pathname: "/" }, { replace: true });
    //       window.location.reload();
    //     }
    //   });

    doLogin(loginParam).then((data) => {
      if (data.error) {
        alert("이메일과 패스워드 확인!!!");
      } else {
        moveToPath("/");
        window.location.reload();
      }
    });
  };

  return (
    <>
      <div className="h-screen  flex items-center">
        <div className="container mx-auto">
          <div className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
            <div>
              <h3 className="font-bold text-2xl">Welcome to Startup</h3>
              <p className="text-gray-600 pt-2">Sign in to your account.</p>
            </div>
            <form className="flex flex-col">
              <div className="bg-gray-200 mt-10 rounded pt-3 mb-5">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                  value={loginParam.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="pw"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                  value={loginParam.pw}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-end">
                <a
                  href="#"
                  className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6"
                >
                  Forgot your password?
                </a>
              </div>
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                onClick={handleClickLogin}
              >
                Sign In
              </button>
            </form>
            <KakaoLoginComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginComponent;
