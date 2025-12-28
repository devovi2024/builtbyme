import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export default function StateCard(
  {
    icon: Icon,
    value,
    label,
    hasBorder,
  }: {
    icon: LucideIcon;
    value: string;
    label: string;
    hasBorder?: boolean;
  }
) {
  return (
    <div
      className={cn(
        "group space-y-2 px-4 py-4 transition-all duration-300 ease-in-out",
        "hover:bg-muted/40 rounded-xl shadow-sm hover:shadow-md cursor-pointer",
        hasBorder && "border-x border-border/50"
      )}
    >
      <div className="flex items-center justify-center gap-3">
        <Icon className="size-6 text-primary/80 transition-transform duration-300 group-hover:scale-110" />

        <p className="text-3xl sm:text-4xl font-extrabold tracking-tight transition-colors group-hover:text-primary">
          {value}
        </p>
      </div>

      <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground/80">
        {label}
      </p>
    </div>
  );
}
