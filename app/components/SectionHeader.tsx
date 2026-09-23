export default function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-mono text-indigo-500 bg-indigo-50 px-2 py-1 rounded">
          {number}
        </span>
        <div className="h-px flex-1 bg-slate-200 max-w-[60px]" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
      {subtitle && <p className="text-slate-500 mt-2">{subtitle}</p>}
    </div>
  );
}