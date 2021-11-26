import React from "react";

import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export default function Order({ name, length, ordenes }) {
  const pizzas = {
    5000: "Pizza pepperoni familiar",
    5001: "Pizza pepperoni mediana",
    5005: "Pizza doble pepperoni familiar",
    5006: "Pizza doble pepperoni mediana",
    5010: "Pizza aceituna famiiar",
    5011: "Pizza aceituna mediana",
    5020: "Pizza Hawaiana familiar",
  };
  return (
    <Card
      sx={{
        width: "31%",
        margin: "20px",
        minHeight: "25vh",
        height: "25vh",
      }}
    >
      <CardContent>
        <List
          sx={{
            overflowX: "auto",
            position: "relative",
            height: "18vh",
            maxHeight: "18vh",
          }}
          key={"stocks"}
          subheader={
            <ListSubheader
              sx={{ fontWeight: "Bold", fontSize: "15px", color: "black" }}
            >
              Ordenes de compra {name}: {length}
            </ListSubheader>
          }
        >
          {ordenes?.map((order) => (
            <ListItem
              key={order.id}
              sx={{ paddingTop: "0px", paddingBottom: "0px" }}
            >
              <ListItemText
                primaryTypographyProps={{ fontSize: 12 }}
                primary={`ID: ${order.id}`}
                secondaryTypographyProps={{ fontSize: 11 }}
                secondary={`cliente: ${order.cliente}, pizza: ${
                  pizzas[order.sku]
                }`}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
