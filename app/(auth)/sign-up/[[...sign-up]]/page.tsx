import React from "react";
import { SignUp } from "@clerk/nextjs";
const SignUpPage = () => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
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
