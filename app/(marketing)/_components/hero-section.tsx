"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Hero = () => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) return;

    router.push("/groups");
  }, [user]);

  return (
    <div className="container">
      <div className="mt-[200px] flex flex-col justify-center items-center gap-2">
        <div className="text-3xl font-bold">Start Making Habits</div>
        <SignInButton mode="modal">
          <Button>
            Join in <ArrowRight className="ml-2" size={15} />
          </Button>
        </SignInButton>
      </div>
    </div>
  );
};

export default Hero;
