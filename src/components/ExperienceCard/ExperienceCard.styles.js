import { blue } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  cardContainer: {
    margin: "10px",
    maxHeight: "300px"
  },
  overlayContent: {
    backgroundImage:
      "linear-gradient(0deg, rgba(231,216,201,100) 0%, rgba(214,239,255,1) 100%)",
    border: 0,
    width: "300px",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #f5f5f5",
    // color: "white",
    height: "300px",
    padding: "10px 30px",
    "& p": {
      fontFamily: "'Raleway', 'sans-serif'",
      fontSize: "1em",
      lineHeight: "1em",
      margin: "5px 0"
    },
    "& h4": {
      fontFamily: "'Raleway', 'sans-serif'",
      fontSize: "1.5em",
      margin: "5px 0"
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
      width: "300px"
    }
  },
  expImg: {
    position: "relative",
    objectFit: "cover",
    bottom: "300px",
    width: "300px",
    height: "300px",
    transition: ".5s",
    "&:hover": {
      opacity: 0
    }
  }
});
