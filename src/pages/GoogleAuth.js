import axios from "axios";
import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAction } from "../store/User-Slice";
import { api } from "../services/AxiosConfig";

const GoogleAuth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const googleTest = async () => {

    const { data } = await axios.get(
      `https://stg-coding-stones-api.zendev.se/google-auth?state=${searchParams.get('state')}&code=${searchParams.get('code')}`,
      {
        withCredentials: true,
    
        headers: {
          "Content-Type": "application/json",
        },
      }
      );
      console.log(data.access_token);
    localStorage.setItem("access_token", data.access_token);
    const { user } = await api.get(
      "https://stg-coding-stones-api.zendev.se/google-user",);

    localStorage.set("user", user);

    dispatch(
      userAction.login({
        name: 'Amar Alikadić',
        picture:'https://lh3.googleusercontent.com/ogw/AOh-ky2FtOhUi0Q49lb3F_AOuMqkcK8WQ9VBTFRQsf4=s32-c-mo',
      })
    );
    navigate("/");
  };

  console.log("state",searchParams.get("state"));
  console.log("code",searchParams.get("code"));

  useEffect(() => {
    googleTest();
  }, []);

  return <div>GoogleAuth</div>;
};

export default GoogleAuth;
