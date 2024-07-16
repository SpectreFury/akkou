import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignOutButton } from "@clerk/nextjs";

const UserInfo = async () => {
  const user = await currentUser();

  return (
    <div className="p-2 flex gap-2 items-center border m-2 rounded">
      <Avatar>
        <AvatarImage src={user?.imageUrl} />
        <AvatarFallback>Akkou</AvatarFallback>
      </Avatar>
      <Separator orientation="vertical" className="h-10" />
      <div className="flex justify-between items-center w-full">
        <div className="font-medium">{user?.fullName}</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="ghost">
              <ArrowDownIcon size={15} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <SignOutButton>
                <div className="flex items-center">
                  <LogOut size={15} className="mr-2" />
                  Logout
                </div>
              </SignOutButton>{" "}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserInfo;
