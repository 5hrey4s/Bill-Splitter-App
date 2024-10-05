import React, { useId, useCallback, useMemo } from "react";
import dollar from "../../assets/dollar.svg";
import person from "../../assets/person.svg";
import "../../App.css";

interface NumberInputProps  {
  value?: string;
  label: string;
  typeOfIcon: "dollar" | "person";
  onChange: (value: string) => void;
  errorMsg: string;
}

export function NumberInput({
  value = "",
  label,
  typeOfIcon,
  onChange,
  errorMsg,
}: NumberInputProps) {
  const id = useId();

  // Memoize the icon to prevent recalculating on every render
  const icon = useMemo(() => (typeOfIcon === "dollar" ? dollar : person), [typeOfIcon]);

  // Use callback for onChange to avoid recreating it on every render
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  }, [onChange]);

  // Handle Enter key to blur input
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.currentTarget.blur();
    }
  }, []);

  return (
    <div className="w-full bg-white font-[Space_Mono]">
      <label
        htmlFor={id}
        className={`block text-[1.25rem] font-bold leading-normal tracking-widest text-label-color
        max-550:text-[0.875rem] max-1100:text-[1rem]`}
      >
        {label}
      </label>
      <div
        className={`flex justify-center w-full mt-3 rounded-[6px] bg-[#f3f8fb] focus-within:outline-[var(--input-focus-outline)] 
        ${errorMsg ? "outline-2 outline-[#B57B6D]" : ""} 
        max-550:mt-2`}
      >
        <img src={icon} alt={`${typeOfIcon} icon`} className="py-[8px] px-[20px]" />
        <input
          type="number"
          id={id}
          value={value}
          className="no-arrows w-full py-[8px] px-[20px] text-right text-[2rem] font-bold leading-normal bg-inherit outline-none text-number-input-color
          max-550:text-[1.5rem] max-1100:text-[1.75rem] placeholder-[#9fb3b2] rounded-[6px] tracking-widest"
          placeholder="0"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div
        className={`mt-3 text-[var(--error-color)] text-[1.25rem] font-bold leading-6 tracking-[0.1em] 
      min-h-[30px] max-550:text-[0.875rem] max-550:min-h-[21px]`}
      >
        {errorMsg}
      </div>
    </div>
  );
}
