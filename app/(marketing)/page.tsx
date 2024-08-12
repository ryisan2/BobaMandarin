import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignUpButton,
  SignInButton,
  SignIn,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Link from "next/link";


export default function Home() {
  return (
    <div
      className="max-w-[988px] mx-auto 
  flex-1 w-full flex flex-col 
  lg:flex-row items-center justify-center p-4 gap-2"
    >
      <div className="relative w-[500px] h-[500px] lg:w-[2000px] lg:h-[900px] mb-8 lg:mb-0">
        <Image src="hero.svg" fill alt="hero" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-y-8">
          <h1
            className=" text-xl
 font-bold text-neutral-60 max-w-[280px] 
 text-center mb-3"
          >
            Learn , practice and master your mandarin with Boba Mandarin!
          </h1>
        </div>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <div className="flex flex-col justify-center items-center mb-1 ">
            <SignedOut>
              <SignUpButton
                mode="modal"
              
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="mb-3 lg:w-[200px] lg:h-[50px]"
                >
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton
                mode="modal"
             
              >
                <Button
                  size="lg"
                  variant="primaryOutline"
                  className="mt-1 flex flex-col lg:w-[300px] lg:h-[50px]"
                >
                  Already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>

              <Button size="lg" variant="secondary" className="w-full " asChild>
                <Link href="/learn">
                Continue Learning
              </Link>
              </Button>
            </SignedIn>
          </div>
        </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
