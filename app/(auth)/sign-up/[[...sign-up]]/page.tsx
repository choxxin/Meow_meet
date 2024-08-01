import React from "react";
import { SignUp } from "@clerk/nextjs";
const SignUpPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <meta
        name="google-site-verification"
        content="WmZU7-Nrp0T_pfG3F9n6IHwR1fA5L9Q_P-gCJwyQ2vU"
      />
      <SignUp
        path="/sign-up" // Make sure to include this prop
        routing="path"
        signInUrl="/sign-in"
        fallbackRedirectUrl="/"
      />
    </main>
  );
};

export default SignUpPage;
