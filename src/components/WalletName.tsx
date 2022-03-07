import { Box } from 'grommet';
import styled from 'styled-components';

export type WalletNameProps = {
  name?: string;
};

const Container = styled.div`
  display: inline;
  background: #f7f9fc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 19px;

  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0px;
  cursor: pointer;

  &:hover {
    background-color: #edf1f7;
  }
`;

const Indicator = styled(Box)`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background-color: #1273ea;
  margin-right: 12px;
`;

export default function WalletName({ name }: WalletNameProps) {
  return (
    <Container>
      <Indicator />
      {name}
    </Container>
  );
}
