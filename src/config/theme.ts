import { ThemeType } from 'grommet';

export const theme: ThemeType = {
  global: {
    font: {
      family: 'SF Pro Text',
    },
    colors: {
      brand: '#1273EA',
      focus: 'transparent',
      border: '#C5CEE0',
      disabledBg: '#EDF1F7',
      secondary: '#57627B',
      primary: '#231F20',
    },
    input: {
      font: {
        size: '14px',
        height: '20px',
        weight: 400,
      },
      padding: {
        horizontal: '16px',
        vertical: '10px',
      },
    },
  },
  heading: {
    color: 'primary',
  },
  textInput: {
    extend: `
      background-color: white;
      border-radius: 8px;
      &:disabled {
        background-color: #EDF1F7;
      }
    `,
    disabled: {
      opacity: 1,
    },
  },
  button: {
    primary: {
      extend: `
        padding: 9px 20px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 600;
        background: linear-gradient(256.28deg, #1C94F4 0%, #1273EA 100%);
      `,
    },
    secondary: {
      font: {
        weight: 600,
      },
      padding: {
        vertical: '9px',
        horizontal: '20px',
      },
      extend: `
        background-color: #F7F9FC;
      `,
    },
    border: {
      radius: '8px',
      width: '1px',
      color: 'transparent',
    },
    hover: {
      border: {
        width: '0',
      },
      extend: `
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      `,
    },
  },
  formField: {
    border: false,
    margin: {
      bottom: '24px',
    },
    extend: `
    width: 100%;
    max-width: 336px;
    &.fluid {
      max-width: unset;
    }
    `,
  },
};
