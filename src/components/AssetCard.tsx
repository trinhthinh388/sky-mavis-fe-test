import React from 'react';
import styled from 'styled-components';
import { Asset } from '../api/asset.api';
import { renderCurrencyAmount } from '../utils/helper';

export type AssetCardProps = {
  data?: Asset;
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 8px;
  .icon-container {
    width: 32px;
    height: 32px;

    > img {
      height: 100%;
      max-width: 100%;
    }
  }
  div.balance-amount {
    margin-left: 16px;
    .native {
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0px;
      text-align: left;
      margin-bottom: 4px;
    }

    .vnd {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0px;
      text-align: left;
      color: #8f9bb3;
    }
  }
`;

export default function AssetCard({
  data,
  ...props
}: AssetCardProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Container {...props}>
      <div className="icon-container">
        <img alt="asset icon" src={data?.iconURL} />
      </div>
      <div className="balance-amount">
        <div className="native">
          {renderCurrencyAmount(data?.nativeBalance ?? 0)} {data?.symbol}
        </div>
        <div className="vnd">
          {renderCurrencyAmount(data?.vndBalance ?? 0)} VND
        </div>
      </div>
    </Container>
  );
}
