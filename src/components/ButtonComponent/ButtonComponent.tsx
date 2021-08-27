import React, { FunctionComponent, MouseEvent, PropsWithChildren } from 'react';
import { SButton } from './ButtonComponent.styles';

type ButtonComponentProps = {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const ButtonComponent: FunctionComponent<
  PropsWithChildren<ButtonComponentProps>
> = ({ onClick, disabled, children }) => {
  return (
    <SButton type="button" onClick={onClick} disabled={disabled}>
      {children}
    </SButton>
  );
};

export default ButtonComponent;
