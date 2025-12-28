import { LucideIcon } from "lucide-react";

export default function SectionHeader(
  {
    title,
    icon: Icon,
    description,
  }: {
    title: string;
    icon: LucideIcon;
    description?: string;
  }
) {
  return (
    <div className="flex items-start md:items-center gap-4 group">
      <Icon className="w-6 h-6 text-yellow-500 transition-transform duration-300 group-hover:scale-110" />
      <div>
        <h2 className="text-lg font-bold transition-colors duration-300 group-hover:text-yellow-600">
          {title}
        </h2>
        {description && (
          <p className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-700">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
