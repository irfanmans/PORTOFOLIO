import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl backdrop-blur-sm bg-black/20 p-5">
      {children}
    </div>
  );
}
