import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  expContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '100%',
    justifyContent: 'space-around',
  },
  title: {
    margin: '1rem',
    paddingRight: '1rem',
    fontSize: '2rem',
    fontFamily: '"Raleway", sans-serif',
    textTransform: 'uppercase',
  },
})
