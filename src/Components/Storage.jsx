import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export default function Requests() {
    const classes = useStyles();
    const [storage, setStorage] = useState([]);
    // '6167752d51533a0004922313': {_id: '10', total: 48}
    const [stockStore, setStockStore] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://doblequeso1.ing.puc.cl/api/almacenes/')
            .then(res => res.json())
            .then(data => {
                setStorage(data)

            })
            .catch(err => {
                setError({ errorMessage: err.toString() });
            });
    });

    useEffect(() => {
        const idStorage = '6167752d51533a0004922312';
        fetch(`https://doblequeso1.ing.puc.cl/api/skusWithStock/${idStorage}`)
            .then(res => res.json())
            .then(data => {
                setStockStore(stockStore => ({...stockStore, [idStorage]: data}));
            })
            .catch(err => {
                setError({ errorMessage: err.toString() });
                console.log(error);
            });
    });

    return (
        <div className={classes.root} id="tocados-to-sell">
            {storage?.map((store) =>
                <ItemCard store={store} stock_store={stockStore}/>
            )}
        </div>
    )
}