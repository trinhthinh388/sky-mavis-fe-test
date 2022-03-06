import styled from 'styled-components';
import { Form } from 'grommet';

export const Container = styled(Form)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 96px 20px;
  box-sizing: border-box;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > .logo {
    margin-bottom: 24px;
  }

  > .title {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    letter-spacing: 0px;
    text-align: center;
    margin-bottom: 8px;
  }

  > .sub-title {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
  }
`;

export const EyeIcon = styled.span`
  cursor: pointer;
  pointer-events: all;
`;
