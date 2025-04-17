import db from "@/app/db";
import ProfileCard from "@/components/ProfileCard";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";

async function getUserWallet() {
  const session = await getServerSession(authConfig);

  const userWallet = await db.solWallet.findFirst({
    where: {
      userId: session?.user?.uid,
    },
    select: {
      publicKey: true,
    },
  });
  if (!userWallet) {
    return {
      error: "No solana wallet found associated to the user",
    };
  }
  return { error: null, userWallet };
}

const DashboardPage = async () => {
  const userWallet = await getUserWallet();
  if (userWallet.error || !userWallet.userWallet?.publicKey) {
    return <>No solana wallet found</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 pb-12">
      <ProfileCard publicKey={userWallet.userWallet?.publicKey} />
    </div>
  );
};

export default DashboardPage;
