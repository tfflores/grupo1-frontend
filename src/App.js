import Storage from "./Components/Storage";
import Orders from "./Components/Orders";
import "./index.css";

// Material UI
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    position: "absolute",
    backgroundColor: "#fdc15f",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  },
  hola: {
    marginTop: "20px",
    display: "flex",
  },
  logo: {
    backgroundColor: "#e64e43",
    color: "white",
    fontWeight: "bold",
    fontSize: "3vw",
    alignItems: "center",
    justifyContent: "center",
    height: "60px",
    width: "50%",
    borderRadius: "3px",
    display: "relative",
    top: "50%",
    textAlign: "center",
  },
  logoPizza: {
    marginLeft: "3vw",
    width: "4vw",
    height: "4vw",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className="App-header"></header>
      <div className={classes.hola}>
        <div className={classes.logo}>Py-zzeria del GuaRemy</div>
        <img
          className={classes.logoPizza}
          src={process.env.PUBLIC_URL + "/image/pizza.png"}
          alt="pizza"
        />
        <img
          className={classes.logoPizza}
          src={process.env.PUBLIC_URL + "/image/pizza.png"}
          alt="pizza"
        />
        <img
          className={classes.logoPizza}
          src={process.env.PUBLIC_URL + "/image/pizza.png"}
          alt="pizza"
        />
        <img
          className={classes.logoPizza}
          src={process.env.PUBLIC_URL + "/image/pizza.png"}
          alt="pizza"
        />
        <img
          className={classes.logoPizza}
          src={process.env.PUBLIC_URL + "/image/pizza.png"}
          alt="pizza"
        />
        <img
          className={classes.logoPizza}
          src={process.env.PUBLIC_URL + "/image/pizza.png"}
          alt="pizza"
        />
        <img
          className={classes.logoPizza}
          src={process.env.PUBLIC_URL + "/image/pizza.png"}
          alt="pizza"
        />
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Storage />
      </Box>
      <Orders />
    </div>
  );
}

export default App;
