import Cookies from "js-cookie";
import React from "react";
import logo from "../assets/logo.svg";
import homeIcon from "../assets/home-icons/homeIcon.svg";
import { AccountIcon } from "../assets/home-icons/account-icon";
import { ProductIcon } from "../assets/home-icons/product-icon";
import { useLocation } from "react-router";
import { PayIcon } from "../assets/home-icons/Pay-icon";
import { Navigate, Outlet } from "react-router";
import { Link } from "react-router-dom";

export const AppLayout = () => {
  if (!Cookies.get("user-token")) return <Navigate to="/" replace />;
  const location = useLocation();
  console.log(location.pathname.slice(5, 12));
  return (
    <>
      <div className="container flex">
        <div className="max-w-[97px] flex flex-col  w-[100%] pt-[30px] px-[24px] h-auto bg-blur">
          <div className="w-[49px] mb-[38px] h-[32px] pl-[9px] pr-[8px]">
            <img src={logo} alt="img" className="w-[32px] h-[32px]" />
          </div>
          <Link to="/app">
            <div className="w-[49px] hover:bg-blue-400 rounded-[10px] py-[15px] pl-[14px] pr-[13px] h-[50px]">
              <img src={homeIcon} alt="w-[30px] h-[30px]" />
            </div>
          </Link>
          <Link to="/app/category">
            <div className="w-[49px] hover:bg-blue-400 rounded-[10px] py-[15px] pl-[14px] pr-[13px] h-[50px]">
              <AccountIcon />
            </div>
          </Link>
          <Link to="/app/product">
            <div className="w-[49px] hover:bg-blue-400 rounded-[10px] py-[15px] pl-[14px] pr-[13px] h-[50px]">
              <ProductIcon />
            </div>
          </Link>
          <div className="w-[49px] hover:bg-blue-400 rounded-[10px] py-[15px] pl-[14px] pr-[13px] h-[50px]">
            <PayIcon />
          </div>
        </div>
        <div className="flex flex-col w-[1343px] h-auto bg-grayer">
          <div className="w-[1343px] h-[80px] bg-white flex flex-col items-start pl-[60px] pt-[10px]">
            <h2 className="text-lg font-extrabold">
              {location.pathname.slice(5, 13)=="" ? 
            "Home" : location.pathname.slice(5, 13)  
            }
            </h2>
            <p className="text-md text-gray-400">{location.pathname}</p>
          </div>
          <div >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
