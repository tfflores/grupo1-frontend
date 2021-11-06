import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

export default function Ingredient ({ stocks, usedSpace }) {
    const skus = {'5': 'Harina', 
                '10': 'Sal', 
                '15': 'Levadura fresca', 
                '50': 'Queso mozzarella granulado', 
                '60': 'Pepperoni', 
                '1000': 'Masa para pizza precocida familiar',
                '5000': 'Pizza pepperoni familiar',
                '50001': 'Ingrediente especial G1',
                '50002': 'Ingrediente especial G2',
                '50003': 'Ingrediente especial G3',
                '50004': 'Ingrediente especial G4',
                '50005': 'Ingrediente especial G5',
                '50006': 'Ingrediente especial G6',
                '50007': 'Ingrediente especial G7',
                '50008': 'Ingrediente especial G8',
                '50009': 'Ingrediente especial G9',
                '50010': 'Ingrediente especial G10',
                '50011': 'Ingrediente especial G11',
                '50012': 'Ingrediente especial G12',
                '50013': 'Ingrediente especial G13',
                '50014': 'Ingrediente especial G14',
                '50015': 'Ingrediente especial G15',
                '50016': 'Ingrediente especial G16',
                '50017': 'Ingrediente especial G17',
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
                    [ usedSpace > 0 && <div key={'loading'}>Loading...</div>]                
                }
            </List>
        </div>
    )
}