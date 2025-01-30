import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: VoidFunction;
}

export default function Button({
  className,
  children,
  type,
  onClick,
}: ButtonProps) {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
