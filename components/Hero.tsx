"use client";

import { ArrowRight, ChevronRight, Clock, CreditCard, Globe, ShieldCheck } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export const Hero = () => {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4  pb-16 text-center  md:pb-24">
      {/* Hero Section */}
      <div className="relative z-10 pt-20 pb-12">
       
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          The Indian Cryptocurrency
          <span className="text-blue-500 block md:inline md:ml-4">Revolution</span>
        </h1>
        
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-3">
            Create a frictionless wallet from India with just a Google Account.
          </p>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
            Convert your INR into Cryptocurrency
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          {session?.user ? (
            <Button
              size="lg"
              onClick={() => router.push("/dashboard")}
              className="text-white bg-blue-600 hover:bg-blue-700 py-6 px-8 text-lg rounded-xl"
            >
              Go to Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          ) : (
            <Button
              size="lg"
              onClick={() => signIn("google")}
              className="text-white bg-blue-600 hover:bg-blue-700 py-6 px-8 text-lg rounded-xl shadow-lg shadow-blue-500/30"
            >
              Login with Google
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          )}
          
          <Button
            size="lg"
            variant="outline"
            className="border-gray-300 dark:border-gray-700 py-6 px-8 text-lg rounded-xl"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="text-4xl font-bold text-blue-500 mb-2">₹10B+</div>
          <div className="text-gray-600 dark:text-gray-300">Transaction Volume</div>
        </div>
        <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="text-4xl font-bold text-blue-500 mb-2">200k+</div>
          <div className="text-gray-600 dark:text-gray-300">Active Users</div>
        </div>
        <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="text-4xl font-bold text-blue-500 mb-2">20+</div>
          <div className="text-gray-600 dark:text-gray-300">Supported Coins</div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="my-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Why Choose Our Platform</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 text-left bg-white/5 dark:bg-gray-800/30 rounded-2xl border border-gray-200/30 dark:border-gray-700/50">
            <div className="mb-4 inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-500">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Maximum Security</h3>
            <p className="text-gray-600 dark:text-gray-400">Multi-layered security with advanced encryption and two-factor authentication.</p>
          </div>
          
          <div className="p-6 text-left bg-white/5 dark:bg-gray-800/30 rounded-2xl border border-gray-200/30 dark:border-gray-700/50">
            <div className="mb-4 inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-500">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Instant Transactions</h3>
            <p className="text-gray-600 dark:text-gray-400">Lightning-fast transactions with minimal processing time.</p>
          </div>
          
          <div className="p-6 text-left bg-white/5 dark:bg-gray-800/30 rounded-2xl border border-gray-200/30 dark:border-gray-700/50">
            <div className="mb-4 inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-500">
              <CreditCard className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">INR Integration</h3>
            <p className="text-gray-600 dark:text-gray-400">Seamless conversion between INR and various cryptocurrencies.</p>
          </div>
          
          <div className="p-6 text-left bg-white/5 dark:bg-gray-800/30 rounded-2xl border border-gray-200/30 dark:border-gray-700/50">
            <div className="mb-4 inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-500">
              <Globe className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Access</h3>
            <p className="text-gray-600 dark:text-gray-400">Access your wallet from anywhere in the world, anytime.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative mt-24 mb-16 py-16 px-8 rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        {/* Abstract shape backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white"></div>
          <div className="absolute bottom-0 left-20 w-40 h-40 rounded-full bg-white"></div>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Crypto Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-lg mx-auto">
            Join thousands of Indians who are already part of the cryptocurrency revolution.
          </p>
          
          <Button
            size="lg"
            onClick={() => session?.user ? router.push("/dashboard") : signIn("google")}
            className="bg-white text-blue-600 hover:bg-blue-50 py-6 px-8 text-lg rounded-xl shadow-lg"
          >
            {session?.user ? "Go to Dashboard" : "Get Started Now"}
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>

      
    </div>
  );
}