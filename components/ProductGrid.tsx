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
        <div key={p.id} className="bg-white p-6 rounded-xl border border-black/10">
          <img src={p.image_url || '/coffee-placeholder.jpg'} alt={p.name} className="w-full h-64 object-cover mb-4 rounded" />
          <h3 className="text-xl font-bold">{p.name}</h3>
          <p className="text-sm opacity-60 mb-4">{p.tasting_notes?.join(', ')}</p>
          <button className="w-full bg-[#C56A3C] text-white py-2 rounded font-bold hover:opacity-90">Add to Cart - £{p.price}</button>
        </div>
      ))}
    </div>
  );
}