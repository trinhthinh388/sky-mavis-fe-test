import { Button } from 'grommet';
import WalletName from './WalletName';
import styled from 'styled-components';
import { ReactComponent as PersonFill } from '../assets/images/svg/person-fill.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Menu = styled(Button)`
  padding: 4px;
  border-radius: 8px;
  background-color: #f7f9fc;
  &:hover {
    background-color: #edf1f7;
  }
`;

export default function Header() {
  return (
    <Container>
      <WalletName name="Ronin Wallet" />

      <Menu icon={<PersonFill />} />
    </Container>
  );
}
