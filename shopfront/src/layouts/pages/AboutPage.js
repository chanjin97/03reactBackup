import React from "react";
import BasicLayout from "../BasicLayout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  // const {isLogin,moveTo}

  const loginState = useSelector((state) => state.loginSlice);

  console.log(loginState.email);
  const navigate = useNavigate();

  if (!loginState.email) {
    navigate({ pathname: "/login" }, { replace: true });
  }

  return (
    <BasicLayout>
      <div>AboutPage</div>
    </BasicLayout>
  );
}

export default AboutPage;
