import React, { useEffect, useState } from 'react';
import axios from 'axios';
//Commentary 

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

export default function Ingredient () {
    const url = "http://127.0.0.1:9000/api/stocks"
    const [ingredients, setIngredients] = useState();
    const [error, setError] = useState();
    const skus = {'5': 'Harina', '10': 'Sal'}

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setIngredients(res['data']);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
            });
    }, []);

    return (
        <List subheader={<ListSubheader sx={{fontWeight: 'Bold', fontSize: '20px'}}>Ingredientes</ListSubheader>}>
            {ingredients?.map((ing, index) => 
                <ListItem key={index}>
                    <ListItemText primary={`${skus[ing.sku]}: ${ing.total}`}/>
                </ListItem>
            )}
            {/* <div>{ingredients}</div> */}
        </List>
    )
}