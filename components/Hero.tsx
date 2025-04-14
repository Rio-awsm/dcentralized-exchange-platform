"use client";

import { ArrowRight } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export const Hero = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 pt-20 pb-16 text-center md:pt-32 md:pb-24">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        The Indian Cryptocurrency
        <span className="text-blue-500 block md:inline md:ml-4">Revolution</span>
      </h1>
      
      <div className="max-w-2xl mx-auto">
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-3">
          Create a frictionless wallet from India with just a Google Account.
        </p>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12">
          Convert your INR into Cryptocurrency
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {session?.user ? (
          <Button
            size="lg"
            onClick={() => router.push("/dashboard")}
            className="text-white bg-blue-600 hover:bg-blue-700"
          >
            Go to Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button
            size="lg"
            onClick={() => signIn("google")}
            className="text-white bg-blue-600 hover:bg-blue-700"
          >
            Login with Google
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
        
        <Button
          size="lg"
          variant="outline"
          className="border-gray-300 dark:border-gray-700"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};