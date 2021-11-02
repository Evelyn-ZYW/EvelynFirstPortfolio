// import { blue } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  cardContainer: {
    margin: '10px',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  expImg: {
    // backgroundColor: '#F9F8F8',
    backgroundColor: '#E9E7FC',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    maxWidth: '500px',
    height: '100%',
    objectFit: 'contain',
    transition: '.5s',

    '&:hover': {
      opacity: 0,
    },
  },
  overlayContent: {
    // backgroundImage:
    //   "linear-gradient(0deg, rgba(248,248,248,100) 0%, rgba(214,239,255,1) 100%)",
    border: '1px solid #3f51b5',
    width: '100%',
    maxWidth: '500px',
    borderRadius: 5,
    height: 'auto',
    padding: '10px 30px',
    overflow: 'auto',

    '& p': {
      fontFamily: "'Raleway', 'sans-serif'",
      fontSize: '1em',
      lineHeight: '1.5em',
      marginBottom: 15,
    },
    '& h4': {
      fontFamily: "'Raleway', 'sans-serif'",
      fontSize: '1.5em',
      marginBottom: 15,
      marginTop: 0,
    },
    '& h5': {
      fontFamily: "'Raleway', 'sans-serif'",
      fontSize: '1.2em',
      marginBottom: 15,
    },
    '& span': {
      fontFamily: "'Raleway', 'sans-serif'",
      fontSize: '1em',
      margin: '3px 0',
    },
    '& hr': {
      border: '#F9F8F8 solid 0.1px',
    },
  },
  companyDate: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})
