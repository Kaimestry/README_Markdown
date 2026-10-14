type ToolbarButtonProps = {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
};

export default function ToolbarButton({
  children,
  active = false,
  onClick,
}: ToolbarButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        p-2 rounded-sm  hover:bg-background
        ${active ? "border-b border-[#F78166]" : "border-transparent"}
      `}
    >
      {children}
    </button>
  );
}
