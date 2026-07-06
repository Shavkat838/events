import Header from "./components/shared/header";

export default function Home() {
  return    
  <div></div>
}




// <div className="w-full flex flex-col items-center">
// <div className="min-h-screen bg-soft-cream antialiased text-dark-charkoal selection:bg-warm-caramel/20">
//       <Header />
//       <main className="space-y-24 pb-24">
       
//         {/* 🌟 2. HERO SECTION */}
//         <section className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 grid md:grid-cols-12 gap-12 items-center">
//           <div className="md:col-span-6 space-y-6">
//             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warm-caramel/10 border border-warm-caramel/20 text-xs font-semibold uppercase tracking-widest text-soft-olive">
//               ✨ Yangi avlod platformasi
//             </div>
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.15] text-dark-charkoal">
//               Kelajak tilingizni shakllantiradigan <span className="text-warm-caramel font-serif italic">uchrashuvlar</span>
//             </h1>
//             <p className="text-base text-soft-olive/90 max-w-xl leading-relaxed">
//               O`z sohangizning eng yorqin namoyandalari bilan fikr almashing, bilimingizni boyiting va faqat premium darajadagi seminarlarda qatnashing.
//             </p>
//             <div className="flex items-center gap-4 pt-2">
//               <button className="btn-primary">Tadbirlarni kashf etish</button>
//               <button className="btn-secondary">Platforma qanday ishlaydi?</button>
//             </div>
//           </div>
          
//           {/* Assimetrik Minimalist Rasm Bloki */}
//           <div className="md:col-span-6 relative flex justify-center md:justify-end">
//             <div className="relative w-full max-w-md aspect-4/5 bg-pure-white rounded-3xl p-4 border border-soft-olive/10 shadow-xl shadow-dark-charkoal/5 rotate-2 hover:rotate-0 transition-transform duration-500">
//               <div className="w-full h-full bg-dark-charkoal rounded-2xl overflow-hidden relative group">
//                 {/* Rasm joyi - Vizual Estetika */}
//                 <div className="absolute inset-0 bg-linear-to-t from-dark-charkoal via-transparent to-transparent opacity-60 z-10" />
//                 <img 
//                   src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80" 
//                   alt="Premium Event"
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute bottom-6 left-6 right-6 z-20 text-pure-white">
//                   <span className="text-xs uppercase tracking-wider text-warm-caramel font-medium">Jonli master-klass</span>
//                   <h4 className="text-lg text-pure-white font-medium mt-1">Zamonaviy Arxitektura va Dizayn Simpoziumi</h4>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>


//         {/* 🔍 3. QUICK SEARCH & CATEGORIES */}
//         <section className="max-w-7xl mx-auto px-6">
//           <div className="bg-pure-white p-8 rounded-3xl border border-soft-olive/10 shadow-sm grid md:grid-cols-12 gap-6 items-center">
            
//             {/* Minimalist Qidiruv Paneli */}
//             <div className="md:col-span-5 relative">
//               <input 
//                 type="text" 
//                 placeholder="Qaysi mavzuda tadbir qidiryapsiz?"
//                 className="w-full bg-soft-cream border border-soft-olive/20 rounded-xl pl-12 pr-4 py-3.5 text-sm text-dark-charkoal focus:outline-none focus:border-warm-caramel focus:bg-pure-white transition-all duration-300"
//               />
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="absolute left-4 top-4 w-4 h-4 text-soft-olive/60">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.608 10.608Z" />
//               </svg>
//             </div>

//             {/* Filtrlar ro'yxati */}
//             <div className="md:col-span-7 flex flex-wrap gap-2.5 md:justify-end">
//               <button className="px-5 py-3 rounded-xl text-xs font-semibold bg-warm-caramel text-pure-white shadow-sm shadow-warm-caramel/20">Hamma yo`nalishlar</button>
//               <button className="px-5 py-3 rounded-xl text-xs font-semibold bg-soft-cream text-soft-olive hover:bg-soft-olive/5 border border-soft-olive/10">IT & Texnologiyalar</button>
//               <button className="px-5 py-3 rounded-xl text-xs font-semibold bg-soft-cream text-soft-olive hover:bg-soft-olive/5 border border-soft-olive/10">Biznes & Startap</button>
//               <button className="px-5 py-3 rounded-xl text-xs font-semibold bg-soft-cream text-soft-olive hover:bg-soft-olive/5 border border-soft-olive/10">San`at & Dizayn</button>
//             </div>

