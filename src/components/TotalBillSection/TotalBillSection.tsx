import React, { useMemo } from "react";
import { TipAndTotalInput } from "../TipAndTotalInput/TipAndTotalInput";
import { ResetButton } from "../ResetButton/ResetButton";
import { Action, State } from "../../bill_model";

interface TotalBillSectionProps {
  state: State;
  dispatch: React.Dispatch<Action>;
  customIsInput: boolean;
  setcustomIsInput: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TotalBillSection({
  state,
  dispatch,
  customIsInput,
  setcustomIsInput,
}: TotalBillSectionProps) {
  const billAmount = Number(state.bill);
  const noOfPeople = Number(state.person);
  const selectedTip = Number(state.selected);

  // Memoize the tip and total calculations
  const tipAmount = useMemo(() => {
    if (!billAmount || !noOfPeople || !selectedTip) return 0;
    return (selectedTip / 100) * billAmount / noOfPeople;
  }, [billAmount, noOfPeople, selectedTip]);

  const totalAmountPerPerson = useMemo(() => {
    if (!billAmount || !noOfPeople) return 0;
    return (billAmount + (selectedTip / 100) * billAmount) / noOfPeople;
  }, [billAmount, noOfPeople, selectedTip]);

  return (
    <div className="min-w-[305px] bg-[#00474b] rounded-[16px] flex flex-col justify-between w-full p-[59.29px] max-1100:p-[35px] max-700:p-[26px] h-full">
      <div className="flex flex-col justify-between gap-[64px] w-full max-700:gap-[27px]">
        <TipAndTotalInput
          label="Tip Amount"
          value={isNaN(tipAmount) || !isFinite(tipAmount) ? "0.00" : tipAmount.toFixed(2)}
        />
        <TipAndTotalInput
          label="Total"
          value={
            isNaN(totalAmountPerPerson) || !isFinite(totalAmountPerPerson)
              ? "0.00"
              : totalAmountPerPerson.toFixed(2)
          }
        />
      </div>
      <div className="mt-auto">
        <ResetButton
          state={state}
          dispatch={dispatch}
          value="RESET"
          customIsInput={customIsInput}
          setcustomIsInput={setcustomIsInput}
        />
      </div>
    </div>
  );
}
