import Logo from "../logos/Logo";

export default function Footer() {
  return (
    <footer className="bg-dark-charkoal py-12 border-t border-pure-white ">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between  items-center gap-6 text-xs select-none">
        <Logo />
        <div className="flex gap-6 font-medium text-pure-white/60">
          <a href="#" className="hover:text-warm-caramel transition-colors">
            Tadbirlar
          </a>
          <a href="#" className="hover:text-warm-caramel transition-colors">
            Spikerlar
          </a>
          <a href="#" className="hover:text-warm-caramel transition-colors">
            Maxfiylik siyosati
          </a>
        </div>
        <div className="text-pure-white/40 font-mono text-[11px]">
          Bu yer ozgartiriladi
        </div>
      </div>
    </footer>
  );
}

