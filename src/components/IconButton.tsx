import { Button, ButtonProps } from 'grommet';
import styled from 'styled-components';

export type IconButtonProps = {
  label?: string;
};

const StyledButton = styled(Button)`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  background-color: #f7f9fc;
  &:hover {
    background-color: #edf1f7;
  }
`;

const IconBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > span {
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
  }
`;

export default function IconButton({
  label,
  ...props
}: IconButtonProps & Omit<ButtonProps, 'label'>) {
  return (
    <IconBtnContainer>
      <StyledButton {...props} />
      {label && <span>{label}</span>}
    </IconBtnContainer>
  );
}