//           </div>
//         </section>


//         {/* 📅 4. UPCOMING EVENTS (Siz yaratgan utility-kartalar bilan) */}
//         <section className="max-w-7xl mx-auto px-6 space-y-8">
//           <div className="flex items-end justify-between border-b border-soft-olive/10 pb-4">
//             <div>
//               <h2 className="text-3xl font-bold">Yaqindagi Eksklyuziv Tadbirlar</h2>
//               <p className="text-sm text-soft-olive mt-1">Siz o`tkazib yubormasligingiz kerak bo`lgan eng muhim uchrashuvlar</p>
//             </div>
//             <a href="/events" className="text-sm font-semibold text-warm-caramel hover:text-warm-caramel/80 flex items-center gap-1 group">
//               Hammasini ko`rish 
//               <span className="group-hover:translate-x-1 transition-transform"></span>
//             </a>
//           </div>

//           {/* Kartalar Setkasi */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
//             {/* 1-Karta: Joylar kam qolgan holat */}
//             <div className="seminar-card flex flex-col justify-between">
//               <div className="space-y-4">
//                 <div className="relative aspect-[16/10] bg-soft-cream rounded-xl overflow-hidden">
//                   <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-pastel-rejected text-rose-700">
//                     🔥 Faqat 3 ta joy qoldi
//                   </span>
//                   <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80" className="w-full h-full object-cover" />
//                 </div>
//                 <span className="text-xs font-semibold text-warm-caramel uppercase tracking-widest">Master-klass</span>
//                 <h3 className="text-xl font-bold line-clamp-2">Next.js v15 va Tailwind v4 yordamida Modern Frontend Arxitekturasi</h3>
//               </div>
//               <div className="flex items-center justify-between pt-6 mt-6 border-t border-soft-olive/5 text-xs text-soft-olive">
//                 <span className="flex items-center gap-1">📅 12 Iyul, 2026</span>
//                 <span className="font-medium text-dark-charkoal">Toshkent, Shahar markazi</span>
//               </div>
//             </div>

//             {/* 2-Karta: Tasdiqlangan holat */}
//             <div className="seminar-card flex flex-col justify-between">
//               <div className="space-y-4">
//                 <div className="relative aspect-[16/10] bg-soft-cream rounded-xl overflow-hidden">
//                   <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-pastel-approved text-teal-800">
//                     ✓ Ruyxat ochiq
//                   </span>
//                   <img src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=500&q=80" className="w-full h-full object-cover" />
//                 </div>
//                 <span className="text-xs font-semibold text-warm-caramel uppercase tracking-widest">Konferensiya</span>
//                 <h3 className="text-xl font-bold line-clamp-2">Markaziy Osiyo Startap va Investorlar Sammiti 2026</h3>
//               </div>
//               <div className="flex items-center justify-between pt-6 mt-6 border-t border-soft-olive/5 text-xs text-soft-olive">
//                 <span className="flex items-center gap-1">📅 18 Avgust, 2026</span>
//                 <span className="font-medium text-dark-charkoal">Gibrid (Online/Offline)</span>
//               </div>
//             </div>

