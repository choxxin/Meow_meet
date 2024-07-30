import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <head>
        <meta
          name="google-site-verification"
          content="WmZU7-Nrp0T_pfG3F9n6IHwR1fA5L9Q_P-gCJwyQ2vU"
        />
      </head>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default HomeLayout;
