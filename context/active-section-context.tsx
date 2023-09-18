"use client";
import { links } from "@/lib/data";
import { sectionName } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: sectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<sectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<sectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error("Active section context");
  }
  return context;
};
