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
      type="button"
      onClick={() => {
        console.log("BUTTON CLICKED");
        onClick?.();
      }}
      className={`
        p-2 rounded-sm hover:bg-background
        ${active ? "border-b border-[#F78166]" : "border-transparent"}
      `}
    >
      {children}
    </button>
  );
}
