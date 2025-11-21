import React from "react";
import Chatbot from "../components/Chatbot";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full bg-[#F9F7F3] dark:bg-[#0D0D0D] px-8 px-20 flex flex-col items-center">
      <div className="min-h-screen max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left space-y-6">
          <p className="text-sm tracking-widest text-gray-500 dark:text-gray-400 uppercase">
            Conectando Profissionais
          </p>

          <h1 className="text-5xl md:text-6xl font-serif text-[#1F2937] dark:text-white">
            Plataforma de Simulação <br /> de Entrevistas
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            Ajudamos profissionais a se prepararem para o mercado de trabalho
            através de simulações reais, feedbacks e oportunidades de conexão.
          </p>

          <div className="pt-6">
            <Link
              to="/Chatbot"
              className="bg-[#1F2937] dark:bg-white text-[#F9F7F3] dark:text-black hover:bg-[#374151] transition px-8 py-3 rounded-md font-medium shadow-sm"
            >
              Faça sua Simulação
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src="/entrevista.jpg"
            alt="Simulação de entrevista"
            className="w-[400px] md:w-[500px] lg:w-[550px] rounded-lg shadow-lg object-cover opacity-90"
          />
        </div>
      </div>

      <div className="relative top-[-80px] w-full flex flex-col items-center justify-center ">
        <h1 className="text-center text-5xl md:text-6xl font-serif text-[#1F2937] dark:text-white border-b-2 border-black dark:border-white border-dashed pb- mb-5 w-full">
          Sobre
        </h1>

        <p className="pt-3 text-center max-w-4xl text-[22px] mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
          Nossa plataforma nasceu com o propósito de ajudar profissionais a se
          destacarem…
        </p>

        <h2 className="text-3xl font-semibold text-[#1F2937] dark:text-white mt-12 mb-4 text-center">
          Nossa Essência
        </h2>

        <div className="max-w-4xl mx-auto text-gray-700 dark:text-gray-300 space-y-4">
          <p className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow p-4 text-[19px]">
            <strong>Missão:</strong> Transformar a preparação profissional…
          </p>

          <p className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow p-4 text-[19px]">
            <strong>Visão:</strong> Ser a principal referência…
          </p>

          <p className="bg-white dark:bg-[#1A1A1A] rounded-2xl shadow p-4 text-[19px]">
            <strong>Propósito:</strong> Capacitar pessoas…
          </p>
        </div>

        <h2 className="text-3xl font-semibold text-[#1F2937] dark:text-white mt-12 mb-6 text-center">
          O que oferecemos
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-gray-700 dark:text-gray-300">
          <div className="p-4 bg-white dark:bg-[#1A1A1A] rounded-2xl shadow text-[20px]">
            <h3 className="font-semibold mb-2">-- Simulações de Entrevistas</h3>
            <p>Participe de entrevistas reais…</p>
          </div>

          <div className="p-4 bg-white dark:bg-[#1A1A1A] rounded-2xl shadow text-[20px]">
            <h3 className="font-semibold mb-2">-- Conexões Profissionais</h3>
            <p>Conecte-se com outros profissionais…</p>
          </div>
        </div>
      </div>
    </div>
  );
}
