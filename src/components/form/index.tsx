"use client";

import React, { useState, forwardRef } from "react";
import { FiEye, FiEyeOff, FiChevronDown } from "react-icons/fi";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface ISelectOption {
    label: string;
    value: string | number;
}

export interface IFormFieldProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
    label?: string;
    name: string;
    type?: "text" | "email" | "password" | "select" | "number" | "tel" | string;
    options?: ISelectOption[];
    error?: FieldError | string;
    helperText?: string;
    register?: UseFormRegisterReturn;
    containerClassName?: string;
}

export const FormField = forwardRef<HTMLInputElement, IFormFieldProps>(
    (
        {
            label,
            name,
            type = "text",
            options,
            error,
            helperText,
            register,
            required,
            placeholder,
            className = "",
            containerClassName = "",
            disabled,
            id,
            ...rest
        },
        ref
    ) => {
        const [showPassword, setShowPassword] = useState(false);

        const errorMessage = typeof error === "string" ? error : error?.message;
        const hasError = Boolean(errorMessage);
        const inputId = id || name;

        // Input border & focus styles
        const baseInputStyles =
            "w-full p-3.5 rounded-[10px] border text-xs sm:text-sm text-[#242528] placeholder-[#A1A4AA] bg-white transition-colors focus:outline-none";
        const errorInputStyles = hasError
            ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-200"
            : "border-[#E5E7EB] focus:border-primary focus:ring-1 focus:ring-primary/20";
        const disabledStyles = disabled
            ? "bg-neutral-100 text-neutral-400 cursor-not-allowed border-neutral-200"
            : "";

        // Render Select Input
        if (type === "select") {
            const selectProps = rest as unknown as React.SelectHTMLAttributes<HTMLSelectElement>;
            return (
                <div className={`w-full ${containerClassName}`}>
                    {label && (
                        <label
                            htmlFor={inputId}
                            className="block text-[11px] sm:text-xs font-medium text-[#242528] mb-2"
                        >
                            {label}
                            {required && <span className="text-red-500 ml-1 font-semibold">*</span>}
                        </label>
                    )}
                    <div className="relative w-full">
                        <select
                            {...selectProps}
                            {...register}
                            id={inputId}
                            name={register?.name || name}
                            disabled={disabled}
                            defaultValue=""
                            className={`${baseInputStyles} ${errorInputStyles} ${disabledStyles} pr-10 appearance-none cursor-pointer ${className}`}
                        >
                            <option value="" disabled>
                                {placeholder || "Select an option"}
                            </option>
                            {options?.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400">
                            <FiChevronDown className="w-4 h-4" />
                        </div>
                    </div>

                    {errorMessage ? (
                        <p className="mt-1.5 text-xs text-red-500 font-medium animate-in fade-in">
                            {errorMessage}
                        </p>
                    ) : helperText ? (
                        <p className="mt-1 text-xs text-neutral-500">{helperText}</p>
                    ) : null}
                </div>
            );
        }

        // Render Password / Text / Email / etc.
        const inputType =
            type === "password" ? (showPassword ? "text" : "password") : type;

        return (
            <div className={`w-full ${containerClassName}`}>
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-[11px] sm:text-xs font-medium text-[#242528] mb-2"
                    >
                        {label}
                        {required && <span className="text-red-500 ml-1 font-semibold">*</span>}
                    </label>
                )}
                <div className="relative w-full">
                    <input
                        {...rest}
                        {...register}
                        ref={(node) => {
                            if (typeof ref === "function") {
                                ref(node);
                            } else if (ref) {
                                ref.current = node;
                            }
                            if (register?.ref) {
                                register.ref(node);
                            }
                        }}
                        id={inputId}
                        name={register?.name || name}
                        type={inputType}
                        disabled={disabled}
                        placeholder={placeholder}
                        className={`${baseInputStyles} ${errorInputStyles} ${disabledStyles} ${type === "password" ? "pr-10 tracking-wider" : ""
                            } ${className}`}
                    />

                    {type === "password" && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? "Hide password" : "Show password"}
                            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 focus:outline-none transition-colors cursor-pointer p-0.5"
                        >
                            {showPassword ? (
                                <FiEyeOff className="w-4 h-4" />
                            ) : (
                                <FiEye className="w-4 h-4" />
                            )}
                        </button>
                    )}
                </div>

                {errorMessage ? (
                    <p className="mt-1.5 text-xs text-red-500 font-medium animate-in fade-in">
                        {errorMessage}
                    </p>
                ) : helperText ? (
                    <p className="mt-1 text-xs text-neutral-500">{helperText}</p>
                ) : null}
            </div>
        );
    }
);

FormField.displayName = "FormField";

export default FormField;