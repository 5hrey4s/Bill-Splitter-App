import { FirstHalf } from "../FirstHalf/FirstHalf";
import { TotalBillSection } from "../TotalBillSection/TotalBillSection";
import { useReducer, useState } from "react";
import { State, Action } from "../../bill_model";
import "../../App.css";

const initialState: State = {
  bill: "",
  person: "",
  selected: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_VALUE":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SET_SELECTED":
      return {
        ...state,
        selected: action.value,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export function BillSplitter() {
  const [customIsInput, setCustomIsInput] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      className={`bg-white grid grid-cols-2 items-center justify-center gap-[69px] w-full max-w-[1226px] p-10 rounded-[30px] overflow-hidden 
      max-1100:gap-8 max-1100:p-8 
        max-700:flex max-700:flex-col max-700:p-8 
        max-550:gap-8 max-550:w-full max-550:p-8 justify-between`}
    >
      <FirstHalf
        state={state}
        dispatch={dispatch}
        customIsInput={customIsInput}
        setcustomIsInput={setCustomIsInput}
      />
      <TotalBillSection
        state={state}
        dispatch={dispatch}
        customIsInput={customIsInput}
        setcustomIsInput={setCustomIsInput}
      />
    </div>
  );
}
