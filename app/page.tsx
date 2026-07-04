'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <header className="py-24 px-8 text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl mb-8 font-serif text-[#2D2420]"
        >
          Small-Batch Roasts, Big Cardiff Character.
        </motion.h1>
        <p className="text-lg md:text-xl mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed">
          We source, roast, and pour specialty coffee right here in the heart of Wales. From the first spark of the roast to your morning ritual, we bring precision and passion to every cup.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/shop" className="bg-[#C56A3C] text-white px-8 py-4 rounded-full font-bold hover:bg-[#A3552D] transition-all transform hover:scale-105 shadow-lg">Shop the Roast</a>
          <a href="/visit" className="border-2 border-[#2D2420] px-8 py-4 rounded-full font-bold hover:bg-[#2D2420] hover:text-white transition-all">Find Our Café</a>
        </div>
      </header>
      
      <section className="grid md:grid-cols-3 gap-8 py-16 px-8 max-w-6xl mx-auto">
        {[
          { title: "100% Ethical", desc: "Direct trade relationships ensuring farmers thrive." },
          { title: "Small-Batch", desc: "Precision roasting for peak flavor development." },
          { title: "Cardiff-Born", desc: "Independently owned and passionately brewed." }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            whileHover={{ y: -5 }}
            className="p-8 bg-white rounded-3xl border border-black/5 shadow-sm"
          >
            <div className="w-12 h-12 bg-[#F3E9D8] rounded-full mb-6 flex items-center justify-center font-serif font-bold text-[#C56A3C]">0{i+1}</div>
            <h3 className="text-2xl mb-4 font-serif">{item.title}</h3>
            <p className="opacity-70 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}