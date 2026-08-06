import Image from "next/image";
import React from "react";
import { CiCalendar } from "react-icons/ci";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20  lg:py-32 border-b border-b-soft-olive/10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1  lg:grid-cols-12 gap-12 items-center">
        {/* matnlar bolgan container */}
        <div className="lg:col-span-7  space-y-6">
          <div className="inline-flex items-center gap-2 bg-soft-olive/5  text-soft-olive px-3 py-1  rounded-full text-xs font-semibold uppercase tracking-wider select-none">
            <CiCalendar size={16} className="text-soft-olive/60" />
            Yangi davr uchrashuvlari
          </div>
          <h1 className="text-4xl  md:text-5xl lg:text-6xl font-serif font-black text-dark-charkoal leading-tight tracking-tight ">
            Ilm va tajriba almashish
            <span className="text-warm-caramel italic"> Makoni</span>
          </h1>
          <p className="text-base md:text-lg text-dark-charkoal/70 max-w-xl leading-relaxed">
            Ilm, madaniyat va zamonaviy texnologiyalar kesishgan nuqtada
            odamlarni birlashtiramiz. Eng sara spikerlar bilan tajriba
            almashing.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <button className="bg-dark-charkoal cursor-pointer text-pure-white px-6 py-3 rounded-xl font-medium shadow-sm hover:bg-warm-caramel transition-colors focus:outline-none focus:ring-2 focus:ring-warm-caramel/20">
              {"Tadbirlarni ko'rish"}
            </button>
            <button className="border cursor-pointer border-dark-charkoal/25 text-dark-charkoal px-6 py-3 rounded-xl font-medium hover:bg-dark-charkoal/5 transition-colors focus:outline-none">
              {"Spiker bo'lish"}
            </button>
          </div>
        </div>
        {/* banner for image */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-4/3 sm:aspect-video lg:aspect-square bg-soft-olive/10 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center relative border border-dark-charkoal/5">
            <div className="absolute inset-0 bg-linear-to-tr  from-soft-olive/20 to-transparent mix-blend-multiply "></div>
            <Image
              src={"/image.jpg"}
              alt="Tadbir-2026"
              fill
              priority
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          {/* Dekorativ orqa fon doirasi */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-warm-caramel/10 rounded-full blur-xl -z-10" />
        </div>
      </div>
    </section>
  );
}

