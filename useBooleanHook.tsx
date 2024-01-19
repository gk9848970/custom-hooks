import { Dispatch, SetStateAction, useState } from "react";

type UseBooleanOutput = {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setFalse: () => void;
  setTrue: () => void;
  toggle: () => void;
};

function useBoolean(defaultValue?: boolean): UseBooleanOutput {
  const [value, setValue] = useState(Boolean(defaultValue));

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue(!value);

  return { value, setValue, setTrue, setFalse, toggle };
}

export default function Component() {
  const { value, setValue, setTrue, setFalse, toggle } = useBoolean();

  return (
    <>
      <p>
        Value is <code>{value.toString()}</code>
      </p>
      <button onClick={setTrue}>set true</button>
      <button onClick={setFalse}>set false</button>
      <button onClick={toggle}>toggle</button>
    </>
  );
}
