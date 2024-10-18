import "../../App.css";
import { BillSplitter } from "../BillSplitter/BillSplitter";


export function FinalForm() {
  return (
    <div
      className={`
        w-full h-full p-8 bg-[#c5e4e7] flex flex-col 
        justify-between items-center gap-8 
        font-['Space_Mono'] text-[1.5rem] leading-[1.5] 
        font-bold tracking-[0.8rem] text-[#00474b] 
        max-700:p-8 max-550:p-0 max-550:min-w-[360px]
      `}
    >
      <div className="text-center py-[8rem] pt-0 max-700:pt-[40px]">
        <div>SPLI</div>
        <div>TTER</div>
      </div>
      <BillSplitter />
    </div>
  );
}
