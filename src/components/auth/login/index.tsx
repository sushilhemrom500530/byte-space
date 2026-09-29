"use client";

import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import facebook_image from "@/assets/auth/facebook.png";
import google_image from "@/assets/auth/google.png";
import FormField from "@/components/form";
import { ILoginFormInputs } from "../../../types";


export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<ILoginFormInputs>({
        mode: "onTouched",
    });

    const onSubmit = async (data: ILoginFormInputs) => {
        console.log("Login submission:", data);
        // Form submission API logic
    };

    return (
        <div className="w-full flex-1 flex flex-col justify-between select-none">
            <div>
                <span className="text-xs sm:text-[13px] font-medium text-primary block mb-2 sm:mb-2.5">
                    Sign In
                </span>

                <h2 className="text-2xl sm:text-[28px] font-bold text-[#242528] tracking-tight leading-none mb-7 sm:mb-8">
                    Welcome Back
                </h2>

                {/* Form Inputs */}
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col">
                    <FormField
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="designer@example.com"
                        register={register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please enter a valid email address",
                            },
                        })}
                        error={errors.email}
                        containerClassName="mb-4 sm:mb-4.5"
                    />

                    <FormField
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        register={register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must be at least 6 characters",
                            },
                        })}
                        error={errors.password}
                        containerClassName="mb-4 sm:mb-5"
                    />

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="h-8 sm:h-9 px-6 sm:px-6.5 rounded-full bg-secondary text-[#111111] font-semibold text-xs sm:text-[13px] hover:brightness-95 transition-all shadow-none cursor-pointer whitespace-nowrap disabled:opacity-60"
                        >
                            {isSubmitting ? "Signing in..." : "Sign In"}
                        </button>
                    </div>
                </form>
            </div>

            <div className="my-6 sm:my-7">
                <div className="relative flex items-center justify-center mb-6">
                    <div className="w-full border-t border-[#EEEEEE]" />
                    <span className="absolute bg-white px-2.5 text-[11px] text-[#9CA3AF] select-none">
                        or
                    </span>
                </div>

                <div className="flex items-center justify-center gap-3.5">
                    <button
                        type="button"
                        aria-label="Sign in with Facebook"
                        className="w-11 h-11 sm:w-16 sm:h-16 rounded-[24px] border border-[#E5E7EB] flex items-center justify-center hover:bg-neutral-50 hover:border-neutral-300 transition-colors shadow-none cursor-pointer"
                    >
                        <Image
                            src={facebook_image}
                            alt="Facebook"
                            width={40}
                            height={40}
                        />
                    </button>
                    <button
                        type="button"
                        aria-label="Sign in with Google"
                        className="w-11 h-11 sm:w-16 sm:h-16 rounded-[24px] border border-[#E5E7EB] flex items-center justify-center hover:bg-neutral-50 hover:border-neutral-300 transition-colors shadow-none cursor-pointer"
                    >
                        <Image
                            src={google_image}
                            alt="Google"
                            width={40}
                            height={40}
                        />
                    </button>
                </div>
            </div>

            <p className="text-center text-[11px] sm:text-xs text-[#71717A]">
                New user?{" "}
                <Link
                    href="/auth/register"
                    className="text-primary font-medium hover:underline transition-colors"
                >
                    Create an account
                </Link>
            </p>
        </div>
    );
}