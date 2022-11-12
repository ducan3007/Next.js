import type { NextPage } from 'next';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Text from 'components/Typography/Span';

const HomePage: NextPage = () => {
  return (
    <>
      <Paper variant='outlined' square>
        <Text variant='banner' type='small'>
          A
        </Text>
      </Paper>
      <div>home page</div>
    </>
  );
};
export default HomePage;
