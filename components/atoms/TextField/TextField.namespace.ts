export interface TextFieldProperties {
  placeholder?: string;
  className?: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
