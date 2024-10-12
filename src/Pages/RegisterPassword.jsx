import { Button, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const RegisterPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "неизвестный";
  const [verificationCode, setVerificationCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handleSubmit = async () => {
    if (!verificationCode) {
      setError("Kodni kiriting");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://128.199.168.206:8024/api/v1/user/verification",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            code: verificationCode,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // If the verification is successful, navigate to the next step (e.g., password setup)
        navigate("/register/success"); // Adjust the path as needed
      } else {
        // Handle errors from the API
        setError(data.message || "Kodni tasdiqlashda xatolik yuz berdi");
      }
    } catch (error) {
      setError("Server bilan bog'lanishda xatolik yuz berdi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-lime-50 p-10 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 text-teal-900">
          Ro'yxatdan o'tish
        </h1>
        <div className="text-center">
          <p className="text-[11px]">
            <span className="text-[#EC7F00]"> {email}</span> pochtasiga
            jo'natilgan kodni kiriting
          </p>
        </div>
        <div className="mb-4">
          <TextInput
            type="text"
            placeholder="Kodni kiriting"
            value={verificationCode}
            onChange={handleCodeChange}
            className="w-full p-3 mt-[15px] border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div className="flex justify-center">
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Tasdiqlanmoqda..." : "Tasdiqlash"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPassword;
