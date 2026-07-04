import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";
import { AlertCircle } from "lucide-react";

async function ErrorContent({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const error = typeof params.error === 'string' ? params.error : undefined;

  return (
    <div className="flex items-center gap-3 text-red-700 bg-red-50 p-4 rounded-lg border border-red-100">
      <AlertCircle className="size-5 shrink-0" />
      <p className="text-sm font-medium">
        {error || "An unexpected error occurred during authentication."}
      </p>
    </div>
  );
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-[#FAF9F6]">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-6">
          <Card className="border-black/5 shadow-2xl bg-white">
            <CardHeader>
              <CardTitle className="text-3xl font-serif text-[#2D2420]">Authentication Error</CardTitle>
            </CardHeader>
            <CardContent>
              <Suspense fallback={<div className="h-20 animate-pulse bg-gray-100 rounded-lg" />}>
                <ErrorContent searchParams={searchParams} />
              </Suspense>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}