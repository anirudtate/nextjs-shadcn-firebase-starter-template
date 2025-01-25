"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { signOut } from "@/lib/auth";

export default function DashboardPage() {
  const { user } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground p-8">
      <h1 className="text-5xl font-bold mb-8 text-center">Dashboard</h1>
      <div className="text-lg text-muted-foreground mb-8 text-center space-y-2">
        <p>{user?.email}</p>
        {user?.displayName && <p>{user.displayName}</p>}
      </div>
      <Button 
        variant="destructive" 
        onClick={handleSignOut}
        className="px-8 py-6 text-lg"
      >
        Sign Out
      </Button>
    </div>
  );
} 