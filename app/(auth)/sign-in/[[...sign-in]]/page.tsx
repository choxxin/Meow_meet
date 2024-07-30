import React from "react";
import { SignIn } from "@clerk/nextjs";
const SignInPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <head>
        <meta
          name="google-site-verification"
          content="google764987eda22ad75c.html"
        />
      </head>
      <SignIn />
    </main>
  );
};

export default SignInPage;
