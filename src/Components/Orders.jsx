import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

const API_URL = process.env.REACT_APP_API_URL;

export default function Orders() {
  // const [orders, setOrders] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');

  // useEffect(() => {
  //     axios.get(`${API_URL}`)
  //     .then((response) => {
  //         setLoading(true);
  //         setOrders(response)
  //     })
  //     .catch((err) => {
  //         setError({ errorMessage: err.toString() });
  //     })
  // })

  return (
    <Card sx={{ width: "100%", margin: "20px" }}>
      <CardContent>
        <List
          subheader={
            <ListSubheader sx={{ fontWeight: "Bold", fontSize: "17px" }}>
              Ingredientes
            </ListSubheader>
          }
        ></List>
        Ordenes de compra pendientes
      </CardContent>
    </Card>
  );
}
