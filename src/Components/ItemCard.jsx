import React, { useState, useEffect } from 'react';
import Ingredient from './Ingredient';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

const useStyles = makeStyles({
    card: {
        minHeight: '60vh',
    }
});

export default function ItemCard({ store }) {
    const classes = useStyles();
    const [stockStore, setStockStore] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://doblequeso1.ing.puc.cl/api/skus/${store._id}`);
                const data = await res.json();
                setStockStore(stockStore => ({...stockStore, [store._id]: data}));
            } catch (err) {
                setError({ errorMessage: err.toString() });
                console.log(error);
            }
            setLoading(false);
            };
            fetchData();
            });
            // fetch(`https://doblequeso1.ing.puc.cl/api/skus/${store._id}`)
            // .then(res => res.json())
            // .then(data => {
            //     setLoading(true);
            //     setStockStore(stockStore => ({...stockStore, [store._id]: data}));
            // })
            // .catch(err => {
            //     setError({ errorMessage: err.toString() });
            //     console.log(error);
            // });
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return (
        <>
        {store.cocina && 
            <Card className={classes.card} sx={{ width: '40%', margin: '20px' }}>
                <CardContent>
                    <List subheader={<ListSubheader sx={{fontWeight: 'Bold', fontSize: '20px', color: 'black'}}>Cocina</ListSubheader>}>
                        <ListItem>
                            <ListItemText primary={`ID: ${store._id}`}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={`Espacio usado: ${store.usedSpace}`}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={`Espacio Total: ${store.totalSpace}`}/>
                        </ListItem>
                    </List>
                    {loading && <Ingredient stocks={stockStore[store._id]} />}
                </CardContent>
            </Card>
            }
            {store.despacho && 
            <Card className={classes.card} sx={{ width: '40%', margin: '20px' }}>
                <CardContent>
                    <List subheader={<ListSubheader sx={{fontWeight: 'Bold', fontSize: '20px', color: 'black'}}>Bodega de Despacho</ListSubheader>}>
                        <ListItem>
                            <ListItemText primary={`ID: ${store._id}`}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={`Espacio usado: ${store.usedSpace}`}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={`Espacio Total: ${store.totalSpace}`}/>
                        </ListItem>
                    </List>
                    {loading && <Ingredient stocks={stockStore[store._id]} />}
                </CardContent>
            </Card>
            }
            {store.pulmon && 
            <Card className={classes.card} sx={{ width: '40%', margin: '20px' }}>
                <CardContent>
                    <List subheader={<ListSubheader sx={{fontWeight: 'Bold', fontSize: '20px', color: 'black'}}>Bodega General</ListSubheader>}>
                        <ListItem>
                            <ListItemText primary={`ID: ${store._id}`}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={`Espacio usado: ${store.usedSpace}`}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={`Espacio Total: ${store.totalSpace}`}/>
                        </ListItem>
                    </List>
                    {loading && <Ingredient stocks={stockStore[store._id]} />}
                </CardContent>
            </Card>
            }
            {store.recepcion && 
            <Card className={classes.card} sx={{ width: '40%', margin: '20px' }}>
                <CardContent>
                    <List subheader={<ListSubheader sx={{fontWeight: 'Bold', fontSize: '20px', color: 'black'}}>Bodega de Recepción</ListSubheader>}>
                        <ListItem>
                            <ListItemText primary={`ID: ${store._id}`}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={`Espacio usado: ${store.usedSpace}`}/>
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={`Espacio Total: ${store.totalSpace}`}/>
                        </ListItem>
                    </List>
                    {loading && <Ingredient stocks={stockStore[store._id]} />}
                </CardContent>
            </Card>
            }
        </>
    )
}