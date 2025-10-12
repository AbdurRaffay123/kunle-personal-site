"use client";
import React, { createContext, useContext } from "react";

export interface Profile {
  name: string;
  designation?: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
}

export interface MainPageData {
  profile: Profile | null;
  research: any[];
  projects: any[];
}

const ProfileContext = createContext<MainPageData | null>(null);

export const useProfile = () => useContext(ProfileContext);


export function ProfileProvider({
  mainData,
  children,
}: {
  mainData: MainPageData;
  children: React.ReactNode;
}) {
  return (
    <ProfileContext.Provider value={mainData}>{children}</ProfileContext.Provider>
  );
}