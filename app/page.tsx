import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-8">
      <h1 className="text-5xl font-bold mb-8 text-center">Starter Template</h1>
      <p className="text-lg text-muted-foreground mb-8 text-center max-w-md">
        Built with Next.js 15, Shadcn UI, and Firebase.
      </p>
      <div className="flex gap-4">
        <Button className="px-8 py-6 text-lg" variant="default" asChild>
          <Link href="/sign-up">Sign up</Link>
        </Button>
        <Button className="px-8 py-6 text-lg" variant="outline" asChild>
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}
