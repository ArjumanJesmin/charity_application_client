"use client";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  username: string;
  email: string;
  password: string;
};
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch("username"));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="username" className="block text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            className="border-b border-gray-300 w-full focus:outline-none"
            {...register("username")}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            className="border-b border-gray-300 w-full focus:outline-none"
            {...register("email")}
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            className=" border-b border-gray-300 w-full focus:outline-none"
            {...register("password", { required: true })}
          />
        </div>

        <div className="flex justify-center items-center">
          <button className="btn outline-1" type="submit">
            Register Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
