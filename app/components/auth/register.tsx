import { authStore } from "@/app/store/authStore";
import React from "react";
import Logo from "../logos/Logo";

export default function RegisterPage() {
  const { setAuth } = authStore();
  return (
    <div className="min-h-screen bg-soft-cream flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl  grid md:grid-cols-12 bg-pure-white rounded-3xl overflow-hidden border border-soft-olive/10 shadow-xl shadow-dark-charkoal/5">
        {/* left container */}
        <div className="hidden md:col-span-5 bg-dark-charkoal md:flex p-12 flex-col justify-between relative overflow-hidden">
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-soft-olive/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <Logo />
          </div>

          <div className="relative z-10 space-y-4">
            <h2 className="font-serif text-3xl text-soft-cream  leading-tight">
              Katta o`zgarishlar shu yerdan boshlanadi
            </h2>
            <p className="font-sans text-sm text-soft-cream/60 leading-relaxed">
              Hozir ro`yxatdan o`ting va o`zingizga mos keladigan
              master-klasslar, seminarlar va konferensiyalarni kashf eting
            </p>
          </div>

          <div className="relative z-10 text-xs text-soft-cream/50">
            2026 EventHub. Barcha huquqlar himoyalangan
          </div>
        </div>
        <div className="flex flex-col justify-center col-span-12 p-8 sm:p-12  md:col-span-7 ">
          <div className="w-full max-w-lg space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">
                Hisob yaratish
              </h1>
              <p className="text-sm text-soft-olive">
                Ro`yxatdan o`tish uchun formani to`ldiring
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-dark-charkoal/70">
                  To`liq ismingiz
                </label>
                <input
                  type="text"
                  placeholder="ismingiz..."
                  className="w-full bg-soft-cream/50 border border-soft-olive/20 rounded-xl px-4 py-3.5 text-sm text-dark-charkoal placeholder-soft-olive/50 focus:outline-none focus:border-warm-caramel focus:bg-pure-white focus:ring-1 focus:ring-warm-caramel transition-all duration-300"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-dark-charkoal/70">
                  Email Manzil
                </label>
                <input
                  type="email"
                  placeholder="emailingiz..."
                  className="w-full  px-4 py-3.5 bg-soft-cream/50 border border-soft-olive/20 rounded-xl text-sm  focus:outline-none focus:border-warm-caramel focus:bg-pure-white focus:ring-1 focus:ring-warm-caramel transition duration-300 "
                />
              </div>
              <div className="gap-5  sm:col-span-2 space-y-4 sm:flex">
                <div className="space-y-2 sm:col-span-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-dark-charkoal/70">
                    Parol
                  </label>
                  <input
                    type="password"
                    className="w-full text-sm bg-soft-cream/50 px-4 py-3.5 border border-soft-olive/20 rounded-xl focus:outline-none focus:border-warm-caramel focus:ring-1 focus:ring-warm-caramel focus:bg-pure-white  transition duration-300 "
                  />
                </div>
                <div className="space-y-2  sm:col-span-1">
                  <label className="text-xs font-semibold uppercase tracking-wider text-dark-charkoal/70">
                    Parol tasdig`i
                  </label>
                  <input
                    type="password"
                    className="w-full text-sm bg-soft-cream/50 px-4 py-3.5 border border-soft-olive/20 rounded-xl focus:outline-none focus:border-warm-caramel focus:ring-1 focus:ring-warm-caramel focus:bg-pure-white  transition duration-300 "
                  />
                </div>
              </div>
              <div className="sm:col-span-2 space-y-2 text-center">
                <button className="btn-primary w-full block text-center">Hisob yaratish</button>
                <span className="text-soft-olive text-sm ">Hisobingiz mavjudmi?</span><a onClick={()=>setAuth("login")}  className="text-sm  font-medium cursor-pointer text-warm-caramel hover:text-warm-caramel/80 underline decoration-warm-caramel/30 underline-offset-4  select-none"> Tizimga kirish</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


