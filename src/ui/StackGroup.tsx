import { ReactNode } from "react";

interface StackGroupProps {
  children: ReactNode;
}

export default function StackGroup({ children }: StackGroupProps) {
  return (
    <>
      <div className="py-2 px-5 backdrop-blur-sm bg-black/30 rounded-2xl">
        <p className="text-white/75">{children}</p>
      </div>
    </>
  );
}
