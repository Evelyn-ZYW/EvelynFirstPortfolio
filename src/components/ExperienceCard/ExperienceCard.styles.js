import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  cardContainer: {
    margin: "10px",
    maxHeight: "400px",
  },
  overlayContent: {
    // backgroundImage:
    //   "linear-gradient(0deg, rgba(248,248,248,100) 0%, rgba(214,239,255,1) 100%)",
    border: "2px solid #3f51b5",
    width: "500px",
    borderRadius: 3,
    height: "400px",
    padding: "10px 30px",

    "& p": {
      fontFamily: "'Raleway', 'sans-serif'",
      fontSize: "1em",
      lineHeight: "1.3em",
      margin: "5px 0"
    },
    "& h4": {
      fontFamily: "'Raleway', 'sans-serif'",
      fontSize: "1.5em",
      margin: "5px 0",
    },
    "& span": {
      fontFamily: "'Raleway', 'sans-serif'",
      fontSize: "1em",
      margin: "3px 0"
    },
    "& hr": {
      border: "#F9F8F8 solid 0.1px",
    },
    "&:hover": {
      display: "block",
      margin: "0 auto",
      height: "auto",
      width: "400px"
    }
  },
  expImg: {
    backgroundColor: "#F9F8F8",
    position: "relative",
    objectFit: "contain",
    bottom: "400px",
    width: "500px",
    height: "400px",
    transition: ".5s",

    "&:hover": {
      opacity: 0,
    }
  }
});
