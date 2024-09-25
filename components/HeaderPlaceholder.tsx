"use client";

import { useState } from "react";
import { Header } from "./Header";
import { useRouter } from "next/navigation";

interface Tab {
  name: string;
  path: string;
}

interface HeaderPlaceholderProps {
  activeTab: string;
}

export default function HeaderPlaceholder({ activeTab }: HeaderPlaceholderProps) {
  const router = useRouter();

  const tabs: Tab[] = [
    { name: "Home", path: "/" },
    { name: "My info", path: "/my-info" },
    { name: "People", path: "/people" },
    { name: "Hiring", path: "/hiring" },
    { name: "Reports", path: "/reports" },
    { name: "Files", path: "/files" },
  ];

  const handleTabClick = (tab: Tab) => {
    router.push(tab.path);
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Header activeTab={activeTab} tabs={tabs} onTabClick={handleTabClick} />
    </div>
  );
}