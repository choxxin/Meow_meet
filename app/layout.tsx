import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meow meet",
  description: "Video calling app",
  icons: {
    icon: ["/images/Untitled-1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="WmZU7-Nrp0T_pfG3F9n6IHwR1fA5L9Q_P-gCJwyQ2vU"
        />
      </head>
      <ClerkProvider
        appearance={{
          layout: {
            logoImageUrl: "/images/Untitled-1.png",
          },
          variables: {
            colorText: "#eeee",
            colorPrimary: "#0E78F9",
            colorBackground: "#1c1f2e",
            colorInputBackground: "#252a41",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={`${inter.className} bg-dark-2`}>
          {children} <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
