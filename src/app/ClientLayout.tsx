"use client";

import Header from "@/components/Header";
import { useState } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {children}
      <div className={`${isMenuOpen ? "cover--open" : ""} cover`}></div>
    </>
  );
}
