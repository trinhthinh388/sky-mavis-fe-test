import styled from 'styled-components';

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

export const Address = styled.div`
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

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
  padding: 20px;

  b {
    font-weight: 700;
  }

  span {
    margin-bottom: 24px;
  }

  button {
    text-align: center;
  }
`;

export const SelectedAsset = styled.div`
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

export const MaxBtn = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  padding: 2px 8px;
  width: 41px;
  height: 20px;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0.5px;
  text-align: left;
  background: #eef3fb;
  border-radius: 8px;
  cursor: pointer;
  pointer-events: all;
`;
