import { Box, makeStyles, Typography } from '@material-ui/core';
import runnersPhoto from '../assets/images/runners.jpg';

const useStyle = makeStyles({
  image: {
    width: '50%',
    height: '50%'
  },
  component: {
    margin: 50
  }
});

export const Home = () => {
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      <Typography variant="h4" style={{ marginBottom: 50 }}>Qyon Adventure</Typography>
      <Box style={{ display: 'flex' }}>
        <img src={runnersPhoto} alt="Corredores" className={classes.image} />
      </Box>
    </Box>
  );
};
