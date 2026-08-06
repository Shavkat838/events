import Logo from "../logos/Logo";


export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-soft-cream/80 backdrop-blur-md border-b border-soft-olive/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            < Logo/>
        {/* Navigatsiya Havolalari */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/events" className="text-sm font-medium text-dark-charkoal/80 hover:text-warm-caramel underline decoration-transparent hover:decoration-warm-caramel/40 underline-offset-8 transition-all">
            Tadbirlar 
          </a>
          <a href="#about" className="text-sm font-medium text-dark-charkoal/80 hover:text-warm-caramel underline decoration-transparent hover:decoration-warm-caramel/40 underline-offset-8 transition-all">
            Batafsil
          </a>
          <a href="" className="text-sm font-medium text-dark-charkoal/80 hover:text-warm-caramel underline decoration-transparent hover:decoration-warm-caramel/40 underline-offset-8 transition-all">
            Biz haqimizda
          </a>
          <a href="#contact" className="text-sm font-medium text-dark-charkoal/80 hover:text-warm-caramel underline decoration-transparent hover:decoration-warm-caramel/40 underline-offset-8 transition-all">
            Aloqa
          </a>
        </nav>

        {/* Harakatlar Tugmasi (Auth va Profil uchun) */}
        <div className="flex items-center gap-4">
          <a href="/auth" className="text-sm font-medium text-soft-olive hover:text-dark-charkoal px-4 py-2 rounded-lg hover:bg-soft-olive/5">
            Kirish
          </a>
          <a href="/register" className="btn-primary px-5! py-2.5! text-sm!">
            Ro`yxatdan o`tish
          </a>
        </div>

      </div>
    </header>
  );
}