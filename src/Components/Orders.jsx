import axios from "axios";
import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

const API_URL = process.env.REACT_APP_API_URL;

export default function Orders() {
  const [orders, setOrders] = useState({});
  const [loading, setLoading] = useState(false);
  const [, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}orders`)
      .then((response) => {
        setLoading(true);
        setOrders(response);
      })
      .catch((err) => {
        setError({ errorMessage: err.toString() });
      });
  });

  return (
    <Card sx={{ width: "97,5%", margin: "20px", height: "190px" }}>
      <CardContent>
        <List
          subheader={
            <ListSubheader sx={{ fontWeight: "Bold", fontSize: "17px" }}>
              Ordenes
            </ListSubheader>
          }
        >
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ fontSize: 12 }}
              primary={`Ordenes de compra pendientes: 0`}
            />
          </ListItem>
          <ListItem>
            {loading && (
              <ListItemText
                primaryTypographyProps={{ fontSize: 12 }}
                primary={`Ordenes de compra aceptadas:${orders}`}
              />
            )}
          </ListItem>
          <ListItem>
            <ListItemText
              primaryTypographyProps={{ fontSize: 12 }}
              primary="Ordenes de compra finalizadas:"
            />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
