import { useContext, useEffect } from 'react';
import { Box, ResponsiveContext, FormField, Button } from 'grommet';
import Input from '../../components/Input';
import ModalSelect from '../../components/ModalSelect';
import styled from 'styled-components';
import { ReactComponent as ChevronLeft } from '../../assets/images/svg/chevron-left.svg';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// Actions
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getWalletInfo } from '../../redux/actions/auth';
import { getBalance } from '../../redux/actions/asset';
import { RootState } from '../../redux/store';
import { WalletInfo } from '../../api/auth.api';
import { Asset } from '../../api/asset.api';
import AssetCard from '../../components/AssetCard';

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

const Address = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  color: #8f9bb3;

  span {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    margin-left: 8px;
  }
`;

const SelectedAsset = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;

  .icon-container {
    width: 24px;
    height: 24px;
    margin-right: 8px;

    > img {
      height: 100%;
      max-width: 100%;
    }
  }
`;

export default function Send() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const breakpoint = useContext(ResponsiveContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const walletInfo = useSelector<RootState, WalletInfo | null>(
    (state) => state.authState.walletInfo
  );

  const balance = useSelector<RootState, Asset[]>(
    (state) => state.assetState.currentBalance
  );

  useEffect(() => {
    if (!walletInfo) {
      dispatch(getWalletInfo());
      dispatch(getBalance());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletInfo]);

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
          <Input
            disabled
            leftLabel="FROM"
            name="from"
            placeholder={
              <Address>
                {walletInfo?.name}
                <span>({walletInfo?.address})</span>
              </Address>
            }
          />
        </FormField>

        <FormField className="fluid">
          <Input leftLabel="TO" name="to" />
        </FormField>

        <FormField className="fluid">
          <ModalSelect
            title="Assets"
            leftLabel="ASSET"
            renderValue={(selected) => (
              <>
                {!selected && null}
                {selected && (
                  <SelectedAsset>
                    <div className="icon-container">
                      <img alt="icon" src={(selected as Asset).iconURL} />
                    </div>
                    {(selected as Asset).symbol}
                  </SelectedAsset>
                )}
              </>
            )}
          >
            {balance.map((b) => (
              <ModalSelect.Option data={b} key={b.id}>
                <AssetCard data={b} />
              </ModalSelect.Option>
            ))}
          </ModalSelect>
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
