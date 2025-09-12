"use client";

import { useNavigate } from "react-router-dom";
import { Button } from "@/Components/ui/button";
import Logo from "@/assets/logo.svg";

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
      <div className="relative bg-white rounded-2xl shadow-lg p-16 md:p-24 w-full h-220 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <svg
            className="absolute top-0 left-0 w-full h-auto"
            viewBox="0 0 1000 300"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L1300,0 L1100,5 L500,200 L0,200 Z"
              className="fill-stone-50"
            />
          </svg>
        </div>

        <div className="relative z-10 flex justify-between   items-start mb-32">
          <h1 className="text-blue-500 font-bold text-8xl md:text-[9rem]">
            S.O.S Escola
          </h1>
          <div className="absolute -top-16 -right-2 w-56 h-56 md:w-72 md:h-72 bg-sky-500 rounded-full flex items-center justify-center shadow-md">
            <img src={Logo} alt="Logo" className="w-40 h-40 md:w-48 md:h-48" />
          </div>
        </div>

        <div className="fixed mt-20 justify-center items-center z-10">
          <h2 className="text-5xl font-bold text-gray-800">
            Denúncias Anônimas de Bullying
          </h2>

          <div className="flex flex-col gap-10 items-start mt-30 ">
            <Button
              className="bg-stone-200 w-150 text-stone-800 text-3xl font-semibold cursor-pointer py-6 px-16 rounded-full transition-colors hover:bg-stone-300"
              onClick={handleTeacherClick}
            >
              Área do Professor
            </Button>
            <Button
              className="bg-stone-200 w-150 text-stone-800 text-3xl font-semibold cursor-pointer py-6 px-16 rounded-full transition-colors hover:bg-stone-300"
              onClick={handleStudentClick}
            >
              Área do Aluno
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
