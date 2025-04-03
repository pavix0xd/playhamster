import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Login Page</h1>
      <p className="mb-4">Please log in to access the application.</p>
      <LoginLink>
        <Button>Login</Button>
      </LoginLink>
    </div>
  );
}