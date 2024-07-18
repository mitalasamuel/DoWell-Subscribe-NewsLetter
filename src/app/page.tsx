"use client";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { googleProvider, githubProvider } from "../../firebase";
import { handleSignIn } from "./util";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);

  const handleGoogleSignIn = () => {
    setLoading(true);
    handleSignIn(googleProvider, GoogleAuthProvider);
  };

  const handleGithubSignIn = () => {
    setLoading(true);
    handleSignIn(githubProvider, GithubAuthProvider);
  };

  return (
    <main className="flex flex-col h-screen p-8 items-center justify-center">
      <img src="./true.webp" alt="" className="mb-4" />
      <h2 className="text-3xl font-bold mb-6">
        Sign up to the DOWELL Newsletter
      </h2>
      <div className="max-w-2xl text-center text-sm text-gray-400 mb-6">
        <p>
          Welcome to the DoWell Subscribe Newsletter service! At DoWell, we
          strive to provide a seamless and efficient subscription process for
          your newsletter. If you encounter any issues or have any questions
          along the way, our dedicated customer support team is here to assist
          you. Feel free to reach out to us with any inquiries you may have.
        </p>
      </div>
      <button
        className="py-3 px-6 flex items-center justify-center rounded-md border-gray-600 border-2 w-3/5 mb-4 text-lg hover:bg-gray-800 hover:text-gray-50"
        onClick={handleGoogleSignIn}
        disabled={loading}
      >
        <FaGoogle className="inline-block mr-2" />
        {loading ? "Subscribing..." : "Subscribe"}
      </button>
    </main>
  );
}
