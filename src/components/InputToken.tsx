import React, { useEffect, useRef, useState } from "react";
import "tslib";

export interface IInputProps {
  name?: string;
  length: number;
  id?: string;
  className?: string;
  onChange?: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputToken = (props: IInputProps) => {
  const { name, onKeyDown, length, id, className, onChange } = props;
  const [value, setValue] = useState(Array(length).fill(undefined));

  const tokenInputRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const newValue = Array(length).fill("");
    value.forEach((v, i) => {
      newValue[i] = v;
    });
    setValue(newValue);
  }, [length]);

  useEffect(() => {
    onChange?.(value.join(""));
  }, [value]);

  const onInputChange = (value: string, index: number) => {
    if (value) {
      if (index < length - 1) {
        (
          tokenInputRef.current?.children[index + 1] as HTMLInputElement
        )?.focus();
      }
    } else {
      if (index > 0) {
        (
          tokenInputRef.current?.children[index - 1] as HTMLInputElement
        )?.focus();
      }
    }
  };

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyDown) onKeyDown(event);
    
  };

  return (
    <div
      ref={tokenInputRef}
      // @ts-expect-error  token input container name attribute
      name={name}
      tabIndex={-1}
      className="tokenInputContainer"
    >
      {Array.from({ length: length }).map((_digit, idx) => (
        <input
          onChange={(e) => {
            // @ts-expect-error  token input container name attribute
            const newValue = [...value];
            newValue[idx] = e.target.value;

            setValue(newValue);

            onInputChange(e.target.value, idx);
          }}
          value={value[idx]}
          onKeyDown={onInputKeyDown}
          maxLength={1}
          name={name && `${name}[${idx}]`}
          id={id}
          className={className}
        />
      ))}
    </div>
  );
};

export default InputToken;
