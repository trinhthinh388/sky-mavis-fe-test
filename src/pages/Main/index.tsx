import { Box, ResponsiveContext } from 'grommet';
import { useContext } from 'react';
import Header from '../../components/Header';

export default function Main() {
  const breakpoint = useContext(ResponsiveContext);
  return (
    <Box fill={breakpoint === 'small'}>
      <Header />
    </Box>
  );
}
