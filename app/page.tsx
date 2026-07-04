'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="py-24 px-8 text-center max-w-4xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-8xl mb-8">
          Small-Batch Roasts, Big Cardiff Character.
        </motion.h1>
        <p className="text-xl mb-12 opacity-80">We source, roast, and pour specialty coffee right here in the heart of Wales. From the first spark of the roast to your morning ritual, we bring precision and passion to every cup.</p>
        <div className="space-x-4">
          <a href="/shop" className="bg-[#C56A3C] text-white px-8 py-4 rounded-full font-bold hover:bg-black transition">Shop the Roast</a>
          <a href="/visit" className="border border-black px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition">Find Our Café</a>
        </div>
      </header>
      
      <section className="grid md:grid-cols-3 gap-8 py-16 px-8 max-w-6xl mx-auto">
        {[
          { title: "100% Ethically Sourced", desc: "Direct trade relationships ensuring farmers thrive." },
          { title: "Small-Batch Roasted", desc: "Precision roasting for peak flavor development." },
          { title: "Cardiff-Born", desc: "Independently owned and passionately brewed." }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white/50 rounded-2xl border border-black/5">
            <h3 className="text-2xl mb-4">{item.title}</h3>
            <p className="opacity-70">{item.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}