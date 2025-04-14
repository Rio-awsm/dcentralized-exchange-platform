"use client";
import {
  BarChart2,
  Coins,
  ExternalLink,
  User
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { ModeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Appbar = () => {
  const { data: session } = useSession();
  
  return (
    <div className="border-b bg-black/80 backdrop-blur-sm text-white sticky top-0 z-50 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Coins className="w-6 h-6 text-blue-400" />
        <span className="text-xl font-bold">DCEX</span>
      </div>
      
      <div className="hidden md:flex items-center gap-6 text-sm">
        <div className="flex items-center gap-1 text-gray-300 hover:text-white cursor-pointer">
          <BarChart2 className="w-4 h-4" />
          <span>Trade</span>
        </div>
        <div className="flex items-center gap-1 text-gray-300 hover:text-white cursor-pointer">
          <ExternalLink className="w-4 h-4" />
          <span>Explore</span>
        </div>
      </div>

      <div className="flex gap-3">
        {session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-blue-500 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400">
                <User className="w-4 h-4 mr-2" />
                <span className="max-w-[100px] truncate">{session.user.name || "Account"}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button 
            onClick={() => signIn()}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Sign In
          </Button>
        )}
       <div><ModeToggle /></div> 
      </div>
    </div>
  );
};

export default Appbar;