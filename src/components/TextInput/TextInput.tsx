import React, {
  FunctionComponent,
  PropsWithChildren,
  ChangeEvent,
} from 'react';
import { SInput, SDescription, SLabel } from './TextInout.styles';

export type TextInputProps = {
  inputId: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  value: string | number;
  placeholder?: string;
  description?: string;
};

const TextInput: FunctionComponent<PropsWithChildren<TextInputProps>> = ({
  inputId,
  onChange,
  label,
  value,
  placeholder,
  description = '',
}) => {
  return (
    <SLabel htmlFor={inputId}>
      <p>{label}</p>
      <SDescription dangerouslySetInnerHTML={{ __html: description }} />
      <SInput
        aria-label={`${label} input`}
        name={label}
        id={inputId}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </SLabel>
  );
};

export default TextInput;
