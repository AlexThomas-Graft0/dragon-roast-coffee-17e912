import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-[#FAF9F6]">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card className="border-black/5 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-[#2D2420]">
                Thank you for joining!
              </CardTitle>
              <CardDescription>Check your inbox to confirm.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                We&apos;ve sent a confirmation email. Please verify your account to start roasting.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}