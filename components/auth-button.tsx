import Link from "next/link";
import { Button } from "./ui/button";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";

export async function AuthButton() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return user ? (
    <div className="flex items-center gap-4 text-sm">
      <span className="truncate max-w-[150px] font-medium">{user.email}</span>
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-3">
      <Button asChild size="sm" variant="ghost" className="text-[#2D2420]">
        <Link href="/auth/login">Sign in</Link>
      </Button>
      <Button asChild size="sm" className="bg-[#2D2420] text-white hover:bg-[#C56A3C] rounded-full px-6">
        <Link href="/auth/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}