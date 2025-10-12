"use client";
import React, { createContext, useContext } from "react";

export interface Profile {
  name: string;
  bio: string;
  image: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    email?: string;
  };
}

const ProfileContext = createContext<Profile | null>(null);

export const useProfile = () => useContext(ProfileContext);

export function ProfileProvider({
  profile,
  children,
}: {
  profile: Profile;
  children: React.ReactNode;
}) {
  return (
    <ProfileContext.Provider value={profile}>{children}</ProfileContext.Provider>
  );
}