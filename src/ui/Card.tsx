import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="rounded-2xl backdrop-blur-sm bg-black/10 p-3">
      {children}
    </div>
  );
}
