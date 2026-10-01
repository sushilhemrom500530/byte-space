"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import FormField from "@/components/form";
import { IRegisterFormInputs } from "@/types";

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<IRegisterFormInputs>({
        mode: "onTouched",
    });

    const onSubmit = async (data: IRegisterFormInputs) => {
        console.log("Register submission:", data);
        // Form submission API logic
    };

    return (
        <div className="w-full flex-1 flex flex-col justify-between select-none">
            <div>
                <span className="text-xs sm:text-[13px] font-medium text-primary block mb-2 sm:mb-2.5">
                    Create an Account
                </span>

                <h2 className="text-2xl sm:text-[28px] font-bold text-[#242528] tracking-tight leading-[1.12] mb-6 sm:mb-7">
                    Welcome to
                    <br />
                    ByteSpace
                </h2>

                {/* Form Inputs */}
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col">
                    <FormField
                        label="Full Name"
                        type="text"
                        name="fullName"
                        placeholder="Jamie Davis"
                        register={register("fullName", {
                            required: "Full name is required",
                            minLength: {
                                value: 2,
                                message: "Full name must be at least 2 characters",
                            },
                        })}
                        error={errors.fullName}
                        containerClassName="mb-4 sm:mb-4.5"
                    />

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

                    {/* Action Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="h-8 sm:h-9 px-6 sm:px-6.5 rounded-full bg-secondary text-[#111111] font-semibold text-xs sm:text-[13px] hover:brightness-95 active:scale-95 transition-all shadow-none cursor-pointer whitespace-nowrap disabled:opacity-60"
                        >
                            {isSubmitting ? "Submitting..." : "Continue"}
                        </button>
                    </div>
                </form>
            </div>

            {/* Bottom Navigation */}
            <div className="pt-10 sm:pt-14">
                <p className="text-center text-[11px] sm:text-xs text-[#71717A]">
                    Already have an account?{" "}
                    <Link
                        href="/auth/login"
                        className="text-primary font-medium hover:underline transition-colors"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}