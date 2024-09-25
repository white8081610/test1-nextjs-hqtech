"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Settings } from "lucide-react";

interface NavbarProps {
  onTabChange: (tab: string) => void;
}

export function Navbar({ onTabChange }: NavbarProps): JSX.Element {
  const [activeTab, setActiveTab] = useState("Personal");
  const tabs = [
    "Personal",
    "Job",
    "Time Off",
    "Emergency",
    "Documents",
    "Notes",
    "Benefits",
    "Training",
    "Assets",
    "More"
  ];

  const handleTabClick = (tab: string): void => {
    setActiveTab(tab);
    onTabChange(tab);
  };

  return (
    <nav className="flex flex-col items-center justify-between p-4 pb-0 bg-custom-blue border-b border-blue-200 z-0 h-44">
      <div className="flex flex-row items-center justify-end space-x-4 mb-4 md:mb-0 ml-auto mt-12">
        <Button className="border-black">
          Request a Change <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="border-black">
              <Settings className="h-4 w-4" />
              <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Option 1</DropdownMenuItem>
            <DropdownMenuItem>Option 2</DropdownMenuItem>
            <DropdownMenuItem>Option 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex overflow-x-auto gap-2 mt-auto w-full justify-center mr-40">
        {tabs.map((tab) => (
          tab === "More" ? (
            <DropdownMenu key={tab}>
              <DropdownMenuTrigger asChild>
                <Button
                  className={`${activeTab === tab ? "bg-white shadow-none text-black rounded-t-lg" : "bg-transparent shadow-none text-black"} flex-shrink-0 hover:bg-white hover:text-black`}
                  onClick={() => handleTabClick(tab)}
                >
                  More <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Option 1</DropdownMenuItem>
                <DropdownMenuItem>Option 2</DropdownMenuItem>
                <DropdownMenuItem>Option 3</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              key={tab}
              className={`${activeTab === tab ? "bg-white shadow-none text-black rounded-t-lg rounded-b-none" : "bg-transparent shadow-none text-black"} flex-shrink-0 hover:bg-white hover:text-black`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </Button>
          )
        ))}
      </div>
    </nav>
  );
}