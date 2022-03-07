import styled from 'styled-components';

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
  margin-bottom: 17px;

  div:nth-child(2) {
    margin: 0 24px;
  }
`;

export const AssetContainer = styled.div`
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
