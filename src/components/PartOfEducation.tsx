import { ReactNode } from "react";

interface PartOfEducationProps {
  children: ReactNode;
}

export default function PartOfEducation({ children }: PartOfEducationProps) {
  return (
    <>
      <div className="relative mb-5">{children}</div>
    </>
  );
}
