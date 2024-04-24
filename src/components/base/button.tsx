'use client';

export default function Button({
  children,
  onCLick,
}: {
  children: React.ReactNode;
  onCLick?: () => void;
}) {
  return (
    <button
      className="btn btn-outline border-secondary text-secondary m-2 hover:bg-secondary hover:text-primary hover:border-primary"
      onClick={onCLick}
    >
      {children}
    </button>
  );
}
