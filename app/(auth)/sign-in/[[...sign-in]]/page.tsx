import React from "react";
import { SignIn } from "@clerk/nextjs";
const SignInPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <meta
        name="google-site-verification"
        content="WmZU7-Nrp0T_pfG3F9n6IHwR1fA5L9Q_P-gCJwyQ2vU"
      />
    
      <SignIn />
    </main>
  );
};

export default SignInPage;
