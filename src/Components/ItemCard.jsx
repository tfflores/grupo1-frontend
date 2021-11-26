import React, { useState, useEffect } from "react";
import Ingredient from "./Ingredient";
import axios from "axios";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

const API_URL = process.env.REACT_APP_API_URL;

export default function ItemCard({ store, num }) {
  const [stockStore, setStockStore] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [storeName, setStoreName] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}skus/${store._id}`)
      .then((response) => {
        setLoading(true);
        setStockStore((stockStore) => ({
          ...stockStore,
          [store._id]: response.data,
        }));
      })
      .catch((err) => {
        setError({ errorMessage: err.toString() });
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  useEffect(() => {
    if (store.cocina) {
      setStoreName("Cocina");
    } else if (store.recepcion) {
      setStoreName("Bodega de Recepción");
    } else if (store.despacho) {
      setStoreName("Bodega de Despacho");
    } else if (store.pulmon) {
      setStoreName("Bodega de Pulmon");
    } else {
      setStoreName("Bodega de General");
    }
  }, [store.cocina, store.recepcion, store.despacho, store.pulmon]);
  return (
    <Card
      sx={{ width: "40%", margin: "20px", minHeight: "55vh", height: "55vh" }}
    >
      <CardContent>
        <List
          subheader={
            <ListSubheader
              sx={{ fontWeight: "Bold", fontSize: "20px", color: "black" }}
            >
              {storeName}
            </ListSubheader>
          }
        >
          <ListItem sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <ListItemText
              primaryTypographyProps={{ fontSize: 12 }}
              primary={`ID: ${store._id}`}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <ListItemText
              primaryTypographyProps={{ fontSize: 12 }}
              primary={`Espacio usado: ${store.usedSpace}`}
            />
          </ListItem>
          <ListItem sx={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <ListItemText
              primaryTypographyProps={{ fontSize: 12 }}
              primary={`Espacio Total: ${store.totalSpace}`}
            />
          </ListItem>
        </List>
        {loading ? (
          <Ingredient
            stocks={stockStore[store._id]}
            usedSpace={store.usedSpace}
          />
        ) : (
          <div>Loading...</div>
        )}
      </CardContent>
    </Card>
  );
}
