"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShineBorder } from "@/components/magicui/shine-border";

export function ShineBorderDemo() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Check if already "logged in" via localStorage
  useEffect(() => {
    const isDevLoggedIn = localStorage.getItem("myenum-dev-login");
    if (isDevLoggedIn === "true") {
      router.push("/myenum/dashboard");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const validEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
    const validPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (email === validEmail && password === validPassword) {
      localStorage.setItem("myenum-dev-login", "true"); // Set flag
      router.push("/myenum/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Card className="relative overflow-hidden bg-black rounded-2xl">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="grid gap-4 rounded-2xl">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <CardFooter className="mt-4">
            <Button className="w-full bg-white text-color-4" type="submit">
              Sign In
            </Button>
          </CardFooter>
        </form>

        {/* 🔓 Dev access button */}
        <div className="mt-4 text-center">
          <Button
            variant="outline"
            onClick={() => {
              localStorage.setItem("myenum-dev-login", "true");
              router.push("/myenum/dashboard");
            }}
          >
            Dev Login (No Password)
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
