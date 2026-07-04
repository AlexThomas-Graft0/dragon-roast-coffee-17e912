import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-[#FAF9F6]">
      <div className="w-full max-w-sm">
        <Card className="border-black/5 shadow-2xl bg-white overflow-hidden">
          <div className="h-2 bg-[#C56A3C] w-full" />
          <CardHeader>
            <div className="mb-4 text-[#C56A3C]">
              <Mail size={32} />
            </div>
            <CardTitle className="text-3xl font-serif text-[#2D2420]">Check your inbox</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#2D2420]/70 leading-relaxed">
              We&apos;ve sent a confirmation link to your email address. Please click it to verify your account and start roasting.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}