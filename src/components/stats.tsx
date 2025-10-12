// 1) Install if needed:  npm i lucide-react

// 3) Put this helper component in the same file (or extract to components/StatCard.tsx)
export function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      {/* subtle gradient ring on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 blur transition-opacity group-hover:opacity-100"
           style={{ background: "linear-gradient(135deg, rgba(59,130,246,.08), rgba(56,189,248,.08))" }} />
      <div className="relative flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg ring-1 ring-gray-200 bg-gradient-to-br from-blue-50 to-cyan-50">
          {icon}
        </div>
        <div>
          <p className="text-3xl font-bold leading-none tracking-tight">{value}</p>
          <p className="mt-1 text-sm text-gray-600">{label}</p>
        </div>
      </div>
    </div>
  );
}
