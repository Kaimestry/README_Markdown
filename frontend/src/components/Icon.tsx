import type { LucideIcon, LucideProps } from "lucide-react";

type IconProps = LucideProps & {
  icon: LucideIcon;
};

export default function Icon({
  icon: IconComponent,
  size = 18,
  strokeWidth = 2,
  ...props
}: IconProps) {
  return <IconComponent size={size} strokeWidth={strokeWidth} {...props} />;
}
