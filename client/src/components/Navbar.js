import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  ShoppingBasket,
  Menu,
  Home,
  PersonAdd,
  AdminPanelSettingsOutlined,
  Logout,
  Explore,
} from "@mui/icons-material";
import { useTheme, useMediaQuery, Drawer } from "@mui/material";
import { userLogout } from "../redux/slices/userSlice";
import { useSnackbar } from "notistack";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {
    user: { user },
    cart,
  } = useSelector((state) => state);

  const handleLogout = () => {
    setOpenDrawer(false);
    window.localStorage.removeItem("user");
    window.localStorage.removeItem("token");
    dispatch(userLogout());
    enqueueSnackbar("You have successfully logged out", {
      variant: "success",
      autoHideDuration: 3000,
    });
    navigate("/login");
  };

  return (
    <nav className="w-full sticky top-0 bg-gray-900 text-green-100 z-50 shadow-lg">
      <div className=" flex items-center space-x-10 md:text-lg font-semibold py-4 px-6">
        {isMatch ? (
          <>
            <Menu
              className="text-green-100 cursor-pointer"
              onClick={() => setOpenDrawer(!openDrawer)}
            />
            <Drawer
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              anchor="top"
            >
              <div className="bg-gray-900 min-h-[30vh] p-4 vspace-y-4">
                <NavLink
                  to="/"
                  onClick={() => setOpenDrawer(false)}
                  className="flex items-center space-x-3 mt-3 ml-6  py-2"
                >
                  <Home className="text-green-500" />
                  <span>Home</span>
                </NavLink>
                <NavLink
                  to="/menu"
                  onClick={() => setOpenDrawer(false)}
                  className="flex items-center space-x-3  ml-6  py-2"
                >
                  <Explore className="text-green-500" />
                  <span>Menu</span>
                </NavLink>
                <NavLink
                  to="/cart"
                  onClick={() => setOpenDrawer(false)}
                  className="flex items-center space-x-3 mt-3 ml-6  py-2"
                >
                  <Explore className="text-green-500" />
                  <span>Cart</span>
                </NavLink>
                {user && user.role === "admin" && (
                  <NavLink
                    to="/admin/foods"
                    onClick={() => setOpenDrawer(false)}
                    className="flex items-center space-x-3 ml-6  py-2"
                  >
                    <AdminPanelSettingsOutlined className="text-green-500" />
                    <span>Dashboard</span>
                  </NavLink>
                )}
                {user ? (
                  <div
                    onClick={handleLogout}
                    className="flex items-center space-x-3 mt-3 ml-6 cursor-pointer"
                  >
                    <Logout className="text-green-500" />
                    <span>Logout</span>
                  </div>
                ) : (
                  <NavLink
                    to="/login"
                    onClick={() => setOpenDrawer(false)}
                    className="flex items-center space-x-3 mt-3 ml-6  py-2"
                  >
                    <PersonAdd className="text-green-500" />
                    <span>Login</span>
                  </NavLink>
                )}
              </div>
            </Drawer>
          </>
        ) : (
          <>
            <NavLink
              to="/"
              className="flex items-center hover:text-green-500 transition-colors duration-200"
            >
              <Home className="mr-1" fontSize="small" />
              Home
            </NavLink>
            <NavLink
              to="/menu"
              className="flex items-center hover:text-green-500 transition-colors duration-200"
            >
              <Explore className="mr-1" fontSize="small" />
              Explore
            </NavLink>
            {user && user.role === "admin" && (
              <NavLink
                to="/admin/foods"
                className="flex items-center hover:text-green-500 transition-colors duration-200"
              >
                <AdminPanelSettingsOutlined className="mr-1" fontSize="small" />
                Dashboard
              </NavLink>
            )}
            {user ? (
              <span
                onClick={handleLogout}
                className="flex items-center cursor-pointer hover:text-green-500 transition-colors duration-200"
              >
                <Logout className="mr-1" fontSize="small" />
                Logout
              </span>
            ) : (
              <NavLink
                to="/login"
                className="flex items-center hover:text-green-500 transition-colors duration-200"
              >
                <PersonAdd className="mr-1" fontSize="small" />
                Login
              </NavLink>
            )}
          </>
        )}
        <NavLink
          to="/cart"
          className="relative flex items-center hover:text-green-500 transition-colors duration-200"
        >
          <ShoppingBasket />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
              {cart.length}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
