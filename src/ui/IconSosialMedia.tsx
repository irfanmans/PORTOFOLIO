import { ReactNode } from "react";

interface IconSosialMediaProps {
  children: ReactNode;
  className: string;
}

export default function IconSosialMedia({
  children,
  className,
}: IconSosialMediaProps) {
  return <div className={className}>{children}</div>;
}
