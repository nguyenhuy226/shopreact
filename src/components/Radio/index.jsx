import { useDidUpdateEffect } from "@/hooks/useDidUpdateEffect";
import { cn } from "@/utils";
import { createContext, useContext, useState } from "react";

const Context = createContext({});

export const Radio = ({ children, ...props }) => {
  const { value, onChange } = useContext(Context);

  return (
    <div
      className="custom-control custom-radio mb-3"
      onClick={() => {
        onChange(props.value);
      }}
    >
      <input
        checked={props.value == value}
        className="custom-control-input"
        type="radio"
        readOnly
      />
      <label
        className="custom-control-label flex items-center"
        htmlFor="seasonOne"
      >
        {children}
      </label>
    </div>
  );
};

Radio.Toggle = ({ children, ...props }) => {
  const { value, onChange } = useContext(Context);
  return (
    <label
      className={cn("btn btn-sm btn-outline-border", {
        active: props.value == value,
      })}
      onClick={() => {
        onChange(props.value);
      }}
    >
      <input
        type="radio"
        name="gender"
        checked={props.value == value}
        readOnly
      />{" "}
      {children}
    </label>
  );
};

Radio.Group = ({
  children,
  value: valueProps,
  defaultValue,
  toggle,
  ...props
}) => {
  const [value, setValue] = useState(valueProps || defaultValue);

  useDidUpdateEffect(() => {
    setValue(valueProps);
  }, [valueProps]);

  const onChange = (_value) => {
    if (toggle && _value == value) {
      setValue();
      props?.onChange?.();
      return;
    }
    setValue(_value);
    props?.onChange?.(_value);
  };
  return (
    <Context.Provider value={{ value, onChange }}>{children}</Context.Provider>
  );
};
