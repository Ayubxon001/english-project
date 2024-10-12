import React from "react";
import { Button, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-lime-50 p-10 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-teal-900">
          Kirish
        </h1>
        <div className="mb-4">
          <TextInput
            type="email"
            placeholder="E-poshta"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <div className="mb-4">
          <TextInput
            type="password"
            placeholder="Parol"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <Link to={"/register"}>
          <div className="justify-end flex">
            <h1 className="text-[13px] mb-2 text-blue-400">
              Ro'yxatdan o'tish
            </h1>
          </div>
        </Link>
        <div className="flex justify-center">
          <Button className="font-bold   rounded-lg">Tasdiqlash</Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
