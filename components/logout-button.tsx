"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
    router.refresh();
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={logout} 
      className="rounded-full border-[#2D2420]/20 hover:bg-[#2D2420] hover:text-white"
    >
      Logout
    </Button>
  );
}