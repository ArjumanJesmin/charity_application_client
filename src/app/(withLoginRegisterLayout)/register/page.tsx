import RegisterForm from "@/components/Form/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="justify-center items-center p-24">
      <div className="max-w-lg shadow w-full border p-10 rounded-md mx-auto">
        <h2 className="text-center text-2xl font-medium my-4">Register</h2>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
