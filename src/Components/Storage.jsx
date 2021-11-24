import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { makeStyles } from "@mui/styles";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const API_URL = process.env.REACT_APP_API_URL;

export default function Requests() {
  const classes = useStyles();
  const [storage, setStorage] = useState([]);
  const [error, setError] = useState("");
  const [num, setNum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNum((num) => num + 6);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}almacenes/`)
      .then((response) => {
        setStorage(response.data);
      })
      .catch((err) => {
        setError({ errorMessage: err.toString() });
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <div>
      {storage?.length > 0 ? (
        <div className={classes.root} id="tocados-to-sell">
          {storage?.map((store, index) => (
            <ItemCard key={index} store={store} num={num} />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}