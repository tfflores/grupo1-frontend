import React from 'react';
import Ingredient from './Ingredient';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

const useStyles = makeStyles({
    card: {
        minHeight: '35vh',
    }
});

export default function ItemCard({ store, stock_store }) {
    const classes = useStyles();
    const stockStore = stock_store;

    // useEffect(() => {
    //     const idStorage = '4af9f23d8ead0e1d32000000';
    //     const idProduct = '10';
    //     fetch(`http://localhost:9000/stock/${idStorage}/${idProduct}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setStock(data) 
    //         })
    //         .catch(err => {
    //             setError({ errorMessage: err.toString() });
    //             console.log(error);
    //         });
    // })


    return (
        <>
        {store.cocina && 
            <Card className={classes.card} sx={{ width: '40%', margin: '20px' }}>
                <CardContent>
                    <Typography variant="h6">Cocina</Typography>
                    <Typography variant="body2">
                        id:  {store._id}
                        <br/>
                        Espacio usado: {store.usedSpace}
                        <br/>
                        Espacio Total: {store.totalSpace}
                    </Typography>
                    <Ingredient stocks={stockStore[store._id]} />
                </CardContent>
            </Card>
            }
            {store.despacho && 
            <Card className={classes.card} sx={{ width: '40%', margin: '20px' }}>
                <CardContent>
                    <Typography variant="h6">Bodega de Despacho</Typography>
                    <Typography variant="body2">
                        id:  {store._id}
                        <br/>
                        Espacio usado: {store.usedSpace}
                        <br/>
                        Espacio Total: {store.totalSpace}
                    </Typography>
                    <Ingredient stocks={stockStore[store._id]} />
                </CardContent>
            </Card>
            }
            {store.pulmon && 
            <Card className={classes.card} sx={{ width: '40%', margin: '20px' }}>
                <CardContent>
                    <Typography variant="h6">Bodega General</Typography>
                    <Typography variant="body2">
                        id:  {store._id}
                        <br/>
                        Espacio usado: {store.usedSpace}
                        <br/>
                        Espacio Total: {store.totalSpace}
                    </Typography>
                    <Ingredient stocks={stockStore[store._id]} />
                </CardContent>
            </Card>
            }
            {store.recepcion && 
            <Card className={classes.card} sx={{ width: '40%', margin: '20px' }}>
                <CardContent>
                    <Typography variant="h6">Bodega de Recepción</Typography>
                    <Typography variant="body2">
                        id:  {store._id}
                        <br/>
                        Espacio usado: {store.usedSpace}
                        <br/>
                        Espacio Total: {store.totalSpace}
                    </Typography>
                    <Ingredient stocks={stockStore[store._id]} />
                </CardContent>
            </Card>
            }
        </>
    )
}