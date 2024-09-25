"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQuery } from "@apollo/client";
import { MY_PROFILE_QUERY } from "@/graphql/queries";

export function ProfileHeader() {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex items-center space-x-4 z-20 ml-24 ">
      <Avatar className="h-36 w-36">
        <AvatarImage src={user?.avatar || "/ava_t2.png"} alt={user?.name || "User"} />
        <AvatarFallback>{user?.name.split(' ').map(n => n[0]).join('') || "U"}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start -mt-12">
        <h2 className="text-2xl font-bold pl-16">{user?.name || "User"}</h2>
      </div>
    </div>
  );
}

export default ProfileHeader;