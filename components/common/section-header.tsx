import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  icon: LucideIcon; 
  description?: string;
}

export default function SectionHeader({ title, icon: Icon, description }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <Icon className="w-6 h-6 text-yellow-500" /> 
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    </div>
  );
}
