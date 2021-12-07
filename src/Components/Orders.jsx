import axios from "axios";
import React, { useState, useEffect } from "react";

import Order from "./Order";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const API_URL = process.env.REACT_APP_API_URL;

export default function Orders() {
  const classes = useStyles();
  const [recibidas, setRecibidas] = useState([]);
  const [finalizadas, setFinalizadas] = useState([]);
  const [aceptadas, setAceptadas] = useState([]);
  const [, setLoading] = useState(false);
  const [, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}orders`)
      .then((response) => {
        setLoading(true);
        response.data?.forEach((order) => {
          if (order.estado === "aceptada") {
            setAceptadas((aceptadas) => [...aceptadas, order]);
          } else if (order.estado === "finalizada") {
            setFinalizadas((finalizadas) => [...finalizadas, order]);
          } else {
            setRecibidas((recibidas) => [...recibidas, order]);
          }
        });
      })
      .catch((err) => {
        setError({ errorMessage: err.toString() });
      });
  }, []);

  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Ordenes de canal TFP
      </Typography>
      <div className={classes.root} id="items-card">
        <Order
          name={"recibidas"}
          length={recibidas.length}
          ordenes={recibidas}
        />
        <Order
          name={"aceptadas"}
          length={aceptadas.length}
          ordenes={aceptadas}
        />
        <Order
          name={"finalizadas"}
          length={finalizadas.length}
          ordenes={finalizadas}
        />
      </div>

      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Ordenes de otros grupo
      </Typography>
      <div className={classes.root} id="items-card">
        <Order
          name={"recibidas"}
          length={recibidas.length}
          ordenes={recibidas}
        />
        <Order
          name={"aceptadas"}
          length={aceptadas.length}
          ordenes={aceptadas}
        />
        <Order
          name={"finalizadas"}
          length={finalizadas.length}
          ordenes={finalizadas}
        />
      </div>
    </>
  );
}
