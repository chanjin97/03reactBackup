import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import loginSlice from "../../slice/loginSlice";

function BasicMenu() {
  const loginState = useSelector((state) => state.loginSlice);
  return (
    <div className="flex">
      <div className="w-4/5">
        <ul className="flex gap-3">
          <li>
            <Link to="/">MAIN</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>

          {loginState.email ? (
            <li>
              <Link to="/product">PRODUCT</Link>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="w-1/5">
        {!loginState.email ? (
          <Link to="/member/login">LOGIN</Link>
        ) : (
          <Link to="/member/logout">LOGOUT</Link>
        )}

        {/* 이메일이 있다면 */}
        {/* {loginState.email ? (
          <Link to="/member/logout">LOGOUT</Link>
        ) : (
          <Link to="/member/login">LOGIN</Link>
        )} */}
      </div>
    </div>
  );
}

export default BasicMenu;
