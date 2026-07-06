import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center select-none group cursor-pointer">
      {/* ✍️ FAQAT SO'ZNING O'ZI (Minimalist monogramma bilan) */}
      <span className="font-serif text-3xl font-black tracking-tight  transition-colors duration-300 text-warm-caramel">
        Tadbir
        {/* Kichkina nafis brend nuqtasi */}
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-warm-caramel ml-0.5 transform transition-transform duration-300 group-hover:scale-150 " />
      </span>
    </Link>
  );
}