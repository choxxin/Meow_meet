import StreamVideoProvider from "@/Providers/StreamClientProvider";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <head>
        <meta
          name="google-site-verification"
          content="WmZU7-Nrp0T_pfG3F9n6IHwR1fA5L9Q_P-gCJwyQ2vU"
        />
      </head>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
