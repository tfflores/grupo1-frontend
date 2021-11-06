import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

export default function Ingredient ({ stocks }) {
    const skus = {'5': 'Harina', 
                '10': 'Sal', 
                '15': 'Levadura fresca', 
                '50': 'Queso mozzarella granulado', 
                '60': 'Pepperoni', 
                '1000': 'Masa para pizza precocida familiar',
                '5000': 'Pizza pepperoni familiar',
                '50001': 'Ingrediente especial',
            };

    // console.log('stocks', stocks)
    return (
        <div>
            <List subheader={<ListSubheader sx={{fontWeight: 'Bold', fontSize: '17px'}}>Ingredientes</ListSubheader>}>
                { stocks?.length > 0 ? 
                    stocks?.map((ing, index) => 
                        <ListItem key={index}>
                            <ListItemText primary={`${skus[ing._id]}: ${ing.total}`}/>
                        </ListItem>
                    )
                    :
                    <div>Loading...</div>
                }
            </List>
        </div>
    )
}