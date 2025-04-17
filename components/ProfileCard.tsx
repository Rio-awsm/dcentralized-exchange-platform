"use client";
import {
  ArrowDownToLine,
  PlusCircle,
  RefreshCw,
  SendHorizontal,
  Wallet,
} from "lucide-react";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import Assets from "./Assets";
import Greeting from "./Greeting";
import Swap from "./Swap";
import { Button } from "./ui/button";

type Tab = "tokens" | "send" | "add_funds" | "swap" | "withdraw";
const tabs: { id: Tab; name: string; icon: React.ReactNode }[] = [
  { id: "tokens", name: "Tokens", icon: <Wallet className="mr-2 h-4 w-4" /> },
  {
    id: "send",
    name: "Send",
    icon: <SendHorizontal className="mr-2 h-4 w-4" />,
  },
  {
    id: "add_funds",
    name: "Add funds",
    icon: <PlusCircle className="mr-2 h-4 w-4" />,
  },
  {
    id: "withdraw",
    name: "Withdraw",
    icon: <ArrowDownToLine className="mr-2 h-4 w-4" />,
  },
  { id: "swap", name: "Swap", icon: <RefreshCw className="mr-2 h-4 w-4" /> },
];

const ProfileCard = ({ publicKey }: { publicKey: string }) => {
  const session = useSession();
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<Tab>("tokens");

  if (!session.data?.user) {
    redirect("/");
  }

  return (
    <div className="pt-8 flex justify-center px-4">
      <div className="max-w-4xl bg-white dark:bg-gray-900 rounded-xl shadow-lg w-full border border-gray-200 dark:border-gray-800 overflow-hidden">
        <Greeting
          image={session.data?.user?.image ?? ""}
          name={session.data?.user?.name ?? ""}
        />

        <div className="flex overflow-x-auto px-6 py-4 border-b border-gray-100 dark:border-gray-800 gap-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={selectedTab === tab.id ? "default" : "ghost"}
              className={
                selectedTab === tab.id
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }
              onClick={() => {
                setSelectedTab(tab.id);
              }}
            >
              {tab.icon}
              {tab.name}
            </Button>
          ))}
        </div>

        <div className="p-6">
          <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-medium mb-2">
              {tabs.find((tab) => tab.id === selectedTab)?.name} Panel
            </h3>
            <div>
              <div
                className={`${selectedTab === "tokens" ? "visible" : "hidden"}`}
              >
                <Assets publicKey={publicKey} loading={false} />
              </div>

              <div
                className={`${selectedTab === "swap" ? "visible" : "hidden"}`}
              >
                <Swap publicKey={publicKey} />
              </div>

              <div
                className={`${
                  selectedTab !== "swap" && selectedTab !== "tokens"
                    ? "visible"
                    : "hidden"
                }`}
              >
                <div className="p-12 flex justify-center">
                  We dont yet support this feature
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
