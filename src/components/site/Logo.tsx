import logo from "@/assets/tevexxo-logo.png";
import { cn } from "@/lib/utils";

export function LogoMark({ size = 36, className }: { size?: number; className?: string }) {
  return (
    <span
      className={cn(
        "relative inline-grid place-items-center rounded-full ring-1 ring-primary/50 shadow-[0_0_18px_-2px_var(--primary)]",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-md opacity-60"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
      />
      <img
        src={logo}
        alt="Tevexxo logo"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="rounded-full object-cover"
      />
    </span>
  );
}
