import { Button, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    setErrorMessage("");
    try {
      console.log("Sending request to API with:", data.email);

      const response = await axios.post(
        "http://128.199.168.206:8024/api/v1/user/register",
        { email: data.email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API response:", response.data);
      navigate("/register/password", { state: { email: data.email } });
    } catch (err) {
      console.error("Request error:", err);

      if (err.response) {
        setErrorMessage(
          err.response.data.message || "Ro'yxatdan o'tishda xato yuz berdi"
        );
      } else if (err.code === "ECONNABORTED") {
        setErrorMessage("So'rov vaqti tugadi. Iltimos, qayta urinib ko'ring.");
      } else {
        setErrorMessage("Server bilan bog'lanishda xatolik yuz berdi.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-lime-50 p-10 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-teal-900">
          Ro'yxatdan o'tish
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextInput
              type="email"
              {...register("email", {
                required: "Iltimos, email manzilingizni kiriting",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Email manzil noto'g'ri formatda",
                },
              })}
              placeholder="Elektron pochta manzili"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            {errors.email && (
              <p className="text-red-500 mt-2">{errors.email.message}</p>
            )}
          </div>

          {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

          <Button
            type="submit"
            className={`mt-3 font-bold py-2 px-4 w-full rounded-lg ${
              isSubmitting ? "bg-sky-200" : "bg-sky-300 hover:bg-sky-400"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Yuborilmoqda..." : "Tasdiqlash"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
