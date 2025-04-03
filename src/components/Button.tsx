export default function Button({
  children,
  disabled,
  className,
  onClick,
}: {
  children: React.ReactNode;
  disabled: boolean;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`bg-[#141414] text-[#fff] rounded-[18px] font-[600] text-[16px] py-[8px] px-[16px] ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
