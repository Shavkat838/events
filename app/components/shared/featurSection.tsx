export default function FeaturSection() {
  return (
    <section className=" py-20 border-t border-dark-charkoal/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end  mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl  font-black  tracking-tight text-dark-charkoal">
              {"Yaqinda bo'ladigan uchrashuvlar"}
            </h2>
            <p className="text-sm text-dark-charkoal/60">
              Joylar soni cheklanga, {"o'z vaqtida ulgurib qoling"}
            </p>
          </div>
          <a
            href="#"
            className="text-sm font-semibold text-warm-caramel hover:text-dark-charkoal transition-colors underline underline-offset-4 decoration-warm-caramel/30"
          >
            {"Barcha tadbirlarni ko'rish"}
          </a>
        </div>
        {/* kartalar setkasi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-pure-white border border-dark-charkoal/10 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-soft-olive/40 group">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-soft-olive/80 uppercase tracking-wider">
                  Offline
                </span>
                <span className="text-[10px] uppercase tracking-widest bg-warm-caramel/10 text-warm-caramel px-2 py-0.5 rounded">
                  📍 Top
                </span>
              </div>
              <h3 className="text-lg font-bold text-dark-charkoal leading-snug group-hover:text-warm-caramel transition-colors line-clamp-2">
                Next.js va Jamstack arxitekturasi
              </h3>
            </div>
            <div className="mt-8 pt-4 border-t border-dark-charkoal/5 space-y-3">
              <div className="flex justify-between text-xs text-shadow-dark-charkoal/60">
                <span> 📅 02 Avgust, 20:00</span>
                <span className="font-medium text-dark-charkoal/80">
                  Shaxzod Aliyev
                </span>
              </div>
              <button className="w-full cursor-pointer text-center bg-soft-olive/5  text-soft-olive group-hover:bg-dark-charkoal group-hover:text-pure-white transation-all duration-300 py-2.5 rounded-xl text-xs font-semibold focus:outline-none ">
                Chipta olish
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
