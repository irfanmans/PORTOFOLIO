import { ReactNode } from "react";

interface StackGroupProps {
  children: ReactNode;
}

export default function StackGroup({ children }: StackGroupProps) {
  return (
    <>
      <div className="py-2 px-4 border text-center border-neutral-200 rounded-2xl">
        <p className="text-gray-600">{children}</p>
      </div>
    </>
  );
}
