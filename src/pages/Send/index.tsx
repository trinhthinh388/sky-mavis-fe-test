import { useContext } from 'react';
import { Box, ResponsiveContext, FormField, Button } from 'grommet';
import Input from '../../components/Input';
import styled from 'styled-components';
import { ReactComponent as ChevronLeft } from '../../assets/images/svg/chevron-left.svg';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';

export const Header = styled.div`
  padding: 18px 0;
  box-shadow: 0px 4px 12px #f7f9fc;

  .title {
    flex: 1;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    margin-right: 24px;
  }

  .back-btn {
    cursor: pointer;
    width: 24px;
    height: 24px;
    border-radius: 8xp;
  }
`;

export const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    max-width: 160px;
    text-align: center;
  }

  button.secondary {
    padding: 9px 20px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    background-color: #f7f9fc;
    border-radius: 8px;
  }

  button:first-child {
    margin-right: 8px;
  }
  button:nth-child(2) {
    margin-left: 8px;
  }
`;

export default function Send() {
  const navigate = useNavigate();
  const breakpoint = useContext(ResponsiveContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <Box fill background="white">
      <Header>
        <Box
          style={{
            maxWidth: breakpoint !== 'small' ? '50rem' : undefined,
            margin: '0 auto',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            padding: '0 20px',
          }}
          fill={breakpoint === 'small'}
        >
          <div onClick={() => navigate('/home')} className="back-btn">
            <ChevronLeft />
          </div>
          <div className="title">Send Assets</div>
        </Box>
      </Header>

      <Box
        as="form"
        style={{
          maxWidth: breakpoint !== 'small' ? '50rem' : undefined,
          margin: '0 auto',
          width: '100%',
          padding: '25px 20px',
        }}
        fill={breakpoint === 'small'}
      >
        <FormField className="fluid">
          <Input disabled leftLabel="FROM" name="from" />
        </FormField>

        <FormField className="fluid">
          <Input leftLabel="TO" name="to" />
        </FormField>

        <FormField className="fluid">
          <Input leftLabel="ASSET" name="assets" />
        </FormField>

        <FormField className="fluid">
          <Input
            leftLabel="AMOUNT"
            rightLabel="AVAILABLE: 50 EUR"
            name="amount"
          />
        </FormField>

        <ActionContainer>
          <Button
            fill
            onClick={() => navigate('/home')}
            className="secondary"
            color="brand"
            secondary
          >
            Cancel
          </Button>
          <Button fill primary>
            Send
          </Button>
        </ActionContainer>
      </Box>
    </Box>
  );
}
