export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="badge badge-outline font-light text-xs">{children}</span>
  );
}
