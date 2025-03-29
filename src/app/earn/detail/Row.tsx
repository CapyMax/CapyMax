export default function Row({
  label,
  value,
  labelSuffix,
  valueColor = "#141414",
  className = "",
}: {
  label: string;
  value: string;
  labelSuffix?: string;
  valueColor?: string;
  className: string;
}) {
  return (
    <div className={`flex justify-between items-center ${className}`}>
      <div className="text-[#798186] text-[14px]">
        {label}
        {labelSuffix && (
          <span className="text-[#AAB8C1] ml-1">{labelSuffix}</span>
        )}
      </div>
      <div
        className={`text-[14px] font-[700] ${
          valueColor === "#765BFF" ? "text-[#765BFF]" : `text-[${valueColor}]`
        }`}
      >
        {value}
      </div>
    </div>
  );
}
