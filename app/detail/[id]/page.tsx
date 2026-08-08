"use client"
import {
  ArrowLeft,
  Building2,
  Calendar,
  CheckCircle,
  Clock,
  Heart,
  MapPin,
  Share2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useRouter } from "next/navigation";



export default function EventDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
   const router=useRouter()

   function goHome(){
    router.push("/events")
   }
  return (
    <div className="min-h-screen bg-soft-olive/5  py-12 px-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Navigation & actions */}
        <div className="flex items-center justify-between">
          <button onClick={goHome} className="flex items-center gap-2 text-xs font-semibold text-dark-charkoal/70 hover:text-dark-charkoal bg-pure-white border border-dark-charkoal/10 px-4 py-2 rounded-xl transition-all cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            <span>Barcha tadbirlarga qaytish</span>
          </button>
          <div className="flex items-center gap-2">
            <button className="p-2.5 rounded-xl bg-pure-white border border-dark-charkoal/10 text-dark-charkoal/70 hover:text-dark-charkoal hover:bg-soft-olive/10 transition-all cursor-pointer">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2.5 rounded-xl bg-pure-white border border-dark-charkoal/10 text-dark-charkoal/70 hover:text-dark-charkoal hover:bg-soft-olive/10 transition-all cursor-pointer">
              <Heart className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* left coloumn */}
          <div className="lg:col-span-2 space-y-8">
            <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden bg-dark-charkoal/5 border border-dark-charkoal/10">
              <div className="absolute inset-0 bg-linear-to-t   from-dark-charkoal/80 via-dark-charkoal/20 to-transparent z-10">
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
                  alt="Event cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6  left-6 z-20 flex flex-wrap  gap-2">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-pure-white text-dark-charkoal shadow-sm">
                    Offline
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-warm-caramel text-pure-white shadow-sm">
                    <Sparkles className="w-3.5 h-3.5" />
                    Design & IT
                  </span>
                </div>
              </div>
            </div>

            {/* Sarlavha va info */}

            <div className="space-y-4">
              <h1 className="text-2xl md:text-4xl font-serif font-black text-dark-charkoal leading-tight">
                Uzbekistan UI/UX Design Uchrashuvi 2026: Mahsulot Dizayni va
                Suniy Intellekt
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-xs text-dark-charkoal/70 pt-2 border-y border-dark-charkoal/10 py-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-warm-caramel" />
                  <span className="font-medium">25-Iyul, 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-warm-caramel" />
                  <span className="font-medium">18:30-21:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-warm-caramel" />
                  <span className="font-medium">Toshkent, IT Park</span>
                </div>
              </div>
            </div>

            {/* tadbir haqida batafsil  */}
            <div className="bg-pure-white border border-dark-charkoal/10 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm">
              <h2 className="text-xl font-serif font-bold text-dark-charkoal">
                Tadbir haqida
              </h2>
              <div className="text-xs md:text-sm text-dark-charkoal/80 space-y-3 leading-relaxed">
                <p>
                  Ushbu uchrashuvda zamonaviy raqamli mahsulotlarni loyihalashda
                  AI texnologiyalaridan unumli foydalanish, foydalanuvchi
                  tajribasini (UX) chuqur tahlil qilish va dizayn-tizimlar
                  (Design Systems) yaratish mavzulari muhokama qilinadi.
                </p>
                <p>
                  Tadbir davomida sohadagi top ekspertlardan real keyslar
                  taqdimoti, savol-javob sessiyasi va erkin networking
                  imkoniyati boladi. Dizayn va mahsulot boshqaruvi sohasi
                  vakillari uchun ajoyib imkoniyat!
                </p>
              </div>

              {/* cheklist*/}
              <div className="pt-4 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-dark-charkoal/50">
                  Sizni nimalar kutmoqda?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {[
                    "AI va UI/UX dizayni integratsiyasi",
                    "Real produkt keyslari tahlili",
                    "Netvorking va kofe-breyk",
                    "Ekspertlar bilan savol-javob",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 text-xs text-dark-charkoal/80"
                    >
                      <CheckCircle className="w-4 h-4  text-soft-olive" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Spiker*/}
            <div className="bg-pure-white border border-dark-charkoal/10 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm">
              <h2 className="text-xl font-serif font-bold text-dark-charkoal">
                Spiker
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-soft-olive/20 overflow-hidden shrink-0 border border-dark-charkoal/10">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                    alt="Speaker"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-dark-charkoal">
                    Azizbek Raximov
                  </h3>
                  <p className="text-xs text-dark-charkoal/60">
                    Lead Product Designer @ TechCompany
                  </p>
                  <p className="text-xs text-warm-caramel font-medium">
                    8+ yillik tajribaga ega dizayner va mentor
                  </p>
                </div>
              </div>
            </div>

            {/* Joylashuv */}
            <div className="bg-pure-white border border-dark-charkoal/10 rounded-3xl p-6 md:p-8 space-y-4 shadow-sm">
              <h2 className="text-xl font-serif font-bold text-dark-charkoal">
                Joylashuv
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Building2 className="w-4 h-4 text-soft-olive shrink-0 mt-0.5" />
                  <div className="text-xs space-y-0.5">
                    <p className="font-bold text-dark-charkoal">
                      IT Park Uzbekistan
                    </p>
                    <p className="text-dark-charkoal/60">
                      Buxoro shahri Yoshlar markazi binosi
                    </p>
                  </div>
                </div>
                {/* Vizual xaritasi */}
                <div className="w-full h-48 rounded-2xl bg-soft-olive/10 border border-dark-charkoal/10 flex items-center justify-center text-xs text-dark-charkoal/50 relative overflow-hidden">
                  <div className="absolute inset-0  bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[16px_16px] opacity-10" />
                  <div className="flex flex-col items-center gap-2 z-10">
                    <MapPin className="w-5 h-6 text-warm-caramel animate-bounce" />
                    <span className="font-semibold text-dark-charkoal">
                      IT Park Uzbekistan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-1 lg:sticky lg:top-8 space-y-4">
            <div className="bg-pure-white border border-dark-charkoal/10 rounded-3xl p-6 shadow-md space-y-6">
              {/* Narx */}
              <div className="space-y-1 pb-4 border-b border-dark-charkoal/10">
                <span className="text-xs text-dark-charkoal/60">
                  Chipta narxi:
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-black text-dark-charkoal">
                    50,000
                  </span>
                  <span className="text-xs font-bold text-dark-charkoal/60">
                    UZS/ kishi
                  </span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center text-dark-charkoal/70">
                  <span>Qolgan joylar:</span>
                  <span className="font-bold text-warm-caramel bg-warm-caramel/10 px-2.5 py-0.5 rounded-md">
                    12/100 ta
                  </span>
                </div>
                <div className="w-full bg-soft-olive/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-warm-caramel h-full w-[88%]" />
                </div>
              </div>
              {/* Action Button */}
              <button className="w-full bg-dark-charkoal hover:bg-warm-caramel text-pure-white py-3.5 rounded-2xl text-xs font-semibold transition-all cursor-pointer shadow-md hover:shadow-lg text-center">
                Joyni band qilish ({"Ro'yxatdan o'tish"})
              </button>
              {/* Tashkilotchi */}
              <div className="pt-4 border-t border-dark-charkoal/10 space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-dark-charkoal/40">
                  Tashkilotchi
                </span>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-dark-charkoal text-pure-white flex items-center justify-center font-serif font-bold text-sm shrink-0">
                    UD
                  </div>
                  <div className="text-xs space-y-0.5">
                    <p className="font-bold text-dark-charkoal">
                      Uzbekistan Design Community
                    </p>
                    <p className="text-dark-charkoal/50">
                      {"14 ta tadbir o'tkazgan"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Badge  */}
            <div className="flex items-center gap-2 pt-2 text-[11px] text-dark-charkoal/60 ">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Tasdiqlangan va xavfsiz tadbir</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
