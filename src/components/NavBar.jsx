import React from "react";
import Logo from "../images/Logo.png";

import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const NavBar = () => {
  return (
    <div className=" py-14 px-16 container">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <img src={Logo} alt="Logo" className="h-14" />
          <div className="flex items-center space-x-6">
            <p className="cursor-pointer text-xl">Essential</p>
            <p className="cursor-pointer text-xl">O'yinlar</p>
            <p className="cursor-pointer text-xl">Testlar</p>
          </div>
        </div>
        <div>
          <Link to={"/signup"}>
            <Button className="transition duration-300">Kirish</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
