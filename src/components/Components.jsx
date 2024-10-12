import React from "react";

import { Button } from "flowbite-react";
import Board from "../images/Board.png";
import Phone from "../images/Phone.png";
import Game from "../images/Game.png";
import Choose from "../images/Choose.png";

const Components = () => {
  return (
    <div className="  px-16 container">
      <div className="py-32 mb-0 items-center pb-0 flex justify-between">
        <div className="">
          <h1 className="text-6xl font-bold text-slate-600 flex flex-col">
            Ingliz tilini biz<span>bilan o'rganing</span>
          </h1>
          <p className="flex flex-col mt-5">
            It is simple platform which helps you to improve your english
            <span> level with interesting games, simple tasks and exams,</span>
          </p>
          <Button className="mt-5">Boshlash</Button>
        </div>
        <div>
          <img src={Board} alt="" />
        </div>
      </div>

      <div className="py-36 mb-0 flex justify-between items-center">
        <div>
          <h1 className="text-[#F98336] text-3xl">Essentials</h1>
          <h1 className="text-6xl font-bold text-slate-600 flex flex-col">
            So'z boyligini <span> oshiring !!!</span>
          </h1>
          <p className="flex flex-col">
            Ushbu bo'limda siz Essential kitoblarida so'zlarni uzbek tilidagi
            <span>
              <span className="text-[#F98336] text-xl">qiyqiriq</span>
              tarjimalari bilan yod olishingiz mumkin.
            </span>
          </p>
        </div>
        <div>
          <img src={Phone} alt="" />
        </div>
      </div>

      <div className="py-36 mb-0 flex justify-between items-center">
        <div>
          <img src={Game} alt="" />
        </div>
        <div>
          <h1 className="text-[#F98336] text-3xl">Games</h1>
          <h1 className="text-6xl font-bold text-slate-600 flex flex-col">
            O'yin o'ynab
            <span> o'rganish ?</span>
          </h1>
          <p className="">
            Bizning saytimizda
            <span className="text-[#F98336] text-xl">yangicha</span> uslublardan
            foydalanib <br />
            <span>
              bilimingizni oshirishingiz mumkin, ulardan biri , oyinlar orqali.
            </span>
          </p>
          <Button className="mt-4">Olg'a</Button>
        </div>
      </div>

      <div className="py-36 mb-0 flex justify-between items-center">
        <div>
          <h1 className="text-[#F98336] text-3xl">Test</h1>
          <h1 className="text-6xl font-bold text-slate-600 flex flex-col">
            Bilimlimingizni <span>tekshiring</span>
          </h1>
          <p className="flex mt-6 flex-col">
            Ingiliz tilidagi bilimlaringizni qaysi darajada ekanligini ushbu
            <span> bo'limda bilib olishingiz mumkin.</span>
          </p>
          <Button className="mt-6">Olg'a</Button>
        </div>
        <div>
          <img src={Choose} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Components;
