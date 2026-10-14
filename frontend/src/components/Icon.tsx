import type { LucideIcon, LucideProps } from "lucide-react";

type IconProps = LucideProps & {
  icon: LucideIcon;
};

export default function Icon({
  icon: IconComponent,
  size = 20,
  strokeWidth = 2,
  className = "text-subtext",
  ...props
}: IconProps) {
  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
}
