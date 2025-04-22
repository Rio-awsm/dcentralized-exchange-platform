"use client";
import { TokenWithbalance } from "@/hooks/useTokens";
import { CheckCircle, Copy, TrendingUp, Wallet } from "lucide-react";
import { useState } from "react";
import TokenList from "./TokenList";
import { Button } from "./ui/button";

const Assets = ({
  publicKey,
  tokenBalances,
  loading,
}: {
  publicKey: string;
  tokenBalances: {
    totalBalance: number;
    tokens: TokenWithbalance[];
  } | null;
  loading: boolean;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(publicKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400">
          Account Assets
        </h3>
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
          <TrendingUp className="h-4 w-4 mr-1 text-green-500" />
          Updated just now
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex items-end">
            <div className="text-5xl font-bold text-gray-900 dark:text-gray-100">
            ${tokenBalances?.totalBalance}
            </div>
            <div className="text-gray-500 font-semibold text-2xl pb-1 pl-2">
              USD
            </div>
          </div>

          <Button
            onClick={handleCopy}
            variant="outline"
            className="flex items-center border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            {copied ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                <span>Your wallet address</span>
              </>
            )}
          </Button>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-4">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
              <Wallet className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Wallet Address
              </div>
              <div className="text-gray-700 dark:text-gray-300 font-mono text-sm mt-1">
                {publicKey.slice(0, 10)}...{publicKey.slice(-8)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-medium">Your Tokens</h3>
        </div>

        <div className="space-y-4">
          {loading ? (
            <div className="animate-pulse flex flex-col space-y-3">
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-12 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
              <TokenList tokens={tokenBalances?.tokens || []} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assets;
