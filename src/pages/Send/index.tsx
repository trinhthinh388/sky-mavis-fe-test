import { useContext, useEffect, useState } from 'react';
import { Box, ResponsiveContext, FormField, Button, Spinner } from 'grommet';
import Input from '../../components/Input';
import ModalSelect, {
  ModalBackdrop,
  ModalContainer,
} from '../../components/ModalSelect';
import { ReactComponent as ChevronLeft } from '../../assets/images/svg/chevron-left.svg';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import AssetCard from '../../components/AssetCard';
import BigNumber from 'bignumber.js';
import {
  Header,
  Address,
  SelectedAsset,
  MaxBtn,
  ActionContainer,
  SuccessMessage,
} from './Send.styles';

// Actions
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getWalletInfo } from '../../redux/actions/auth';
import { getBalance } from '../../redux/actions/asset';
import { RootState } from '../../redux/store';
import { WalletInfo } from '../../api/auth.api';
import { Asset, DepositParams, deposit } from '../../api/asset.api';

export default function Send() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const breakpoint = useContext(ResponsiveContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    clearErrors,
    handleSubmit,
    control,
    setValue,
    setError,
    watch,
    formState: { errors },
  } = useForm<DepositParams>();

  const walletInfo = useSelector<RootState, WalletInfo | null>(
    (state) => state.authState.walletInfo
  );

  const balance = useSelector<RootState, Asset[]>(
    (state) => state.assetState.currentBalance
  );

  const onSubmit = async () => {
    setLoading(true);
    await deposit(watch());
    setShowModal(true);
    setLoading(false);
  };

  useEffect(() => {
    if (!walletInfo) {
      dispatch(getWalletInfo());
      dispatch(getBalance());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [walletInfo]);

  return (
    <Box fill background="white">
      {showModal && (
        <ModalBackdrop>
          <ModalContainer>
            <div className="modal-title">Successfully sent</div>
            <div className="modal-body">
              <SuccessMessage>
                <span>
                  Your <b>{watch('asset')}</b> has been sent! Thank you for
                  using our service
                </span>
                <Button primary onClick={() => setShowModal(false)}>
                  Ok
                </Button>
              </SuccessMessage>
            </div>
          </ModalContainer>
        </ModalBackdrop>
      )}
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
        onSubmit={handleSubmit(onSubmit)}
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

        <Controller
          control={control}
          rules={{ required: true }}
          name="to"
          render={({ field: { value } }) => (
            <FormField className="fluid">
              <Input
                leftLabel="TO"
                value={value ?? ''}
                onChange={(e) => {
                  e.preventDefault();
                  const { value } = e.target;
                  setValue('to', value);
                }}
              />
            </FormField>
          )}
        />

        <Controller
          control={control}
          name="asset"
          rules={{ required: true }}
          render={() => (
            <FormField className="fluid">
              <ModalSelect
                title="Assets"
                leftLabel="ASSET"
                onChange={(d) => {
                  setValue('asset', (d as Asset).symbol);
                  setValue('amount', '');
                }}
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
          )}
        />

        <Controller
          control={control}
          rules={{
            min: 1,
            max: balance.find((b) => b.symbol === watch('asset'))
              ?.nativeBalance,
          }}
          name="amount"
          render={({ field: { value } }) => (
            <FormField className="fluid">
              <Input
                type="number"
                disabled={!watch('asset')}
                leftLabel="AMOUNT"
                rightLabel={
                  watch('asset')
                    ? `AVAILABLE: ${
                        balance.find((b) => b.symbol === watch('asset'))
                          ?.nativeBalance
                      } ${watch('asset')}`
                    : ''
                }
                name="amount"
                icon={
                  <MaxBtn
                    onClick={() =>
                      setValue(
                        'amount',
                        balance.find((b) => b.symbol === watch('asset'))
                          ?.nativeBalance ?? ''
                      )
                    }
                  >
                    Max
                  </MaxBtn>
                }
                reverse
                value={value ?? ''}
                onChange={(e) => {
                  e.preventDefault();
                  const { value } = e.target;
                  const n = new BigNumber(value);
                  setValue('amount', value);
                  if (
                    n.comparedTo(
                      new BigNumber(
                        balance.find((b) => b.symbol === watch('asset'))
                          ?.nativeBalance ?? 0
                      )
                    ) > 0 ||
                    n.isLessThanOrEqualTo(new BigNumber(0))
                  ) {
                    setError('amount', {
                      type: 'max',
                      message: 'Not sufficient balance',
                    });
                  } else {
                    clearErrors('amount');
                  }
                }}
                errorMessage={errors.amount?.message}
              />
            </FormField>
          )}
        />

        <ActionContainer>
          {isLoading && <Spinner />}
          {!isLoading && (
            <>
              <Button
                fill
                onClick={() => navigate('/home')}
                className="secondary"
                color="brand"
                secondary
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={
                  Object.keys(errors).length > 0 ||
                  !watch('amount') ||
                  !watch('to')
                }
                fill
                primary
              >
                Send
              </Button>
            </>
          )}
        </ActionContainer>
      </Box>
    </Box>
  );
}
