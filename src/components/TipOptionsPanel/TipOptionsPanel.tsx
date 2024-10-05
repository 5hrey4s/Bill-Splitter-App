import React, { useCallback } from "react";
import { Tip } from "../Tip/Tip";
import { Action, State } from "../../bill_model";

interface TipOptionsPanelProps {
  chooseTipText: string;
  state: State;
  dispatch: React.Dispatch<Action>;
  customIsInput: boolean;
  setcustomIsInput: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TipOptionsPanel({
  chooseTipText,
  state,
  dispatch,
  customIsInput,
  setcustomIsInput,
}: TipOptionsPanelProps) {

  const tipValues = [5, 10, 15, 25, 50, "Custom"];

  const handleTipSelection = useCallback((value: number | string) => {
    if (value === "Custom") {
      dispatch({ type: "SET_SELECTED", value: "Custom" });
      setcustomIsInput(true);
    } else {
      setcustomIsInput(false);
      const selectedValue = state.selected;
      dispatch({
        type: "SET_SELECTED",
        value: selectedValue === JSON.stringify(value) ? "" : JSON.stringify(value),
      });
    }
  }, [dispatch, setcustomIsInput, state.selected]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const selectedValue = state.selected;
      if (!selectedValue) return;

      let index = tipValues.findIndex((tip) => JSON.stringify(tip) === selectedValue);
      if (index === -1) return;

      if (e.key === "ArrowRight") {
        index = (index + 1) % tipValues.length;
      } else if (e.key === "ArrowLeft") {
        index = (index - 1 + tipValues.length) % tipValues.length;
      }

      handleTipSelection(tipValues[index]);
    },
    [state.selected, handleTipSelection]
  );

  return (
    <div className="bg-white w-full" tabIndex={0} onKeyDown={handleKeyDown}>
      <div className="font-inherit font-bold text-[1.25rem] leading-[1.5] tracking-[0.1em] text-label-color mb-[24px] w-full max-1100:text-[1rem] max-550:text-[0.875rem] max-550:mb-[16px]">
        {chooseTipText}
      </div>
      <div className="grid grid-cols-3 gap-[24px] w-full max-1100:gap-[10px] max-550:gap-[16px] max-550:grid-cols-2">
        {tipValues.map((value) => (
          <Tip
            key={value}
            state={state}
            dispatch={dispatch}
            value={value}
            onClick={() => handleTipSelection(value)}
            isSelected={state.selected === JSON.stringify(value)}
            customIsInput={customIsInput}
            setcustomIsInput={setcustomIsInput}
          />
        ))}
      </div>
    </div>
  );
}
