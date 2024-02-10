import React, { useContext, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "./context/UserDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../utils/api";
import useFavorites from "./Hooks/useFavorites";

const Layout = () => {
  useFavorites()
  const {
    isAuthenticated,
    user,
    getAccessTokenSilently,
    getAccessTokenWithPopup,
  } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);
  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
  });
  useEffect(() => {
    const getTokenAndRegsiter = async () => {
      let token;
      try {
        token = await getAccessTokenSilently({
          authorizationParams: {
            audience: "http://localhost:8000",
            scope: "openid profile email",
          },
        });
      } catch (error) {
        // If getAccessTokenSilently fails, try getAccessTokenWithPopup
        token = await getAccessTokenWithPopup({
          authorizationParams: {
            audience: "http://localhost:8000",
            scope: "openid profile email",
          },
        });
      }

      localStorage.setItem("access_token", token);
      setUserDetails((prev) => ({ ...prev, token: token }));
      console.log(token);
      mutate(token);
    };

    isAuthenticated && getTokenAndRegsiter();
  }, [isAuthenticated]);

  return (
    <>
      <div className="relative overflow-x-clip ">
        <div className="relative overflow-x-clip ">
          <Header />
        </div>

        <div className="white-gradient " />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
