import "../../App.css";
import { useCallback, useEffect, useState } from "react";
import { Action, State } from "../../bill_model";

interface ResetButtonProps {
  state: State;
  dispatch: React.Dispatch<Action>;
  value: string;
  customIsInput: boolean;
  setcustomIsInput: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ResetButton({
  value,
  state,
  dispatch,
  customIsInput,
  setcustomIsInput,
}: ResetButtonProps) {
  const [resetIsActive, setResetIsActive] = useState(false);

  const handleOnClick = useCallback(() => {
    dispatch({ type: "RESET" });
    setcustomIsInput(false);
  }, [dispatch, setcustomIsInput]);
  
  useEffect(() => {
    if (state.selected || state.bill || state.person) {
      setResetIsActive(true);
    } else {
      setResetIsActive(false);
    }
  }, [state.selected, state.bill, state.person, dispatch]);

  return (
    <button
      className={`flex items-center justify-center w-full font-space-mono rounded-[7px] border-none
  ${resetIsActive ? "bg-active-resetbtn-bg-color" : "bg-inactive-resetbtn-bg-color"}`}
      disabled={!resetIsActive}
      onClick={handleOnClick}
    >
      <div
        className={`py-[13px]  text-center font-bold text-1.5rem leading-normal tracking-normal text-resetbtn-text-color
    max-550:text-1.25rem max-1100:text-1.38rem`}
      >
        {value}
      </div>
    </button>
  );
}
