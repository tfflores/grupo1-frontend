import React from "react";

import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export default function Order({ name, length, ordenes }) {
  const pizzas = {
    5: "Harina",
    10: "Sal",
    15: "Levadura fresca",
    50: "Queso mozzarella granulado",
    60: "Pepperoni",
    70: "Aceituna completa",
    80: "Tomate entero",
    90: "Jamón",
    100: "Piña en conserva",
    1000: "Masa para pizza precocida familiar",
    1001: "Masa para pizza precocida mediana",
    1070: "Aceituna laminada",
    1080: "Tomate picado",
    1090: "Champiñón deshidratado",
    1100: "Piña picada",
    5000: "Pizza pepperoni familiar",
    5001: "Pizza pepperoni mediana",
    5005: "Pizzas doble pepperoni familiar",
    5006: "Pizzas doble pepperoni mediana",
    5010: "Pizzas aceituna familiar",
    5011: "Pizza aceituna mediana",
    5020: "Pizzas Hawaiana familiar",
    5021: "Pizzas Hawaiana mediana",
    5030: "Pizza vegana familiar",
    5031: "Pizza vegana mediana",
    50001: "Ingrediente especial G1",
    50002: "Ingrediente especial G2",
    50003: "Ingrediente especial G3",
    50004: "Ingrediente especial G4",
    50005: "Ingrediente especial G5",
    50006: "Ingrediente especial G6",
    50007: "Ingrediente especial G7",
    50008: "Ingrediente especial G8",
    50009: "Ingrediente especial G9",
    50010: "Ingrediente especial G10",
    50011: "Ingrediente especial G11",
    50012: "Ingrediente especial G12",
    50013: "Ingrediente especial G13",
    50014: "Ingrediente especial G14",
    50015: "Ingrediente especial G15",
    50016: "Ingrediente especial G16",
    50017: "Ingrediente especial G17",
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
          {ordenes?.map((order, index) => (
            <ListItem
              key={index}
              sx={{ paddingTop: "0px", paddingBottom: "0px" }}
            >
              <ListItemText
                primaryTypographyProps={{ fontSize: 12 }}
                primary={`ID: ${order.id}`}
                secondaryTypographyProps={{ fontSize: 11 }}
                secondary={`cliente: ${order.cliente}, producto: ${
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
