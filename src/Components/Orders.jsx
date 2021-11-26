import axios from "axios";
import React, { useState, useEffect } from "react";

import Order from "./Order";
import { makeStyles } from "@mui/styles";

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
  const [pendientes, setPendientes] = useState([]);
  const [finalizadas, setFinalizadas] = useState([]);
  const [aceptadas, setAceptadas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:9000/api/orders`)
      .then((response) => {
        setLoading(true);
        response.data?.forEach((order) => {
          console.log(order);
          if (order.estado === "aceptada") {
            setAceptadas((aceptadas) => [...aceptadas, order]);
          } else if (order.estado === "finalizada") {
            setFinalizadas((finalizadas) => [...finalizadas, order]);
          } else {
            setPendientes((pendientes) => [...pendientes, order]);
          }
        });
      })
      .catch((err) => {
        setError({ errorMessage: err.toString() });
      });
  }, []);

  return (
    <div className={classes.root} id="items-card">
      <Order name={"aceptadas"} length={aceptadas.length} ordenes={aceptadas} />
      <Order
        name={"pendientes"}
        length={pendientes.length}
        ordenes={pendientes}
      />
      <Order
        name={"finalizadas"}
        length={finalizadas.length}
        ordenes={finalizadas}
      />
    </div>
  );
}
