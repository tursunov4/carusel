import {ReactNode} from "react";

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#171717] dark:text-white mb-6">{title}</h2>
      {children}
    </section>
  );
}