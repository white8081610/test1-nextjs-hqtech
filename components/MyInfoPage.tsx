"use client";

import React from 'react';
import { Navbar } from './Navbar';
import ProfileHeader from './ProfileHeader';

const MyInfoPage: React.FC = () => {
  const handleTabChange = (tab: string) => {
    console.log(`Tab changed to: ${tab}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Navbar onTabChange={handleTabChange} />
      <div className="absolute top-10 left-10 z-30 mt-16 pointer-events-none">
        <ProfileHeader name="Alexandra Kuibyshevskaya" />
      </div>
    </div>
  );
};

export default MyInfoPage;