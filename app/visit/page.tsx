'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function VisitPage() {
  const [info, setInfo] = useState<any>(null);

  useEffect(() => {
    supabase.from('cafe_info').select('*').single().then(({ data }) => setInfo(data));
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-24 px-8">
      <h1 className="text-6xl mb-8">Come Say Hello.</h1>
      <p className="text-xl mb-12">Need a fresh pour-over or just want to chat about coffee? Swing by our Cardiff café. We’re open daily, and the beans are always fresh.</p>
      {info && (
        <div className="bg-white p-8 rounded-2xl border border-black/10 shadow-sm">
          <p className="text-lg font-bold mb-2">Location: {info.address}</p>
          <p className="text-lg">Contact: {info.contact_email}</p>
        </div>
      )}
    </div>
  );
}