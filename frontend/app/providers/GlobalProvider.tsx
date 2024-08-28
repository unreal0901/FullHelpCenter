"use client";
import React from "react";
import { SearchProvider } from "./SearchContext";
// Adjust the import path as necessary
// Import other context providers

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <SearchProvider>{children}</SearchProvider>;
};

export default GlobalProvider;
