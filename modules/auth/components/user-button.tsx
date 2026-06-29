"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { LogOut, User } from "lucide-react";
import LogoutButton from "./logout-button";
import { useCurrentUser } from "../hooks/use-current-user";

const UserButton = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className={cn("relative rounded-full cursor-pointer")}>
          <Avatar className="h-10 w-10 border border-zinc-700 transition-all duration-200 hover:border-amber-500/70">
            <AvatarImage src={user?.image!} alt={user?.name!} />
            <AvatarFallback className="bg-zinc-900 text-amber-400">
              <User className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mr-4 w-64 rounded-xl border border-zinc-800 bg-[#111111]/95 backdrop-blur-md shadow-2xl shadow-black/40">
        <DropdownMenuItem className="cursor-default focus:bg-zinc-900 focus:text-white">
          <span className="truncate text-sm text-zinc-400">{user?.email}</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-zinc-800" />

        <LogoutButton>
          <DropdownMenuItem className="cursor-pointer rounded-md text-zinc-200 transition-colors hover:bg-zinc-900 focus:bg-zinc-900 focus:text-amber-400">
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
