import { authStore } from "@/app/store/authStore";
import React from "react";
import Logo from "../logos/Logo";

export default function LoginPage() {
  const { setAuth } = authStore();
  return (
    <div className="min-h-screen bg-soft-cream flex items-center  justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl grid md:grid-cols-12 bg-pure-white rounded-3xl overflow-hidden  shadow-xl shadow-dark-charkoal/5 border border-soft-olive/10  ">
        {/* chapdagi container */}
        <div className="hidden md:flex md:col-span-5 bg-dark-charkoal p-14 flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-warm-caramel/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <Logo />
          </div>

          <div className="relative z-10 space-y-4">
            <h2 className="font-serif text-3xl  text-soft-cream leading-tight">
              Eng sara madaniy va ilmiy tadbirlar maskani
            </h2>
            <p className="font-sans text-sm text-soft-cream/60 leading-relaxed">
              O`z sohangizning yetakchilari bilan uchrashish va tajriba
              almashish vaqti keldi.
            </p>
          </div>

          <div className="relative z-10 text-xs text-soft-cream/40">
            2026 Tadbir. Barcha huquqlar himoyalangan
          </div>
        </div>
        {/* o'ngdagi kontayner */}
        <div className="col-span-12 md:col-span-7  p-8 sm:p-12 md:p-16 flex flex-col justify-center">
          <div className="w-full max-w-md space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl tracking-tight font-bold">
                Xush kelibsiz
              </h1>
              <p className="text-sm text-soft-olive">
                Tizimga kirish uchun malumotlaringizni kiriting!
              </p>
            </div>

            {/* Forma malumotlari */}
            <div className="space-y-5 ">
              <div className="space-y-2">
                <label className="text-xs uppercase font-semibold tracking-wider text-dark-charkoal/70">
                  Email Manzil
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full bg-soft-cream/50 border border-soft-olive/20 rounded-xl px-4 py-3.5 text-sm text-dark-charkoal placeholder-soft-olive/50 focus:outline-none focus:border-warm-caramel focus:bg-pure-white focus:ring-1 focus:ring-warm-caramel transition duration-300 "
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase font-semibold tracking-wider text-dark-charkoal/70 ">
                Parol
              </label>
              <input
                type="password"
                className="w-full  bg-soft-cream/50  border border-soft-olive/20 rounded-xl px-4 py-3.5 text-sm text-dark-charkoal placeholder-soft-olive/50   focus:outline-none focus:border-warm-caramel focus:bg-pure-white focus:ring-1 focus:ring-warm-caramel  transition duration-300 "
              />
            </div>

            <div className="flex items-center">
              <label className="flex items-center  gap-2 text-sm cursor-pointer text-dark-charkoal/80 select-none   ">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-soft-olive cursor-pointer text-warm-caramel focus:ring-warm-caramel  accent-warm-caramel"
                />
                Eslab qolish
              </label>
            </div>
            <div className="space-y-4 pt-2">
              <button className="w-full btn-primary block text-center">
                Tizimga kirish
              </button>
              <div className="text-center">
                <span className="text-sm text-soft-olive">
                  Profilingiz yo`qmi?
                </span>
                <a  onClick={()=>setAuth("register")}  className="text-sm font-medium cursor-pointer text-warm-caramel hover:text-warm-caramel/80 underline decoration-warm-caramel/30 underline-offset-4">
                  Ro`yxatdan o`tish
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
