import Input, { InputProps } from './Input';
import React, { useState, Children } from 'react';
import styled from 'styled-components';
import { ReactComponent as Layers } from '../assets/images/svg/layers.svg';
import { ReactComponent as Close } from '../assets/images/svg/close.svg';

export type ModalSelectProps = {
  addon?: React.ReactElement;
  value?: string | React.ReactElement;
  title?: string;
  children?: React.ReactNode;
  onChange?: (selectedData: unknown) => any;
  renderValue: (
    selectedData: unknown
  ) => string | JSX.Element | React.ReactNode;
};

const SelectContainer = styled.div`
  input {
    background-color: white !important;
    cursor: pointer;
  }

  .select-option:last-child {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(21, 26, 48, 0.4);
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  border-radius: 16px;
  background-color: white;
  width: 336px;

  .modal-title {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    padding: 24px 24px 16px 24px;
    border-bottom: 1px solid #c5cee0;
    text-align: center;
    position: relative;

    .close-btn {
      cursor: pointer;
      position: absolute;
      top: calc(50% + 6px);
      right: 24px;
      transform: translateY(-50%);
    }
  }

  .modal-body {
    min-height: 100px;
  }
`;

export const SelectOption = styled.div`
  cursor: pointer;
  &:hover {
    background-color: #edf1f7;
  }
`;

export default function ModalSelect({
  addon = <Layers />,
  value,
  title = '',
  children,
  onChange = () => {},
  renderValue,
  ...props
}: ModalSelectProps & Omit<InputProps, 'onChange'>) {
  const [show, setShow] = useState<boolean>(false);
  const [selected, setSelected] = useState<unknown>(null);

  const open = () => setShow(true);
  const close = () => setShow(false);

  return (
    <SelectContainer>
      <span onClick={open}>
        <Input
          {...props}
          placeholder={renderValue(selected)}
          disabled
          icon={addon}
          reverse
        />
      </span>

      {show && (
        <ModalBackdrop>
          <ModalContainer>
            <div className="modal-title">
              {title}
              <span className="close-btn" onClick={close}>
                <Close />
              </span>
            </div>
            <div className="modal-body">
              {Children.map(children, (child) =>
                React.cloneElement(child as any, {
                  onSelected: (data: unknown) => {
                    onChange(data);
                    setSelected(data);
                    close();
                  },
                })
              )}
            </div>
          </ModalContainer>
        </ModalBackdrop>
      )}
    </SelectContainer>
  );
}

function Option({
  children,
  data,
  onSelected = () => {},
  ...props
}: {
  data: unknown;
  onSelected?: (data: unknown) => any;
} & React.HTMLAttributes<HTMLDivElement>) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onSelected(data);
  };
  return (
    <SelectOption className="select-option" {...props} onClick={handleClick}>
      {children}
    </SelectOption>
  );
}

ModalSelect.Option = Option;
