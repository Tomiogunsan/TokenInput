import { useEffect, useRef, useState } from "react";



export interface IInputProps {
  name?: string;
  length: number;
  id?: string;
  className?: string;
  onSubmit?: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}


const InputToken = (props: IInputProps) => {
  const { name, onKeyDown, length, id, className } = props;
  const [value, setValue] = useState(Array(length).fill(undefined));

  const tokenInputRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const newValue = Array(length).fill("");
    value.forEach((v, i) => {
      newValue[i] = v;
    });
    setValue(newValue);
  }, [length]);
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

  const onSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onKeyDown?.(e);
    props?.onSubmit?.(value.join(""));
  };

 

  return (
    // @ts-expect-error  token input container name attribute
   <div ref={tokenInputRef} name={name} tabIndex={-1} className='tokenInputContainer'>
      {Array.from({ length: length }).map((_digit, idx) => (
        <input
          onChange={(e) => {
            const newValue = [...value];
            newValue[idx] = e.target.value;

            setValue(newValue);

            onInputChange(e.target.value, idx);
          }}
          value={value[idx]}
          onKeyDown={onSubmit}
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
