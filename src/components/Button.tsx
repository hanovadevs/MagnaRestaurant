import type { ButtonHTMLAttributes } from "react";
type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "outline" | "ghost"; size?: "sm" | "md" | "lg" };
export default function Button({ variant = "primary", size = "md", className = "", children, ...props }: Props) {
  return <button className={`button button--${variant} button--${size} ${className}`} {...props}>{children}</button>;
}
