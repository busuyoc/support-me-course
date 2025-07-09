"use client";
import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
export default function LandingPage() {
  const [mounted, setMounted] = useState(false); // necessary since Im using dark reader extension
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      <h1 className="flex gap-2 items-center">
        <PersonStandingIcon size={50} className="text-pink-500" />
        SupportMe
      </h1>
      <p>The best dashboard to manage customer support</p>
      <div className="flex gap-2 items-center">
        <Button asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <small>or</small>
        <Button asChild variant="outline">
          <Link href="/sign-up">Sign up</Link>
        </Button>
      </div>
    </>
  );
}
