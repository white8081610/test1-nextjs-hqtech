"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthCheck() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (!accessToken || !refreshToken) {
      router.push("/login");
    }
  }, [router]);

  return null;
}