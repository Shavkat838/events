import { ArrowUpRight, Calendar, MapPin, Sparkles, User } from "lucide-react";

export default function EventCard() {
  return (
    <div className="bg-pure-white border  border-dark-charkoal/10 rounded-3xl p-6 shadow-sm hover:shadow-md  transition-all flex flex-col justify-between  space-y-6 group">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase  tracking-wider bg-soft-olive/10 text-soft-olive border border-soft-olive/20">
            Offline
          </span>
          <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-warm-caramel/10 text-warm-caramel border  border-warm-caramel/20">
            <Sparkles className="w-3 h-3" />
            Top
          </span>
        </div>
        <h3 className="text-lg font-serif font-bold  text-dark-charkoal group-hover:text-warm-caramel transition-colors line-clamp-2">
          Uzbekistan UI/UX Design uchrashuvi 2026
        </h3>
        <div className="space-y-2 text-xs text-dark-charkoal/70 pt-2 border-t border-dark-charkoal/5">
        <div className="flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-soft-olive "  />
            <span>25 Iyul, 18:30</span>
        </div>
        <div className="flex items-center gap-2">
            <MapPin  className="w-3.5 h-3.5 text-soft-olive" />
            <span>Buxoro, Yoshlar markazi</span>
        </div>
        <div className="flex items-center gap-2">
            <User className="w-3.5 h-3.5 text-soft-olive" />
            <span>Azizbek Raximov</span>
        </div>
        </div>
      </div>
      <button className="w-full bg-soft-olive/10 hover:bg-dark-charkoal text-dark-charkoal hover:text-pure-white py-3 rounded-xl text-xs font-semibold transition-all cursor-pointer flex  items-center justify-center gap-1.5 group/btn">
      <span>
         {"Batafsil ko'rish"}
      </span>
       <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-0.5 group-hover/btn:translate-y-0.5"  />
      </button>
    </div>
  );
}
