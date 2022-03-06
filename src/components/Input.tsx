import { TextInput, TextInputProps, Text } from 'grommet';
import styled from 'styled-components';

export type InputProps = {
  leftLabel?: string | React.ReactElement;
  rightLabel?: string | React.ReactElement;
};

const InputContainer = styled.div``;

const Label = styled(Text)`
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0px;
  margin-bottom: 4px;

  &.left {
    padding-left: 10px;
  }

  &.right {
    padding-right: 10px;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Login({
  leftLabel,
  rightLabel,
  ...props
}: InputProps & TextInputProps) {
  return (
    <InputContainer>
      {(!!leftLabel || !!rightLabel) && (
        <LabelContainer>
          {typeof leftLabel === 'string' ? (
            <Label className="left" color="secondary">
              {leftLabel}
            </Label>
          ) : (
            leftLabel
          )}
          {typeof rightLabel === 'string' ? (
            <Label className="right">{rightLabel}</Label>
          ) : (
            rightLabel
          )}
        </LabelContainer>
      )}
      <TextInput color="primary" {...props} />
    </InputContainer>
  );
}
