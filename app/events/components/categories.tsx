export default function CategoriesComponent() {
  return (
    <div className="p-3.5   shadow-sm rounded-2xl  mx-auto bg-linear-to-b from-pure-white  to-soft-olive/5  space-y-3">
      <h2 className="text-xl font-black text-center font-serif tracking-tight text-shadow-dark-charkoal">
        {"Yo'nalishlar bo'yicha filtrlash"}
      </h2>
      <div className="flex overflow-x-scroll flex-nowrap scrollbar-none px-2 py-1  justify-center gap-3 ">
        <div className="bg-pure-white border border-dark-charkoal/10 px-5 py-3 rounded-2xl cursor-pointer select-none transition-all duration-300 hover:border-warm-caramel hover:shadow-sm hover:-translate-y-0.5 flex items-center gap-3 group">
          <span className="w-2 h-2 rounded-full bg-soft-olive/40 group-hover:bg-warm-caramel transition-colors" />
          <span className="text-sm font-semibold text-dark-charkoal/80 group-hover:text-dark-charkoal transition-colors">
            IT
          </span>
          <span className="text-xs font-mono bg-soft-olive/5 text-soft-olive px-2 py-0.5 rounded-md group-hover:bg-warm-caramel/10 group-hover:text-warm-caramel transition-colors">
            8
          </span>
        </div>
        <div className="bg-pure-white border border-dark-charkoal/10 px-5 py-3 rounded-2xl cursor-pointer select-none transition-all duration-300 hover:border-warm-caramel hover:shadow-sm hover:-translate-y-0.5 flex items-center gap-3 group">
          <span className="w-2 h-2 rounded-full bg-soft-olive/40 group-hover:bg-warm-caramel transition-colors" />
          <span className="text-sm font-semibold text-dark-charkoal/80 group-hover:text-dark-charkoal transition-colors">
            Shahsiy Rivojlanish
          </span>
          <span className="text-xs font-mono bg-soft-olive/5 text-soft-olive px-2 py-0.5 rounded-md group-hover:bg-warm-caramel/10 group-hover:text-warm-caramel transition-colors">
            13
          </span>
        </div>
        <div className="bg-pure-white border border-dark-charkoal/10 px-5 py-3 rounded-2xl cursor-pointer select-none transition-all duration-300 hover:border-warm-caramel hover:shadow-sm hover:-translate-y-0.5 flex items-center gap-3 group">
          <span className="w-2 h-2 rounded-full bg-soft-olive/40 group-hover:bg-warm-caramel transition-colors" />
          <span className="text-sm font-semibold text-dark-charkoal/80 group-hover:text-dark-charkoal transition-colors">
            Biznes-Startup
          </span>
          <span className="text-xs font-mono bg-soft-olive/5 text-soft-olive px-2 py-0.5 rounded-md group-hover:bg-warm-caramel/10 group-hover:text-warm-caramel transition-colors">
            10
          </span>
        </div>
        <div className="bg-pure-white border border-dark-charkoal/10 px-5 py-3 rounded-2xl cursor-pointer select-none transition-all duration-300 hover:border-warm-caramel hover:shadow-sm hover:-translate-y-0.5 flex items-center gap-3 group">
          <span className="w-2 h-2 rounded-full bg-soft-olive/40 group-hover:bg-warm-caramel transition-colors" />
          <span className="text-sm font-semibold text-dark-charkoal/80 group-hover:text-dark-charkoal transition-colors">
            Sport 
          </span>
          <span className="text-xs font-mono bg-soft-olive/5 text-soft-olive px-2 py-0.5 rounded-md group-hover:bg-warm-caramel/10 group-hover:text-warm-caramel transition-colors">
            4
          </span>
        </div>
      </div>
    </div>
  );
}
