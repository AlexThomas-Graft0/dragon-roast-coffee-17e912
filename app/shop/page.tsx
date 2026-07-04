import { Suspense } from 'react';
import ProductGrid from '@/components/ProductGrid';

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-8">
      <h1 className="text-5xl mb-8">Freshly Roasted, Ready to Brew.</h1>
      <p className="mb-12 text-lg opacity-70">Explore our current lineup. Whether you love a bright, fruity light roast or a deep, chocolatey dark, we’ve got your perfect match.</p>
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading coffee...</div>}>
        <ProductGrid />
      </Suspense>
    </div>
  );
}