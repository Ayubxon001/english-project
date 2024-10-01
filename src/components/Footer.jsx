import React from "react";
import FirstFounders from "../images/Founders.png";
import SecondFounders from "../images/SecondFounders.png";
const Footers = () => {
  return (
    <div className="">
      <div className="py-[2px] bg-slate-800 w-full"></div>
      <div className="flex mt-3 justify-between">
        <div className="">
          <h1 className="text-3xl ">Asoschilar</h1>
          <div className="flex mt-3">
            <img src={FirstFounders} alt="" />
            <img src={SecondFounders} alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl">Bog'lanish</h1>
          <p className="text-slate-500">muhiddinsobirov957@gmail.com</p>
          <p className="text-slate-500">abdusaitov@gmail.com</p>
        </div>
        <div className="">
          <h1 className="text-3xl ">Bo'limlar</h1>
          <p>Asosiy</p>
          <p>Essential</p>
          <p>O’yinlar</p>
          <p>Test</p>
        </div>
      </div>
    </div>
  );
};

export default Footers;
