// frontend/components/auth-card.tsx
import { Card } from "./ui";

export default function AuthCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-[70vh] bg-gradient-to-b from-white to-orange-50">
      <div className="pt-12">
        <Card>
          <h1 className="mb-4 text-center text-2xl font-semibold">{title}</h1>
          {children}
        </Card>
      </div>
    </div>
  );
}
