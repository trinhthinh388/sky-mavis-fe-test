import { useState, useContext } from 'react';
import { Heading, Button, FormField, ResponsiveContext } from 'grommet';
import { ReactComponent as Logo } from '../../assets/images/svg/logo.svg';
import Input from '../../components/Input';
import { FormView, FormViewHide } from 'grommet-icons';
import { Container, LogoSection, EyeIcon } from './Login.styles';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const breakpoint = useContext(ResponsiveContext);
  const [showPw, setShowPw] = useState<boolean>(false);

  const toggleShow = () => setShowPw((prev) => !prev);

  return (
    <Container onSubmit={() => navigate('/home')}>
      <FormField>
        <LogoSection>
          <Logo className="logo" />
          <Heading className="title">Ronin wallet</Heading>
          <Heading as="h3" className="sub-title">
            Your Digital Passport
          </Heading>
        </LogoSection>
      </FormField>

      <FormField className={breakpoint === 'small' ? 'fluid' : ''}>
        <Input
          leftLabel="Enter password"
          type={showPw ? 'text' : 'password'}
          reverse
          icon={
            <EyeIcon onClick={toggleShow}>
              {showPw ? <FormView /> : <FormViewHide />}
            </EyeIcon>
          }
        />
      </FormField>

      <Button type="submit" primary label="Unlock" />
    </Container>
  );
}
