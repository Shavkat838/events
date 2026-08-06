"use client";

import {
  ORGANIZER_STEPS,
  StepItem,
  USER_STEPS,
} from "@/app/constants/howItWorks";

import { useState } from "react";

export default function StatsSection() {
  const [activeRole, setUserRole] = useState<"User" | "Organizer">("User");
  const currentSteps: StepItem[] =
    activeRole === "User" ? USER_STEPS : ORGANIZER_STEPS;

  return (
    <section id="about" className="relative py-24  bg-soft-olive/5 border-y border-dark-charkoal/5  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* header*/}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold tracking-wider text-soft-olive uppercase bg-soft-olive/10 px-4.5 py-1.5 rounded-full">
            Jarayon
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-charkoal tracking-tight mt-4">
            Platforma qanday ishlaydi
          </h2>
          <p className="mt-3 text-base text-dark-charkoal/70">
            {
              "O'zingizga kerakli rolni tanlang va 3 qadamli jarayon bilan tanishing"
            }
          </p>

          <div className="inline-flex p-1.5 mt-8 bg-dark-charkoal/5 rounded-2xl border border-dark-charkoal/10">
            <button
              onClick={() => setUserRole("User")}
              className={` px-6  cursor-pointer  py-2.5 rounded-2xl text-xs uppercase  font-semibold transation-all duration-300 ${activeRole === "User" ? "bg-white text-dark-charkoal shadow-sm" : " text-dark-charkoal/60 hover:text-dark-charkoal  "} `}
            >
              Ishtirokchi
            </button>

            <button
              onClick={() => setUserRole("Organizer")}
              className={` px-6 py-2.5 cursor-pointer rounded-2xl tracking-wide text-xs uppercase  font-semibold transation-all duration-300 ${activeRole === "Organizer" ? "bg-white text-dark-charkoal shadow-sm" : " text-dark-charkoal/60 hover:text-dark-charkoal"} `}
            >
              Qatnashchi
            </button>
          </div>
        </div>

        {/* qatlamlar */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-dark-charkoal/10 shadow-sm hover:shadow-md transation-all duration-300"
              >
                <span className="absolute top-5 right-5 text-sm font-bold text-soft-olive bg-soft-olive/10 px-3 py-1 rounded-full">
                  {item.number}
                </span>
                <div className="w-16 h-16 rounded-2xl bg-soft-olive/10 text-soft-olive flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 stroke-1.75" />
                </div>
                <h3 className="text-xl font-bold text-dark-charkoal mb-3">
                  {item.title}
                </h3>
                <p className="text-dark-charkoal/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


