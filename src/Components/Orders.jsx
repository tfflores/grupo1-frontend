import axios from "axios";
import React, { useState, useEffect } from "react";

import Order from "./Order";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const API_URL = process.env.REACT_APP_API_URL;

const data_grupos_dev = {
  "6167730b4909ec0004ed32b2": {
    id_recep: "6167752d51533a0004922312",
    url: "https://doblequeso1.ing.puc.cl/api",
  },
  "6167730b4909ec0004ed32b3": {
    id_recep: "6167752d51533a0004922317",
    url: "https://doblequeso2.ing.puc.cl",
  },
  "6167730b4909ec0004ed32b4": {
    id_recep: "6167752d51533a000492231c",
    url: "https://doblequeso3.ing.puc.cl",
  },
  "6167730b4909ec0004ed32b5": {
    id_recep: "6167752d51533a0004922321",
    url: "http://doblequeso4.ing.puc.cl",
  },
  "6167730b4909ec0004ed32b6": {
    id_recep: "6167752d51533a0004922326",
    url: "https://doblequeso5.ing.puc.cl",
  },
  "6167730b4909ec0004ed32b7": {
    id_recep: "6167752d51533a000492232b",
    url: "http://doblequeso6.ing.puc.cl",
  },
  "6167730b4909ec0004ed32b8": {
    id_recep: "6167752d51533a0004922330",
    url: "http://doblequeso7.ing.puc.cl",
  },
  "6167730b4909ec0004ed32b9": {
    id_recep: "6167752d51533a0004922335",
    url: "https://doblequeso8.ing.puc.cl",
  },
  "6167730b4909ec0004ed32ba": {
    id_recep: "6167752d51533a000492233a",
    url: "http://napolitana9.ing.puc.cl",
  },
  "6167730b4909ec0004ed32bb": {
    id_recep: "6167752d51533a000492233f",
    url: "http://napolitana10.ing.puc.cl",
  },
  "6167730b4909ec0004ed32bc": {
    id_recep: "6167752d51533a0004922344",
    url: "http://napolitana11.ing.puc.cl",
  },
  "6167730b4909ec0004ed32bd": { id_recep: "6167752d51533a0004922349", url: "" },
  "6167730b4909ec0004ed32be": {
    id_recep: "6167752d51533a000492234e",
    url: "http://napolitana13.ing.puc.cl/api",
  },
  "6167730b4909ec0004ed32bf": {
    id_recep: "6167752d51533a0004922353",
    url: "http://napolitana14.ing.puc.cl",
  },
  "6167730b4909ec0004ed32c0": {
    id_recep: "6167752d51533a0004922358",
    url: "http://napolitana15.ing.puc.cl",
  },
  "6167730b4909ec0004ed32c1": {
    id_recep: "6167752d51533a000492235d",
    url: "http://napolitana16.ing.puc.cl",
  },
};

const data_grupos_prod = {
  "61832ff3104b2400047de07a": {
    id_recep: "618332b7736b2300048b2180",
    url: "http://127.0.0.1:8000/api",
  },
  "61832ff3104b2400047de07b": {
    id_recep: "618332b7736b2300048b2185",
    url: "https://doblequeso2.ing.puc.cl",
  },
  "61832ff3104b2400047de07c": {
    id_recep: "618332b7736b2300048b218a",
    url: "https://doblequeso3.ing.puc.cl",
  },
  "61832ff3104b2400047de07d": {
    id_recep: "618332b7736b2300048b218f",
    url: "http://doblequeso4.ing.puc.cl",
  },
  "61832ff3104b2400047de07e": {
    id_recep: "618332b7736b2300048b2194",
    url: "https://doblequeso5.ing.puc.cl",
  },
  "61832ff3104b2400047de07f": {
    id_recep: "618332b7736b2300048b2199",
    url: "http://doblequeso6.ing.puc.cl",
  },
  "61832ff3104b2400047de080": {
    id_recep: "618332b7736b2300048b219e",
    url: "http://doblequeso7.ing.puc.cl",
  },
  "61832ff3104b2400047de081": {
    id_recep: "618332b7736b2300048b21a3",
    url: "https://doblequeso8.ing.puc.cl",
  },
  "61832ff3104b2400047de082": {
    id_recep: "618332b7736b2300048b21a8",
    url: "http://napolitana9.ing.puc.cl",
  },
  "61832ff3104b2400047de083": {
    id_recep: "618332b7736b2300048b21ad",
    url: "http://napolitana10.ing.puc.cl",
  },
  "61832ff3104b2400047de084": {
    id_recep: "618332b7736b2300048b21b2",
    url: "http://napolitana11.ing.puc.cl",
  },
  "61832ff3104b2400047de085": { id_recep: "618332b7736b2300048b21b7", url: "" },
  "61832ff3104b2400047de086": {
    id_recep: "618332b7736b2300048b21bc",
    url: "http://napolitana13.ing.puc.cl/api",
  },
  "61832ff3104b2400047de087": {
    id_recep: "618332b7736b2300048b21c1",
    url: "http://napolitana14.ing.puc.cl",
  },
  "61832ff3104b2400047de088": {
    id_recep: "618332b7736b2300048b21c6",
    url: "http://napolitana15.ing.puc.cl",
  },
  "61832ff3104b2400047de089": {
    id_recep: "618332b7736b2300048b21cb",
    url: "http://napolitana16.ing.puc.cl",
  },
};

