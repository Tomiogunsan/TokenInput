import React from "react";
import "tslib";
export interface IInputProps {
    name?: string;
    length: number;
    id?: string;
    className?: string;
    onChange?: (value: string) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
declare const InputToken: (props: IInputProps) => React.JSX.Element;
export default InputToken;
