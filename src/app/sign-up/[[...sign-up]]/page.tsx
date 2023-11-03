import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "FlowBrain - Sign Up",
}

export default function SignUnPage() {
    return (
        <div className="flex h-screen items-center justify-center">
            <SignUp appearance={{
                variables: {
                    colorPrimary: "#0f172a"
                }
            }}/>
        </div>
    )
}