export default function Orders() {
  const classes = useStyles();
  const [recibidas, setRecibidas] = useState([]);
  const [finalizadas, setFinalizadas] = useState([]);
  const [aceptadas, setAceptadas] = useState([]);
  const [recibidasFTP, setRecibidasFTP] = useState([]);
  const [finalizadasFTP, setFinalizadasFTP] = useState([]);
  const [rechazadas, setRechazadas] = useState([]);
  const [rechazadasFTP, setRechazadasFTP] = useState([]);
  const [aceptadasFTP, setAceptadasFTP] = useState([]);
  const [loading, setLoading] = useState(false);
  const [, setError] = useState("");

  function checktype(name, order) {
    if (name === "FTP") {
      if (order.estado === "aceptada") {
        setAceptadasFTP((aceptadasFTP) => [...aceptadasFTP, order]);
      } else if (order.estado === "finalizada") {
        setFinalizadasFTP((finalizadasFTP) => [...finalizadasFTP, order]);
      } else if (order.estado === "rechazada") {
        setRechazadasFTP((rechazadasFTP) => [...rechazadasFTP, order]);
      } else {
        setRecibidasFTP((recibidasFTP) => [...recibidasFTP, order]);
      }
    } else {
      if (order.estado === "aceptada") {
        setAceptadas((aceptadas) => [...aceptadas, order]);
      } else if (order.estado === "finalizada") {
        setFinalizadas((finalizadas) => [...finalizadas, order]);
      } else if (order.estado === "rechazada") {
        setRechazadas((rechazadas) => [...rechazadas, order]);
      } else {
        setRecibidas((recibidas) => [...recibidas, order]);
      }
    }
  }

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}orders`)
      .then((response) => {
        response.data?.forEach((order) => {
          if (order.cliente in data_grupos_prod) {
            checktype("Groups", order);
          } else {
            checktype("FTP", order);
          }
        });
        setLoading(false);
      })
      .catch((err) => {
        setError({ errorMessage: err.toString() });
      });
  }, []);

  return (
    <>
      <Typography variant="h4" sx={{ fontWeight: "bold", margin: "20px" }}>
        Ordenes de canal FTP
      </Typography>
      {loading ? (
        <Box
          className={classes.box}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={"100%"}
          width={"100%"}
        >
          <CircularProgress color="white" />
        </Box>
      ) : (
        <div className={classes.root} id="items-card">
          <Order
            name={"recibidas"}
            length={recibidasFTP.length}
            ordenes={recibidasFTP}
          />
          <Order
            name={"aceptadas"}
            length={aceptadasFTP.length}
            ordenes={aceptadasFTP}
          />
          <Order
            name={"rechazadas"}
            length={rechazadasFTP.length}
            ordenes={rechazadasFTP}
          />
          <Order
            name={"finalizadas"}
            length={finalizadasFTP.length}
            ordenes={finalizadasFTP}
          />
        </div>
      )}

      <Typography variant="h4" sx={{ fontWeight: "bold", margin: "20px" }}>
        Ordenes de otros grupos
      </Typography>
      {loading ? (
        <Box
          className={classes.box}
          display="flex"
          alignItems="center"
          justifyContent="center"
          height={"100%"}
          width={"100%"}
        >
          <CircularProgress color="white" />
        </Box>
      ) : (
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
            name={"rechazadas"}
            length={rechazadas.length}
            ordenes={rechazadas}
          />
          <Order
            name={"finalizadas"}
            length={finalizadas.length}
            ordenes={finalizadas}
          />
        </div>
      )}
    </>
  );
}
