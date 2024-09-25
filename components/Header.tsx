"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings, Bell, HelpCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQuery } from "@apollo/client";
import { MY_PROFILE_QUERY } from "@/graphql/queries";
import { useAuth } from "@/context/AuthContext";

interface Tab {
  name: string;
  path: string;
}

interface HeaderProps {
  activeTab: string;
  tabs: Tab[];
  onTabClick: (tab: Tab) => void;
}

export function Header({ activeTab, tabs, onTabClick }: HeaderProps) {
  const router = useRouter();
  const { isLoggedIn, logout } = useAuth();
  const [user, setUser] = useState<{ name: string; avatar: string } | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAccessToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const { data, loading, error } = useQuery(MY_PROFILE_QUERY, {
    context: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    skip: !accessToken, // Пропустить запрос, если accessToken не установлен
  });

  useEffect(() => {
    if (data) {
      setUser(data.myProfile);
    }
  }, [data]);

  const handleTabClick = (tab: Tab) => {
    if (tab.name === "My info") {
      if (isLoggedIn) {
        console.log("User is logged in, redirecting to /my-info");
        router.push("/my-info");
      } else {
        console.log("User is not logged in, redirecting to /login");
        router.push("/login");
      }
      return;
    }
    onTabClick(tab);
    router.push(tab.path);
  };

  const handleLogout = () => {
    console.log("Logout button clicked");
    logout();
    console.log("Tokens removed, redirecting to /login");
    router.push("/login");
  };

  return (
    <header className="relative flex items-center justify-between p-4 bg-white border-b border-blue-200">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-bold">HarmonyHR</h1>
      </div>
      <nav className="hidden md:block absolute bottom-0 left-0 right-0">
        <ul className="flex space-x-4 ml-60">
          {tabs.map((tab) => (
            <li key={tab.name}>
              <Button
                variant="ghost"
                className={`${
                  activeTab === tab.name ? "bg-custom-blue" : "bg-white text-black"
                } rounded-t-lg rounded-b-none`}
                onClick={() => handleTabClick(tab)}
              >
                {tab.name}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <Button onClick={handleLogout}>Logout</Button>
        <Input
          type="search"
          placeholder="Search"
          className="w-64 hidden md:block shadow-none border-black rounded-lg"
        />
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        {user ? (
          <Button variant="ghost" size="icon">
            <img src={user.avatar} alt="User avatar" className="w-8 h-8 rounded-full" />
          </Button>
        ) : (
          <Button variant="ghost" size="icon">
            <img src="/ava_t2.png" alt="User avatar" className="w-8 h-8 rounded-full" />
          </Button>
        )}
      </div>
    </header>
  );
}