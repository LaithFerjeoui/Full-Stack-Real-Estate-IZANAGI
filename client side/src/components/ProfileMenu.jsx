import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileMenu = ({ user, logout }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (action) => {
    // You can handle different actions here
    switch (action) {
      case 'account-settings':
        navigate("./settings", {replace: true})
        break;
      case 'favorites':
        navigate("./favourites", {replace: true})
        break;
      case 'bookings':
        navigate("./bookings", {replace: true})
        break;
        case 'privacy':
          navigate("./favourites", {replace: true})
        break;
      case 'sign-out':
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
    <div className="relative inline-block text-left">
      <div onClick={handleDropdownToggle} style={{ cursor: 'pointer' }}>
        <img className="inline-block h-10 w-10 rounded-full transition ease-in-out duration-300 transform hover:scale-105 hover:border-2 hover:border-white" src={user?.picture} alt="My Profile Picture" />
      </div>

      {isDropdownOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              onClick={() => handleMenuItemClick('account-settings')}
            >
              Account settings
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              onClick={() => handleMenuItemClick('favorites')}
            >
              Favorites
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              onClick={() => handleMenuItemClick('bookings')}
            >
              My Bookings
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              onClick={() => handleMenuItemClick('privacy')}
            >
              Privacy Policy
            </a>
            <form method="POST" action="#" role="none">
              <button
                type="submit"
                className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                role="menuitem"
                tabIndex="-1"
                onClick={() => handleMenuItemClick('sign-out')}
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
