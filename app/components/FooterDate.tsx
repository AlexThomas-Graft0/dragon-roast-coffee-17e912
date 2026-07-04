'use client';

import { useState, useEffect } from 'react';

export default function FooterDate() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <p>© {year ?? new Date().getFullYear()} Dragon Roast Coffee. Built in Cardiff.</p>;
}