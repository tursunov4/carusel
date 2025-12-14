import {ReactNode} from "react";

export function ContentBlock({ children }: { children: ReactNode }) {
  return <div className="space-y-4 text-base text-[#171717] dark:text-neutral-200 leading-relaxed">{children}</div>;
}
