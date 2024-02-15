import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdSettings, IoIosLogOut } from "react-icons/io";
import { FaHeart, FaShieldAlt } from "react-icons/fa";
import { IoListCircleOutline } from "react-icons/io5";
import PrivacyPolicyDialog from "./PrivacyPolicy";

const ProfileMenu = ({ user, logout }) => {
  const [openPrivacyPolicyDialog, setOpenPrivacyPolicyDialog] = useState(false);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (action) => {
    // You can handle different actions here
    switch (action) {
      case "account-settings":
        navigate("./settings", { replace: true });
        break;
      case "favorites":
        navigate("./favorites", { replace: true });
        break;
      case "bookings":
        navigate("./bookings", { replace: true });
        break;
      case "privacy":
        setOpenPrivacyPolicyDialog(true);
        break;

      case "sign-out":
        localStorage.clear();
        logout();
        break;
      default:
        break;
    }

    // Close the dropdown after handling the action
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative inline-block text-center">
      <div onClick={handleDropdownToggle} style={{ cursor: "pointer" }}>
        <img
          className="inline-block h-10 w-10 rounded-full transition ease-in-out duration-300 transform hover:scale-105 hover:border-2 hover:border-white"
          src={user?.picture}
          alt="My Profile Picture"
        />
      </div>
      <PrivacyPolicyDialog
        open={openPrivacyPolicyDialog}
        onClose={() => setOpenPrivacyPolicyDialog(false)}
      />

      {isDropdownOpen && (
        <>
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <div className="flex items-center mx-5">
                <IoMdSettings size={20} color="black" />
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:text-gray-500"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleMenuItemClick("account-settings")}
                >
                  Account settings
                </a>
              </div>
              <div className="flex items-center mx-5">
                <FaHeart size={20} color="black" />
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:text-gray-500"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleMenuItemClick("favorites")}
                >
                  Favorites
                </a>
              </div>
              <div className="flex items-center mx-5">
                <IoListCircleOutline size={23} color="black" />

                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:text-gray-500"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleMenuItemClick("bookings")}
                >
                  My Bookings
                </a>
              </div>
              <div className="flex items-center mx-5">
                <FaShieldAlt size={20} color="black" />
                <a
                  href="#"
                  className="text-gray-700 block px-4 py-2 text-sm hover:text-gray-500"
                  role="menuitem"
                  tabIndex="-1"
                  onClick={() => handleMenuItemClick("privacy")}
                >
                  Privacy Policy
                </a>
              </div>
              <div className="flex items-center mx-5">
                <IoIosLogOut size={20} color="black" />
                <div>
                  <form method="POST" action="#" role="none">
                    <button
                      type="submit"
                      className="text-gray-700 block w-full px-4 py-2 text-center text-sm hover:text-gray-500"
                      role="menuitem"
                      tabIndex="-1"
                      onClick={() => handleMenuItemClick("sign-out")}
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileMenu;
