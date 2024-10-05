import { useCallback, useState } from "react";
import "../../App.css";
import { NumberInput } from "../NumberInput/NumberInput";
import { TipOptionsPanel } from "../TipOptionsPanel/TipOptionsPanel";
import { Action, State } from "../../bill_model";

export interface FirstHalfProps {
  state: State;
  dispatch: React.Dispatch<Action>;
  customIsInput: boolean;
  setcustomIsInput: React.Dispatch<React.SetStateAction<boolean>>;
}

export function FirstHalf({
  state,
  dispatch,
  customIsInput,
  setcustomIsInput,
}: FirstHalfProps) {
  const [errors, setErrors] = useState({ bill: "", person: "" });

  const validateNumber = useCallback((value: string): string => {
    if (parseInt(value) < 0) return "The value is negative";
    return "";
  }, []);

  const handleInputChange = useCallback(
    (field: "bill" | "person") => (value: string) => {
      dispatch({ type: "SET_VALUE", field, value });
      const error = validateNumber(value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: error,
      }));
    },
    [dispatch, validateNumber]
  );

  return (
    <div
      className={`
        bg-white flex flex-col items-center justify-between gap-[56px] w-full
        max-550:gap-[32px] max-550:w-full
      `}
    >
      <NumberInput
        label="Bill"
        typeOfIcon="dollar"
        value={state.bill.toString()}
        onChange={handleInputChange("bill")}
        errorMsg={errors.bill}
      />
      <TipOptionsPanel
        chooseTipText="Select Tip %"
        state={state}
        dispatch={dispatch}
        customIsInput={customIsInput}
        setcustomIsInput={setcustomIsInput}
      />
      <NumberInput
        label="Number of people"
        typeOfIcon="person"
        value={state.person.toString()}
        onChange={handleInputChange("person")}
        errorMsg={errors.person}
      />
    </div>
  );
}

