import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen font-roboto">
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
