import LoginForm from "@/components/Form/LoginForm";

const LoginPage = () => {
  return (
    <div className="justify-center items-center p-24">
      <div className="max-w-lg shadow w-full border p-10 rounded-md mx-auto">
        <h2 className="text-center text-2xl font-medium my-4">Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
