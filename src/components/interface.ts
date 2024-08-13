export interface IInputProps {
  name?: string;
  length: number;
  id?: string;
  className?: string;
  onSubmit?: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}