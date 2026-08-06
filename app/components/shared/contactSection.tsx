export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-soft-olive/5 border-t border-dark-charkoal/5 ">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-pure-white border border-dark-charkoal/10 rounded-3xl p-8 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* chap tomon */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-2xl font-serif font-black text-dark-charkoal">
              Savollaringiz bormi?
            </h3>
            <p className="text-xs md:text-sm  text-dark-charkoal/60 leading-relaxed">
              {"Biz bilan bog'laning yoki takliflaringizni yuboring!"}
            </p>
            <div className="text-xs space-y-1 font-mono text-soft-olive font-semibold">
              <p>unknown@gmail.com</p>
              <p>+998941234567</p>
            </div>
          </div>
          {/* ong tomon */}
          <div className="md:col-span-7 space-y-4 ">
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Ismingiz"
                className="bg-soft-olive/5 border border-dark-charkoal/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-warm-caramel  focus:border-warm-caramel transition-all"
              />
              <input
                type="email"
                placeholder="Emailingiz"
                className="bg-soft-olive/5 border border-dark-charkoal/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-warm-caramel  focus:border-warm-caramel transition-all"
              />
              <textarea
                rows={4}
                placeholder="Habaringiz"
                className="w-full bg-soft-olive/5 col-span-2 border border-dark-charkoal/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-1 focus:ring-warm-caramel focus:border-warm-caramel transition-all resize-none"
              />
              <button className="w-full col-span-2 bg-dark-charkoal cursor-pointer rounded-xl text-pure-white text-xs font-semibold hover:bg-warm-caramel transition-colors focus:outline-none py-2.5">
                Xabaringizni yuboring
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