//             {/* 3-Karta: Kutilayotgan holat */}
//             <div className="seminar-card flex flex-col justify-between">
//               <div className="space-y-4">
//                 <div className="relative aspect-[16/10] bg-soft-cream rounded-xl overflow-hidden">
//                   <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-pastel-pending text-amber-800">
//                     ⏳ Tez kunda e`lon qilinadi
//                   </span>
//                   <img src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=500&q=80" className="w-full h-full object-cover" />
//                 </div>
//                 <span className="text-xs font-semibold text-warm-caramel uppercase tracking-widest">Seminar</span>
//                 <h3 className="text-xl font-bold line-clamp-2">Ijodiy fikrlash va Zamonaviy San`atda Minimalizm Asoslari</h3>
//               </div>
//               <div className="flex items-center justify-between pt-6 mt-6 border-t border-soft-olive/5 text-xs text-soft-olive">
//                 <span className="flex items-center gap-1">📅 Sentabr, 2026</span>
//                 <span className="font-medium text-dark-charkoal">Yubiley Zali</span>
//               </div>
//             </div>

//           </div>
//         </section>


//         {/* 🎙️ 5. TOP SPEAKERS (O'q-qora professional estetika) */}
//         <section className="max-w-7xl mx-auto px-6 space-y-8">
//           <div className="text-center max-w-xl mx-auto">
//             <h2 className="text-3xl font-bold">Sohangiz yetakchilari bilan tanishing</h2>
//             <p className="text-sm text-soft-olive mt-2">Darslar va seminarlar faqat xalqaro tajribaga ega ekspertlar tomonidan olib boriladi</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
//             {[
//               { name: "Doniyor Komilov", role: "Principal UX Designer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" },
//               { name: "Madina Axmedova", role: "Startap Mentor & Investor", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80" },
//               { name: "Sardor Rahmonov", role: "Senior AI Researcher", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
//               { name: "Elena Pak", role: "Art Director", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" },
//             ].map((speaker, index) => (
//               <div key={index} className="text-center group">
//                 <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-soft-olive/10 bg-pure-white p-1 mb-4 group-hover:border-warm-caramel transition-colors duration-300">
//                   <img 
//                     src={speaker.img} 
//                     className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" 
//                   />
//                 </div>
//                 <h4 className="font-serif text-lg font-medium text-dark-charkoal group-hover:text-warm-caramel">{speaker.name}</h4>
//                 <p className="text-xs text-soft-olive mt-0.5">{speaker.role}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//       </main>

//       {/* ✉️ 6. FOOTER SECTION */}
//       <footer className="bg-dark-charkoal text-soft-cream pt-16 pb-8">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 border-b border-soft-cream/10 pb-12">
//           <div className="md:col-span-5 space-y-4">
//             <span className="font-serif text-2xl font-bold tracking-wider text-pure-white">Event<span className="text-warm-caramel">Hub</span></span>
//             <p className="text-sm text-soft-cream/60 max-w-sm leading-relaxed">Eng sara madaniy, texnologik va biznes tadbirlarini birlashtiruvchi premium ekotizim.</p>
//           </div>
//           <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
//             <div className="space-y-3">
//               <h5 className="text-xs font-semibold text-warm-caramel uppercase tracking-wider">Kategoriya</h5>
//               <ul className="space-y-2 text-sm text-soft-cream/60">
//                 <li><a href="#" className="hover:text-pure-white">Seminarlar</a></li>
//                 <li><a href="#" className="hover:text-pure-white">Konferensiyalar</a></li>
//                 <li><a href="#" className="hover:text-pure-white">Master-klasslar</a></li>
//               </ul>
//             </div>
//             <div className="space-y-3">
//               <h5 className="text-xs font-semibold text-warm-caramel uppercase tracking-wider">Kompaniya</h5>
//               <ul className="space-y-2 text-sm text-soft-cream/60">
//                 <li><a href="#" className="hover:text-pure-white">Biz haqimizda</a></li>
//                 <li><a href="#" className="hover:text-pure-white">Karyera</a></li>
//                 <li><a href="#" className="hover:text-pure-white">Blog</a></li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-soft-cream/40">
//           <div> 2026 EventHub. Barcha huquqlar himoyalangan.</div>
//           <div className="flex gap-6">
//             <a href="#" className="hover:text-pure-white">Maxfiylik siyosati</a>
//             <a href="#" className="hover:text-pure-white">Foydalanish shartlari</a>
//           </div>
//         </div>
//       </footer>
//     </div>


//   </div>;