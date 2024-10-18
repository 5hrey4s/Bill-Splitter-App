
interface TipAndTotalInputProps {
  value: string;
  label: string;
}

export function TipAndTotalInput(props: TipAndTotalInputProps) {
  return (
    <div className="w-full flex justify-between font-inherit bg-inherit max-550:mb-[24px]">
      <div className="flex flex-col gap-[2px] text-[1.25rem] font-normal leading-normal min-w-[114.8px] max-1100:text-[1rem] max-550:text-[0.765rem] tracking-[0.1em]">
        <span className="text-[#FEFFFF] mb-[1px]">{props.label}</span>
        <span className="text-[#9FB3B2] mt-[1px]">/ person</span>
      </div>
      <div className="font-bold text-[3rem] leading-normal text-[#2CC0AD] max-1100:text-[2.4rem] max-550:text-[1.83rem] tracking-[0.1em]">
        ${props.value}
      </div>
    </div>
  );
}
