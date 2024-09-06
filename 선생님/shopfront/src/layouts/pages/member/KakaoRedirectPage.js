import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getAccessToken,
  getMemberWithAccessToken,
} from "../../../api/kakaoApi";
import { useDispatch } from "react-redux";
import useCustomLogin from "../../../hooks/useCustomLogin";
import { login } from "../../../slice/loginSlice";

function KakaoRedirectPage() {
  const [searchParam] = useSearchParams();
  const authCode = searchParam.get("code");

  const dispatch = useDispatch();
  const { moveToPath } = useCustomLogin();

  useEffect(() => {
    getAccessToken(authCode).then((accessToken) => {
      console.log("##########accessToken#########");
      console.log(accessToken);

      getMemberWithAccessToken(accessToken).then((memberInfo) => {
        console.log("##########memberInfo#########");
        console.log(memberInfo);

        dispatch(login(memberInfo));
      });
    });
  }, [authCode]);

  return (
    <div>
      <div>KakaoRedirectPage</div>
      <div>{authCode}</div>
    </div>
  );
}

export default KakaoRedirectPage;
