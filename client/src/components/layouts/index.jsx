import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutComponent() {
  return (
    <>
      <Header />
      <main className="min-vh-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
