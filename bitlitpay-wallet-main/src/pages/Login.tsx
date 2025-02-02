import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const form = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-wallet-primary">Welcome Back</h2>
          <p className="text-gray-600 mt-2">Login to your BitLitPay account</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">Login</Button>
          </form>
        </Form>

        <p className="text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-wallet-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;