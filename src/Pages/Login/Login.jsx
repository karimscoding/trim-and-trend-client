import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-4">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="input input-bordered w-full  "
            />
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>

            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>

          <input
            className="btn btn-primary w-full"
            value="Login"
            type="submit"
          />
        </form>
        <p className="mt-5">
          New to Trim & Trend{" "}
          <Link to="/signup" className="text-primary">
            Create a account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-accent w-full">Continue With Google</button>
      </div>
    </div>
  );
}
