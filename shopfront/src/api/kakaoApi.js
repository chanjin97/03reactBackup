import axios from "axios";

const host = process.env.REACT_APP_API_SERVER_HOST;

const rest_api_key = "315c50414130b68c81495bce678cee27"; // 카카오 디벨로퍼 사이트에서의 레스트 api키
const redirect_uri = "http://localhost:3000/member/kakao";
const auth_code_path = "https://kauth.kakao.com/oauth/authorize"; // https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api 에서 가져온 것

export const getKakaoLoginLink = () => {
  const kakaoUrl = `${auth_code_path}?client_id=${rest_api_key}&redirect_url=${redirect_uri}`;
  return kakaoUrl;
};
