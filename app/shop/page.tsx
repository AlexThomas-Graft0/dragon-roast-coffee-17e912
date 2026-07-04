import { Suspense } from 'react';
import ProductGrid from '@/components/ProductGrid';

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-8 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-3xl mb-16">
        <h1 className="text-5xl mb-6 font-serif text-[#2D2420]">Freshly Roasted, Ready to Brew.</h1>
        <p className="text-lg opacity-70">Explore our current lineup. Whether you love a bright, fruity light roast or a deep, chocolatey dark, we’ve got your perfect match.</p>
      </div>
      <Suspense fallback={
        <div className="grid md:grid-cols-3 gap-8">
          {[1,2,3].map(i => <div key={i} className="h-96 bg-black/5 animate-pulse rounded-2xl" />)}
        </div>
      }>
        <ProductGrid />
      </Suspense>
    </div>
  );
}