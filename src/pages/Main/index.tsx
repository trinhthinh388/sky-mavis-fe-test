import { Box, ResponsiveContext } from 'grommet';
import { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import IconButton from '../../components/IconButton';
import WalletCard from '../../components/WalletCard';
import styled from 'styled-components';

// SVGs
import { ReactComponent as SendIcon } from '../../assets/images/svg/send.svg';
import { ReactComponent as ReloadIcon } from '../../assets/images/svg/reload.svg';
import { ReactComponent as CreditCardIcon } from '../../assets/images/svg/credit-card.svg';

// Actions
import { useDispatch, useSelector } from 'react-redux';
import { getWalletInfo } from '../../redux/actions/auth';
import { getBalance } from '../../redux/actions/asset';
import { RootState } from '../../redux/store';
import { WalletInfo } from '../../api/auth.api';
import { Asset } from '../../api/asset.api';
import AssetCard from '../../components/AssetCard';

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
  margin-bottom: 17px;

  div:nth-child(2) {
    margin: 0 24px;
  }
`;

const AssetContainer = styled.div`
  > .title {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    padding-left: 12px;
    margin-bottom: 12px;
  }

  .asset-card {
    background-color: #f7f9fc;
    margin-bottom: 8px;
  }
`;

export default function Main() {
  const breakpoint = useContext(ResponsiveContext);
  const dispatch = useDispatch();

  const walletInfo = useSelector<RootState, WalletInfo | null>(
    (state) => state.authState.walletInfo
  );
  const isLoading = useSelector<RootState, boolean | null>(
    (state) => state.authState.loadingWalletInfo
  );

  const assetBalance = useSelector<RootState, Asset[]>(
    (state) => state.assetState.currentBalance
  );

  useEffect(() => {
    dispatch(getWalletInfo());
    dispatch(getBalance());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box
      style={{
        maxWidth: breakpoint !== 'small' ? '50rem' : undefined,
        margin: '0 auto',
        padding: '20px',
      }}
      fill={breakpoint === 'small'}
    >
      <Header />

      <WalletCard isLoading={isLoading ?? false} data={walletInfo} />

      <ActionContainer>
        <IconButton label="Deposit" disabled icon={<CreditCardIcon />} />
        <IconButton label="Send" icon={<SendIcon />} />
        <IconButton label="Swap" disabled icon={<ReloadIcon />} />
      </ActionContainer>

      <AssetContainer>
        <div className="title">Assets</div>
        {assetBalance.map((asset) => (
          <AssetCard className="asset-card" key={asset.id} data={asset} />
        ))}
      </AssetContainer>
    </Box>
  );
}
