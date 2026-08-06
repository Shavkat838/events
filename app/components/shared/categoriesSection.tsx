import React from "react";

export default function CategoriesSection() {
  return (
    <section className="py-20 bg-linear-to-b from-pure-white  to-soft-olive/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl  font-black font-serif tracking-tight text-shadow-dark-charkoal">
            {"Yo'nalishlar bo'yicha filtrlash"}
          </h2>
          <p className="text-sm  text-dark-charkoal/60">
            {
              "O'zingizga qiziq bo'lgan sohani tanlang va eng sara seminarlarni o'tkazib yubormang"
            }
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <div className="bg-pure-white border border-dark-charkoal/10 px-5 py-3 rounded-2xl cursor-pointer select-none transition-all duration-300 hover:border-warm-caramel hover:shadow-sm hover:-translate-y-0.5 flex items-center gap-3 group">
            <span className="w-2 h-2 rounded-full bg-soft-olive/40 group-hover:bg-warm-caramel transition-colors" />
            <span className="text-sm font-semibold text-dark-charkoal/80 group-hover:text-dark-charkoal transition-colors">
              IT
            </span>
            <span className="text-xs font-mono bg-soft-olive/5 text-soft-olive px-2 py-0.5 rounded-md group-hover:bg-warm-caramel/10 group-hover:text-warm-caramel transition-colors">
              13
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
