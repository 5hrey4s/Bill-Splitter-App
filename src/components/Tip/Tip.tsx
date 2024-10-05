import React, { useCallback } from "react";
import { Action, State } from "../../bill_model";
import "../../App.css";


interface TipProps {
  state: State;
  dispatch: React.Dispatch<Action>;
  value: number | string;
  onClick: () => void;
  isSelected: boolean;
  customIsInput: boolean;
  setcustomIsInput: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Tip = (
  ({ state, dispatch, value, onClick, isSelected, customIsInput, setcustomIsInput }: TipProps) => {

    const handleClick = useCallback(() => {
      onClick();
    }, [onClick]);

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!state.selected) {
          setcustomIsInput(false);
        }
        if (e.target.value !== state.selected) {
          dispatch({ type: "SET_SELECTED", value: e.target.value });
        }
      },
      [state.selected, dispatch, setcustomIsInput]
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.target.value) {
          setcustomIsInput(false);
        }
        if (e.target.value !== state.selected) {
          dispatch({ type: "SET_SELECTED", value: e.target.value });
        }
      },
      [state.selected, dispatch, setcustomIsInput]
    );

    return (
      <>
        {value === "Custom" && customIsInput ? (
          <input
            type="number"
            className="no-arrows bg-input-bg-color tracking-[0.1em] text-custominput-text-color font-space-mono font-bold text-2xl leading-none text-right rounded-6px border-none w-full h-full px-[10px] outline-none max-550:text-[1.5rem]"
            value={state.selected}
            onChange={handleInputChange}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <button
          className={`${
            value === "Custom"
              ? "bg-input-bg-color text-custombtn-text-color rounded-[6px] tracking-[0.1em] font-bold text-[1.5rem] max-1100:text-[1.3rem]"
              : `rounded-[6px] ${isSelected ? "bg-selected-bg-color text-selected-text-color" : "bg-tipbtn-bg-color text-tipbtn-text-color"} tracking-[0.1em] font-bold text-[2rem] max-1100:text-[1.75rem]`
          } min-w-[86.2px] font-space-mono leading-[1.84] text-center border-none w-full hover:bg-tipbtn-hover-bg-color hover:text-tipbtn-hover-text-color max-550:text-[1.5rem] max-550-rounded-[4px]`}
          
            onClick={handleClick}
          >
            {value === "Custom" ? "Custom" : `${value}%`}
          </button>
        )}
      </>
    );
  }
);
