'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Product = { id: string; name: string; price: number; tasting_notes: string[]; image_url: string; };

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    supabase.from('products').select('*').then(({ data }) => setProducts(data || []));
  }, []);

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {products.map(p => (
        <div key={p.id} className="group bg-white p-4 rounded-3xl border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="overflow-hidden rounded-2xl mb-6">
            <img 
              src={p.image_url || '/coffee-placeholder.jpg'} 
              alt={p.name} 
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105" 
            />
          </div>
          <div className="px-2">
            <h3 className="text-2xl font-serif mb-2">{p.name}</h3>
            <p className="text-sm opacity-60 mb-6 uppercase tracking-wider">{p.tasting_notes?.join(' • ')}</p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">£{p.price.toFixed(2)}</span>
              <button className="bg-[#2D2420] text-white px-6 py-3 rounded-full font-bold hover:bg-[#C56A3C] transition-colors">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}