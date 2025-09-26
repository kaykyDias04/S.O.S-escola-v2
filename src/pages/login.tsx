"use client";

import { useNavigate } from "react-router-dom";
import { Button } from "@/Components/ui/button";
import Logo from "@/assets/logo.svg";
import { Input } from "@/Components/ui/input";

const Homepage = () => {
  const navigate = useNavigate();

  const handleTeacherClick = () => {
    navigate("/login-professor");
  };
  const handleStudentClick = () => {
    navigate("/login-aluno");
  };

  return (
    <div className="bg-stone-100 min-h-screen flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-6xl p-12 md:p-12 overflow-hidden flex flex-col gap-12 md:gap-16 min-h-[600px]">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <svg
            className="absolute top-0 left-0 w-full h-auto"
            viewBox="0 0 950 300"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L1300,0 L1100,5 L500,200 L0,200 Z"
              className="fill-stone-50"
            />
          </svg>
        </div>

        <div className="relative z-10 w-full flex items-center justify-between">
          <h1 className="text-blue-900 font-bold text-5xl sm:text-6xl md:text-7xl">
            S.O.S Escola
          </h1>
          <div className="relative w-24 h-24 md:w-40 md:h-40 bg-sky-700 rounded-full flex items-center justify-center shadow-md mr-28">
            <img src={Logo} alt="Logo" className="w-16 h-16 md:w-25 md:h-25" />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center md:items-start gap-8">
          <div className="flex flex-col gap-12 mt-18 justify-center md:justify-start">
            <Input
              className="bg-stone-100 text-stone-800 text-xl w-128 h-12 md:text-xl font-semibold py-4 px-8 rounded-lg transition-colors hover:bg-stone-300"
              placeholder="Email"
            >
            </Input>
            <Input
              className="bg-stone-100 text-stone-800 text-xl w-128 h-12 md:text-xl font-semibold py-4 px-8 rounded-lg transition-colors hover:bg-stone-300"
              placeholder="Senha"
            >
            </Input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;