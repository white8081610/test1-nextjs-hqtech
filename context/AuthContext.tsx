"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (accessToken: string, refreshToken: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      setIsLoggedIn(true);
    }
  }, [router]);

  const login = (accessToken: string, refreshToken: string) => {
    console.log("Logging in with tokens:", accessToken, refreshToken);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    setIsLoggedIn(true);
    console.log("Tokens set, redirecting to /home");
    router.push("/home");
  };

  const logout = async () => {
    console.log("Logging out");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    console.log("Tokens removed, redirecting to /login");

    // Вызываем серверный обработчик для выхода
    try {
      const response = await fetch('/api/logout', { method: 'POST' });
      const data = await response.json();
      console.log(data.message); // Должно вывести "Logged out successfully"
    } catch (error) {
      console.error('Error during logout:', error);
    }

    // Перенаправляем пользователя на страницу входа
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};