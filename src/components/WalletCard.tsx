import { WalletInfo } from '../api/auth.api';
import styled from 'styled-components';
import { renderCurrencyAmount } from '../utils/helper';
import { ReactComponent as CopyIcon } from '../assets/images/svg/copy.svg';
import { ReactComponent as Logo } from '../assets/images/svg/logo-white.svg';
import Skeleton from 'react-loading-skeleton';

export type WalletCardProps = {
  data: WalletInfo | null;
  isLoading?: boolean;
};

export const Card = styled.div`
  border-radius: 16px;
  background: linear-gradient(256.28deg, #1c94f4 0%, #1273ea 100%);
  padding: 18px 20px;
  box-shadow: 0px 12px 20px -4px rgba(197, 206, 224, 1);
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  color: white;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(104, 184, 248, 1);
  margin-bottom: 12px;

  span.address {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    color: #8dc9f9;
    margin-left: 8px;
  }

  .copy-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

const Balance = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .amount {
    color: white;
    .usd {
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 0px;
      margin-bottom: 4px;
    }

    .vnd {
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0px;
    }
  }

  > svg {
    align-self: end;
  }
`;

export default function WalletCard({
  data,
  isLoading = false,
}: WalletCardProps) {
  return (
    <Card>
      <Name>
        {isLoading && <Skeleton enableAnimation height="100%" width={100} />}
        {!isLoading && (
          <>
            <div>
              {data?.name}
              <span className="address">({data?.address})</span>
            </div>
            <span className="copy-icon">
              <CopyIcon />
            </span>
          </>
        )}
      </Name>
      <Balance>
        <div className="amount">
          <div className="usd">
            {isLoading && (
              <Skeleton enableAnimation height="100%" width={100} />
            )}
            {!isLoading && (
              <>{renderCurrencyAmount(data?.usdBalance ?? 0)} USD</>
            )}
          </div>
          <div className="vnd">
            {isLoading && (
              <Skeleton enableAnimation height="100%" width={100} />
            )}
            {!isLoading && (
              <>{renderCurrencyAmount(data?.vndBalance ?? 0)} VND</>
            )}
          </div>
        </div>
        <Logo />
      </Balance>
    </Card>
  );
}
