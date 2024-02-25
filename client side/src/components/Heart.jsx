import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import useAuthCheck from "./Hooks/useAuthCheck";
import { useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "./context/UserDetailContext";
import { addToFav } from "../utils/api";
import { checkFavorites, updateFavorites } from "../utils/common.js";

const Heart = ({id}) => {
  const [heartColor, setHeartColor] = useState("white");
  const { user } = useAuth0();
  const { validateLogin } = useAuthCheck();
  const {
    userDetails: { token, favorites },
    setUserDetails,
  } = useContext(UserDetailContext);

  useEffect(() => {
    setHeartColor(() => checkFavorites(id, favorites));
  }, [favorites]);

  const { mutate } = useMutation({
    mutationFn: () => addToFav(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        favorites: updateFavorites(id, prev.favorites || []),
      }));
    },
  });

  const handleLike = () => {
    if (validateLogin()) {
      mutate();
      setHeartColor((prev) => (prev === "white" ? "#fa3e5f" : "white"));
    }
  };
  return (
    <AiFillHeart
      size={24}
      className="absolute top-[55px] right-[60px] z-1 cursor-pointer transform scale-100 hover:scale-110 transition duration-400 ease-in-out"
      color={heartColor}
      onClick={(e) => {
        e.stopPropagation();
        handleLike();
      }}
    />
  );
};

export default Heart;
