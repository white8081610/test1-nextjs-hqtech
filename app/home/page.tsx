"use client";

import { useState } from "react";
import { Header } from "../../components/Header";
import PlaceholderPage from "../../components/PlaceholderPage";
import { useRouter } from "next/navigation";

interface Tab {
  name: string;
  path: string;
}

export default function Files() {
  const [activeTab, setActiveTab] = useState("Files");
  const router = useRouter();

  const tabs: Tab[] = [
    { name: "Home", path: "/home" },
    { name: "My info", path: "/my-info" },
    { name: "People", path: "/people" },
    { name: "Hiring", path: "/hiring" },
    { name: "Reports", path: "/reports" },
    { name: "Files", path: "/files" },
  ];

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab.name);
    router.push(tab.path);
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Header activeTab={activeTab} tabs={tabs} onTabClick={handleTabClick} />
      <PlaceholderPage />
    </div>
  );
}