export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden w-64 border-r border-aero-silver bg-white lg:block">
        <div className="p-6">
          <p className="text-sm font-medium text-slate">Client Portal</p>
          <p className="mt-1 text-xs text-slate-light">Coming in Phase 3</p>
        </div>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
