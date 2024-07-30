import StreamVideoProvider from "@/Providers/StreamClientProvider";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <head>
        <meta
          name="google-site-verification"
          content="google764987eda22ad75c.html"
        />
      </head>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
