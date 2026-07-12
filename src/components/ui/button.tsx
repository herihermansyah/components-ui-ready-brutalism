import {cn} from "@/lib/utils";
import React, {forwardRef} from "react";
import {cva, VariantProps} from "class-variance-authority";

const buttonVariants = cva(
  "font-medium transition-all duration-300 ease-in-out flex items-center gap-3 cursor-pointer disabled:cursor-not-allowed active:scale-98 disabled:active:scale-100",
  {
    variants: {
      variant: {
        fill: "",
        outline: "ring-2",
        ghost: "",
      },
      color: {
        primary: "",
        secondary: "",
        tertiary: "",
      },
      size: {
        small: "text-[14px] rounded-sm px-4 py-2",
        large: "text-[16px] rounded-md px-5 py-2.5",
      },
    },
    compoundVariants: [
      // style variant primary
      {
        variant: "fill",
        color: "primary",
        className:
          "bg-tangerine-900 hover:bg-tangerine-800 text-linen-900 shadow-drop-denim  disabled:bg-tangerine-500",
      },
      {
        variant: "outline",
        color: "primary",
        className:
          "ring-tangerine-900 shadow-drop-denim bg-linen-900 text-denim-900 hover:text-denim-700 hover:ring-tangerine-800 hover:bg-linen-800 disabled:ring-tangerine-500 disabled:bg-linen-700 disabled:text-denim-500",
      },
      {
        variant: "ghost",
        color: "primary",
        className:
          "shadow-drop-tangerine text-denim-900 hover:shadow-drop-denim hover:text-denim-500 disabled:text-denim-500 disabled:shadow-drop-denim",
      },
      //   style variant secondary
      {
        variant: "fill",
        color: "secondary",
        className:
          "bg-denim-900 hover:bg-denim-800 text-linen-900 shadow-drop-tangerine  disabled:bg-denim-500",
      },
      {
        variant: "outline",
        color: "secondary",
        className:
          "ring-denim-900 shadow-drop-tangerine bg-linen-900 text-denim-900 hover:text-denim-700 hover:ring-denim-800 hover:bg-linen-800 disabled:ring-denim-500 disabled:bg-linen-700 disabled:text-denim-500",
      },
      {
        variant: "ghost",
        color: "secondary",
        className:
          "shadow-drop-tangerine text-denim-900 hover:shadow-drop-tangerine hover:text-denim-500 disabled:text-denim-500 disabled:shadow-drop-tangerine",
      },
      //   style variant tertiary
      {
        variant: "fill",
        color: "tertiary",
        className:
          "bg-teal-900 hover:bg-teal-800 text-linen-900 shadow-drop-linen  disabled:bg-teal-500",
      },
      {
        variant: "outline",
        color: "tertiary",
        className:
          "ring-teal-900 shadow-drop-linen bg-linen-100 text-teal-900 hover:text-teal-700 hover:ring-teal-800 hover:bg-linen-800 disabled:ring-teal-500 disabled:bg-linen-700 disabled:text-teal-500",
      },
      {
        variant: "ghost",
        color: "tertiary",
        className:
          "shadow-drop-linen text-teal-900 hover:shadow-drop-denim hover:text-teal-500 disabled:text-teal-500 disabled:shadow-drop-linen",
      },
    ],
    defaultVariants: {
      variant: "fill",
      size: "small",
      color: "primary",
    },
  },
);

// if you want change variant, size, color default : change in buttonVariants defaultVariants
// you can change color with your custom color in global css file adn rename all color variants

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {children, className, iconLeft, iconRight, variant, size, color, ...props},
    ref,
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(buttonVariants({variant, size, color}), className)}
      >
        <span>{iconLeft}</span>
        <span>{children}</span>
        <span>{iconRight}</span>
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
