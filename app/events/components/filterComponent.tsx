import { ChevronDown, MapPin, Search, Tag } from "lucide-react";

export default function FilterComponent() {
  return (
    <div className="bg-pure-white border border-dark-charkoal/10 rounded-2xl p-3.5  shadow-sm   flex flex-col lg:flex-row  gap-3  justify-between items-center">
      <div className="relative w-full lg:w-72 shrink-0 flex gap-2">
        <Search className="w-4 h-4 absolute left-3.5 top-4.5 -translate-y-1/2 text-dark-charkoal/40" />
        <input
          type="text"
          placeholder="Tadbir yoki spiker izlash...."
          className="w-full bg-soft-olive/5 border border-dark-charkoal/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-dark-charkoal placeholder:text-dark-charkoal/40 focus:outline-none focus:ring-1 focus:ring-warm-caramel focus:border-warm-caramel transition-all"
        />
        <button className="cursor-pointer rounded-sm bg-warm-caramel border border-warm-caramel/40 text-white hover:bg-dark-charkoal px-2 py-1.5 text-sm ">
          Search
        </button>
      </div>
      <div className="flex items-center gap-2 w-full lg:w-auto">
        <div className="relative w-full lg:w-80">
          <MapPin className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-dark-charkoal/40 pointer-events-none" />
          <select className="w-full bg-soft-olive/5 border  border-dark-charkoal/10 rounded-xl cursor-pointer pl-9 pr-8 py-2.5 text-xs text-dark-charkoal/80 focus:outline-none focus:ring-1 focus:ring-warm-caramel focus:border-warm-caramel transition-all appearance-none">
            <option
              value=""
              className="bg-pure-white text-dark-charkoal py-2  text-[12px] "
            >
              Barcha shaharlar
            </option>
            <option
              value="toshkent"
              className="bg-pure-white text-dark-charkoal py-2"
            >
              Toshkent
            </option>
            <option
              className="bg-pure-white text-dark-charkoal py-2"
              value="buxoro"
            >
              Buxoro
            </option>
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[6px] text-dark-charkoal/40 pointer-events-none"
          />
        </div>
        <div className="relative w-full lg:w-80">
          <Tag className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-dark-charkoal/40 pointer-events-none" />
          <select className="w-full bg-soft-olive/5 border border-dark-charkoal/10  rounded-xl pl-9 pr-8 py-2.5 text-xs text-dark-charkoal/80  focus:outline-none focus:ring-1 focus:ring-warm-caramel focus:border-warm-caramel cursor-pointer appearance-none transition-all">
            <option value="" className="bg-pure-white text-dark-charkoal py-2">
              Barcha narxlar
            </option>
            <option
              value="bepul"
              className="bg-pure-white text-dark-charkoal py-2"
            >
              Bepul
            </option>
            <option
              value="pullik"
              className="bg-pure-white py-2  text-dark-charkoal"
            >
              Pullik
            </option>
          </select>
          <ChevronDown
            size={14}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[6px] text-dark-charkoal/40 pointer-events-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-1.5 w-full  lg:w-auto shrink-0  justify-between md:justify-end">
        <button className="px-7 md:px-3.5  py-2.5 text-xs font-semibold rounded-xl bg-pure-white text-dark-charkoal/70 border border-dark-charkoal/10 hover:border-dark-charkoal/30 hover:bg-soft-olive/5 transition-all cursor-pointer">
          Barchasi
        </button>
        <button className="px-7 md:px-3.5 py-2.5 text-xs font-semibold rounded-xl bg-pure-white text-dark-charkoal/70 border border-dark-charkoal/10 hover:border-dark-charkoal/30 hover:bg-soft-olive/5 transition-all cursor-pointer">
          Online 
        </button>
        <button className="px-7 md:px-3.5 py-2.5 text-xs font-semibold rounded-xl bg-pure-white text-dark-charkoal/70 border border-dark-charkoal/10 hover:border-dark-charkoal/30 hover:bg-soft-olive/5 transition-all cursor-pointer">
          Offline
        </button>
      </div>
    </div>
  );
}


