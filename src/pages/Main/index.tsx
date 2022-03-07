import { Box, ResponsiveContext } from 'grommet';
import { useContext, useEffect } from 'react';
import Header from '../../components/Header';
import WalletCard from '../../components/WalletCard';

// Actions
import { useDispatch } from 'react-redux';
import { getWalletInfo } from '../../redux/actions/auth';

export default function Main() {
  const breakpoint = useContext(ResponsiveContext);
  const dispatch = useDispatch();

  return (
    <Box
      style={{
        maxWidth: breakpoint !== 'small' ? '50rem' : undefined,
        margin: '0 auto',
      }}
      fill={breakpoint === 'small'}
    >
      <Header />
    </Box>
  );
}
