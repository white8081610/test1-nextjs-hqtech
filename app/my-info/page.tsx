"use client";

import { useState } from "react";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { MainContent } from "../../components/MainContent";
import { ProfileHeader } from "../../components/ProfileHeader";
import { useRouter } from "next/navigation";

interface Tab {
  name: string;
  path: string;
}

export default function EmployeePage() {
  const [activeTab, setActiveTab] = useState("Home");
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

  const handleNavbarTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Header activeTab={activeTab} tabs={tabs} onTabClick={handleTabClick} />
      <Navbar onTabChange={handleNavbarTabChange} />
      <div className="absolute top-10 left-10 z-30 mt-16 pointer-events-none">
        <ProfileHeader name="Alexandra Kuibyshevskaya" />
      </div>
      <div className="flex flex-1 pt-0 px-4 py-6 space-x-6 mr-16">
        <Sidebar />
        <MainContent activeTab={activeTab} />
      </div>
    </div>
  );
}