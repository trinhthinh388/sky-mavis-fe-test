import { useState, useContext, useEffect } from 'react';
import {
  Heading,
  Button,
  FormField,
  ResponsiveContext,
  Spinner,
} from 'grommet';
import { ReactComponent as Logo } from '../../assets/images/svg/logo.svg';
import Input from '../../components/Input';
import { FormView, FormViewHide } from 'grommet-icons';
import { Container, LogoSection, EyeIcon } from './Login.styles';
import { useNavigate } from 'react-router-dom';

// Actions
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions/auth';
import { RootState } from '../../redux/store';
import { AuthState } from '../../redux/reducers/auth';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const breakpoint = useContext(ResponsiveContext);
  const authState = useSelector<RootState, AuthState>(
    (state) => state.authState
  );
  const [showPw, setShowPw] = useState<boolean>(false);

  const toggleShow = () => setShowPw((prev) => !prev);

  const onSubmit = () => dispatch(login(() => navigate('/home')));

  useEffect(() => {
    if (authState.isLoggedIn) {
      navigate('/home');
    }
  }, [authState.isLoggedIn, navigate]);

  return (
    <Container onSubmit={onSubmit}>
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

      {authState.loading && <Spinner />}
      {!authState.loading && <Button type="submit" primary label="Unlock" />}
    </Container>
  );
}
